export default {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MERNTask',
      version: '1.0.0',
      description: 'This is the API of the MERNTask project builded with ExpressJS and MongoDB',
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    host: 'http://localhost:5000/api',
    basePath: '/'
  },
  apis: ['./models/*.js', './routes/*.js']
};
