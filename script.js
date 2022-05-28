const article = {
    data1: [
        "kompas.com",
        "kompasiana.com",
    ],
};

const locationHref = window.location.href
const searchParam = new URLSearchParams(window.location.search)

const isValidArticleName = (name) => 
    name.map((item) => locationHref.includes(item)).includes(true)


if (isValidArticleName(article.data1) && searchParam.get('page') !== 'all') {
    searchParam.set('page', 'all')
    window.location.search = searchParam
}

