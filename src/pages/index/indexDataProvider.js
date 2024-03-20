import devData from '../../data/dev.yml';
import siteData from '../../data/site.yml';

const PAGE_ID = 'skills';
const pageData = siteData.pages.find((page) => page.id === PAGE_ID);
const { seeNext } = siteData;

export default {
    title: pageData.subtitle,
    dev: devData,
    seeNext,
};
