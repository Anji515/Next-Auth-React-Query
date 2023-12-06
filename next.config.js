/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        appDir:true,
        serverActions:true
    },
    images:{
        remotePatterns : [{protocol:"https",hostname:"st4.depositphotos.com",port:""},{protocol:"https",hostname:"www.appjetty.com",port:""},{protocol:"https",hostname:"img.freepik.com",port:""}]
    }
}

module.exports = nextConfig