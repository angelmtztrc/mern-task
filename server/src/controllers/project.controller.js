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
