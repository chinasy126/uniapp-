let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = 'http://127.0.0.1:8088' // qe环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wx798ee9eeb7824d83',
	appKey: '44f44fb22ef0d0acfd4400d96b6ae8dc'
}

export { config }
