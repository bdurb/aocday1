const request = require('request')
const cheerio = require('cheerio')

const url = 'https://adventofcode.com/2018/day/1/input'

request(url, (err, res, html) => {
  if (!err & res.statusCode == 200) {
    const $ = cheerio.load(html)
  }
})