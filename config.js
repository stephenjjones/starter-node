var config = {
  port: 3002,
  secret: 'supersecret',
  redisPort: 6379,
  redisHost: 'localhost',
  routes: {
    login: '/login',
    logout: '/logout',
    register: '/account/register',
    chat: '/chat',
    facebookAuth: '/auth/facebook',
    facebookAuthCallback: '/auth/facebook/callback',
    googleAuth: '/auth/google',
    googleAuthCallback: '/auth/google/callback'
  },
  host: 'http://localhost:3002',
  facebook: {
    appID: process.env.FB_APP_ID,
    appSecret: process.env.FB_APP_SECRET
  },
  google: {
    clientID: process.env.GOOGLE_APP_ID,
    clientSecret: process.env.GOOGLE_APP_SECRET
  },
  crypto: {
    workFactor: 5000,
    keylen:32,
    randomSize: 256
  },
  database: {
    uri: 'mongodb://localhost:27017/starter'
  }
};

module.exports = config;
