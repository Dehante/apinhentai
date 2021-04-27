const availableLanguages = [
    'english',
    'japanese',
    'chinese'
]

module.exports = {

    doujinScraper ($, id) {

        let details = {}

        $('.tag-container.field-name').find('.count').each(function () {
            const el = $(this)
            el.text(` (${el.text()}) `)
        })

        $('.tag-container.field-name').text().split('\n').map(string => string.trim()).filter(e => e).map((tag, i, tags) => {
            if (tag.endsWith(':') && !tags[i + 1].endsWith(':')) {
                details[tag.substring(0, tag.length - 1).toLowerCase()] = tags[i + 1].replace(tagSpacerPatternn, '$1 $2').split(tagSplitPattern)
            }
        })

        //define language
        details.language = details.languages.find(language => availableLanguages.includes(language.split(" (")[0]))

        return {

            title: {
                default: $('#info').find('h1').text(),
                pretty:  $('#info').find('h1 .pretty').text(),
                native: $('#info').find('h2').text()
            },
            details,
            pages: Object.entries($('.gallerythumb').find('img')).map(image => image[1].attribs ? image[1].attribs['data-src'].replace(/t(\.(jpg|png|gif))/, '$1').replace('t.nhentai', 'i.nhentai') : null).filter(link => link),
            thumbnails: Object.entries($('.gallerythumb').find('img')).map(image => image[1].attribs? image[1].attribs['data-src']: null).filter(link => link),
            link: `https://nhentai.net/g/${id}/`
        }
    }
}