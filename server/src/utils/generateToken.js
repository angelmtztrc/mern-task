import jwt from 'jsonwebtoken';

const generateToken = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET_SEED, { expiresIn: '2h' }, (error, token) => {
      if (error) {
        reject('Something failed generating the token');
      }
      resolve(token);
    });
  });
};

export default generateToken;
