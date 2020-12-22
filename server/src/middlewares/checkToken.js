import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
  // check if the token is in headers
  const token = req.header('x-auth-token');
  if (!token) {
    const error = new Error('Token not provided');
    error.statusCode = 401;
    return next(error);
  }

  try {
    // verify the token
    const user = jwt.verify(token, process.env.JWT_SECRET_SEED);
    req.user = user;

    // go to the next middleware
    next();
  } catch (error) {
    return next(error);
  }
};

export default checkToken;
