module.exports = {
  apps: [
    {
      name: 'ai-data-scientist',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 3000',
      cwd: './',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        POOLSIDE_API_KEY: process.env.POOLSIDE_API_KEY || require('fs').readFileSync('.dev.vars','utf8').match(/POOLSIDE_API_KEY=(.+)/)?.[1]?.trim() || ''
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
