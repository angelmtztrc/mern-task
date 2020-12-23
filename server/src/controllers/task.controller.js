// models
import Task from '../models/task.model';
import Project from '../models/project.model';

export const create = async (req, res, next) => {
  const { user } = req;
  const { description, status, project } = req.body;

  try {
    // check if the project exists
    const projectExists = await Project.findById(project);
    if (!projectExists) {
      const error = new Error('Project not found');
      error.statusCode = 404;
      return next(error);
    }

    // check if the user is the owner of the project
    if (projectExists.creator.toString() !== user.id) {
      const error = new Error("You don't have authorization");
      error.statusCode = 401;
      return next(error);
    }

    // build the task
    const task = new Task({ description, status, project });

    // save in database
    await task.save();

    // return the response
    res.status(200).json({
      type: 'success',
      data: task
    });
  } catch (error) {
    return next(error);
  }
};
