const got = require('got')

// 云函数入口函数
exports.main = async (event, context) => {
  const  response = await got( "https://api.github.com/search/repositories?q="+event.inputVal)
  return response.body
}

