module.exports = {
  apps: [{
    name: 'yh-portal',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    exec_mode: 'cluster',
    instances: 1,
    pre_start: 'npm run build'
  }]
}