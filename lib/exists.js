const req = require('./api/request'),
      regex = require('./utils/regex')

module.exports = async (identifier) => {

    const id = identifier.toString().replace(regex.urlToId, '$2')

    const $ = await req(`https://nhentai.net/g/${id}/`)

    return $ ? true : false

}