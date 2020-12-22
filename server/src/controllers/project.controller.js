// models
import Project from '../models/project.model';

export const create = async (req, res, next) => {
  const { title } = req.body;
  try {
    // build a new project
    const project = await new Project({ title, creator: req.user.id });

    // save in database
    await project.save();

    // return response
    res.status(200).json({
      type: 'success',
      data: project
    });
  } catch (error) {
    return next(error);
  }
};

export const getAll = async (req, res, next) => {
  const { user } = req;
  try {
    // get projects of the user logged
    const projects = await Project.find({ creator: user.id }).sort({ createAt: -1 });

    // return the response
    res.status(200).json({
      type: 'success',
      data: projects || []
    });
  } catch (error) {
    return next(error);
  }
};

export const update = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const { title } = req.body;

  try {
    let project = await Project.findById(id);

    // check if the project exists
    if (!project) {
      const error = new Error('Project not found');
      error.statusCode = 404;
      return next(error);
    }

    // check if the user is the creator of the project
    if (project.creator.toString() !== user.id) {
      const error = new Error("You don't have authorization");
      error.statusCode = 401;
      return next(error);
    }

    // update the project
    project = await Project.findByIdAndUpdate(id, { title }, { new: true });

    // return the response
    res.status(200).json({
      type: 'success',
      data: project
    });
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;

  try {
    // check if the project exists
    const project = await Project.findById(id);
    if (!project) {
      const error = new Error('Project not found');
      error.statusCode = 404;
      return next(error);
    }

    // check if the user is the creator of the project
    if (project.creator.toString() !== user.id) {
      const error = new Error("You don't have authorization");
      error.statusCode = 401;
      return next(error);
    }

    // delete the project
    await Project.findByIdAndRemove(id);

    // return the response
    res.status(200).json({
      type: 'success',
      data: 'Project deleted successfully'
    });
  } catch (error) {
    return next(error);
  }
};
