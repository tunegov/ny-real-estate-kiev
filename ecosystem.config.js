module.exports = {
  apps: [
    {
      name: 'ny',
      script: './dist/servet/index.js',
      env: {
        PORT: 3000,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ]
};
