const request = require('request')
const cheerio = require('cheerio')

const aocurl = 'https://adventofcode.com/2018/day/1/input'

const frequencies = []

request(aocurl, (err, res, html) => {
  console.log(html)
})
