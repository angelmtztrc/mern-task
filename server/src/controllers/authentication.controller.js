import argon2 from 'argon2';

// models
import User from '../models/user.model';

// utils
import generateToken from '../utils/generateToken';

export const authenticate = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error('Email or Password incorrect');
      error.statusCode = 400;
      return next(error);
    }

    // check if the password match
    if (!(await argon2.verify(user.password, password))) {
      const error = new Error('Email or Password incorrect');
      error.statusCode = 400;
      return next(error);
    }

    // generate the token
    const token = await generateToken({ id: user.id, name: user.name });

    // return the response
    res.status(200).json({
      type: 'success',
      data: {
        user: {
          id: user.id,
          name: user.name
        },
        token
      }
    });
  } catch (error) {
    return next(error);
  }
};

export const refresh = async (req, res, next) => {
  // get the information of the current user
  const { user } = req;

  // generate new token
  const token = await generateToken({ id: user.id, name: user.name });

  // return the response
  res.status(200).json({
    type: 'success',
    data: {
      user: {
        id: user.id,
        name: user.name
      },
      token
    }
  });
};
