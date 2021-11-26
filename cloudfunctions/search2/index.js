const got = require('got')

// 云函数入口函数
exports.main = async (event, context) => {
  const  response = await got("https://api.github.com/search/repositories?q=stars:>10000"+" fork:true language:"+ event.language)
  return response.body
}

