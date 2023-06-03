/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  serverRuntimeConfig: {
    
    dbConfig:{
      database: 'japa101',
      host: '127.0.0.1',
      port: '3306',
      user:'root',
      password:'123456',
    },
    secret: 'XXXXXX'
  }

}

module.exports = nextConfig
