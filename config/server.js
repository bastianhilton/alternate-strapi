module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9050),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3907b4a947097b137be1eae9c9ccf7f1'),
    },
  },
});
