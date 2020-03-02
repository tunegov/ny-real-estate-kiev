module.exports = {
  apps: [
    {
      name: 'ny',
      script: './dist/server/index.js',
      env: {
        PORT: 3000,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production'
      }
    }
  ]
};
