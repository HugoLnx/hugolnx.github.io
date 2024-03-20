import aboutMeData from './about-me.yml';
import siteData from '../../data/site.yml';

const PAGE_ID = 'about-me';
const pageData = siteData.pages.find((page) => page.id === PAGE_ID);

export default {
    title: pageData.subtitle,
    ...aboutMeData,
};
