module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', '1234567890qwe@232'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '987654321dfsa2'),
  },
});
