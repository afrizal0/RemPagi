
const locationHref = window.location.href
const searchParam = new URLSearchParams(window.location.search)

// check if its article name is supported article
const isValidArticleName = (name) => name.map((item) => locationHref.includes(item)).includes(true)

const articleName = {
    mediaType1: [
        "kompas.com",
        "kompasiana.com",
        "tribunnews.com",
        "viva.co.id",
        "suara.com",
        "jawapos.com",
        "pikiran-rakyat.com"
    ],
    mediaType2: [
        "sindonews.com"
    ]
};

if (isValidArticleName(articleName.mediaType1) && searchParam.get('page') !== 'all') {
    searchParam.set('page', 'all')
    window.location.search = searchParam
}
else if(isValidArticleName(articleName.mediaType2) && searchParam.get('showpage') !== 'all') {
    searchParam.set('showpage', 'all')
    window.location.search = searchParam
}

