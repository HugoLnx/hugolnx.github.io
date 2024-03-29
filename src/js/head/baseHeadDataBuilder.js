import socialImage from '../../img/me-268.jpg';

function generateTitle({ mainTitle, subtitle, hiddenTitleOnHead }) {
    if (hiddenTitleOnHead) return mainTitle;
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

function generateDescription({ baseDescription, description }) {
    return [baseDescription, description].join(' ');
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
        description: generateDescription(allData),
    };
}
