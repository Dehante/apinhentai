const regex = require('./utils/regex'),
      req = require('./api/request'),
      { doujinScraper } = require('./api/scraper')

module.exports = async (identifier) => {

    //if identifier is an url, convert it to a proper id
    const id = identifier.replace(regex.urlToId, '$2')

    const $ = await req(`https://nhentai.net/g/${id}/`)

    const returnedObj = doujinScraper($, id)

    return returnedObj    
    
}