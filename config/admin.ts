export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','LpVK+R51IBNmR0NvbD9qjg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','ki0e202/WPo7oi5mUt8g4Q=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
