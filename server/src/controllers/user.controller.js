import argon2 from 'argon2';

// models
import User from '../models/user.model';

export const create = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // check if an user is already registered
    const userExists = await User.findOne({ email });
    if (userExists) {
      const error = new Error('User already registered');
      error.statusCode = 400;
      next(error);
    }

    // hash the password
    const passwordHashed = await argon2.hash(password);

    // build a new user object
    const user = await new User({ name, email, password: passwordHashed });

    // save in database
    await user.save();

    // return the response
    res.status(200).json({ type: 'success', data: 'You registered successfully' });
  } catch (error) {
    next(error);
  }
};
