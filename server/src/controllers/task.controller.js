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

export const getAllByProject = async (req, res, next) => {
  const { user } = req;
  const { project } = req.query;
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

    // get all task of the project
    const tasks = await Task.find({ project }).sort({ createdAt: -1 });

    // return the response
    res.status(200).json({
      type: 'success',
      data: tasks || []
    });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const { description, status } = req.body;

  try {
    // check if the task exists
    let task = await Task.findById(id);
    if (!task) {
      const error = new Error('Task not found');
      error.statusCode = 404;
      return next(error);
    }

    // check if project exist
    const projectExists = await Project.findById(task.project);
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

    // update the task
    task = await Task.findByIdAndUpdate(id, { description, status }, { new: true });

    // return the response
    res.status(200).json({
      type: 'success',
      data: task
    });
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;

  try {
    // check if the task exists
    const task = await Task.findById(id);
    if (!task) {
      const error = new Error('Task not found');
      error.statusCode = 404;
      return next(error);
    }

    // check if project exist
    const projectExists = await Project.findById(task.project);
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

    // delete the task
    await Task.findByIdAndRemove(id);

    // return the response
    res.status(200).json({
      type: 'success',
      data: 'Task deleted successfully'
    });
  } catch (error) {
    return next(error);
  }
};
