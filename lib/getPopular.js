const req = require('./api/request'),
      { previewScraper } = require('./api/scraper')
     
module.exports = async () => {

    const $ = await req('https://nhentai.net/')
    if (!$) throw new RequestError('Not found')

    return previewScraper($, 'popular')

}