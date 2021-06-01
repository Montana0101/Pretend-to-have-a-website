
const superagent = require('superagent') 
const cheerio = require('cheerio')
// import cheerio from 'cheerio'
// import './utils/print'


class Spider {
  url = 'http://localhost:2012/park'

  getHTMLInfo = async () => {
    const result = await superagent.get(this.url)
    return result.text
  }



  getTargetEventJson = async (html) => {
    const $ = cheerio.load(html, {
      ignoreWhitespace: true,
      xmlMode: true,
    })
    const professionInfos = []
    let list = $('.container')

    // list.map((index, element) => {
    //   const text = $(element).find('span')
    //   this.getIndexToTitle(index)
    //   professionInfos.push({
    //     [this.titleName]: text.text(),
    //   })
    // })

    console.log('打印下对巴萨',html)
  }

  generateJSON = (dataJSON) => {
    let fileName = path.resolve(__dirname, '../data/covid.json')
    let pastData = []
    let currentData = {
      data: dataJSON,
      createTime: this.getNowFormatDate(),
    }
    if (fs.existsSync(fileName)) {
      pastData = [...JSON.parse(fs.readFileSync(fileName, 'utf-8'))]
      pastData.push(currentData)
    }
    fs.writeFileSync(fileName, JSON.stringify(pastData))
  }

  getInitSpider = async () => {
    const html = await this.getHTMLInfo()
    console.log('sabhjdsa',html)
    const dataJSON = await this.getTargetEventJson(html)
    // this.generateJSON(dataJSON)
  }

  constructor() {
    this.getInitSpider()
  }
}
new Spider()
// setInterval(() => {
//   new Spider()
// }, 30000)

module.exports =  {Spider}