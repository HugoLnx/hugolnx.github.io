import socialImage from '../../img/me-268.jpg';

function generateTitle({ mainTitle, subtitle }) {
    return `${mainTitle} - ${subtitle}`;
}

function urlJoin(urls) {
    return urls
        .map((url) => url.replace(/\/+$/, '').replace(/^\/+/, ''))
        .join('/');
}

function generatePageUrl({ domain, path }) {
    return urlJoin([domain, path]);
}

function generateFullSocialImageUrl({ domain }) {
    return urlJoin([domain, socialImage]);
}

export default function generate(pageId, siteData) {
    const pageData = siteData.pages.find((page) => page.id === pageId);
    const allData = {
        ...siteData,
        ...pageData,
    };
    return {
        ...allData,
        title: generateTitle(allData),
        pageUrl: generatePageUrl(allData),
        socialImage: generateFullSocialImageUrl(allData),
    };
}
