module.exports = {

    tagSpacerPatternn: /(\([0-9,]+\))([a-zA-Z])/g,
    tagSplitPattern: /(?<=\))\s(?=[a-zA-Z])/,

    urlToId: /(https?:\/\/nhentai\.net\/g\/)(\d+)\/?.*/,
    gToId: /\/g\/(\d+)\//,
    hrefToPage: /(&||\?)page=(\d+)/,
    doubleSlashToHttps: /(https:)?(\/\/)/,
    styleToAspectRatio: /padding:0 0 (.*)% 0/,
    resultsToInt: /(.*) Results/i
}