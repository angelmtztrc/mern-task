import User from '../models/user.model';

export const create = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      const error = new Error('User already registered');
      error.statusCode = 400;
      next(error);
    }

    const user = await new User({ name, email, password });
    await user.save();
    res.status(200).json({ type: 'success', data: user });
  } catch (error) {
    console.log(error);
  }
};
