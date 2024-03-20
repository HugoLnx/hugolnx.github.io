import devData from '../../data/dev.yml';
import siteData from '../../data/site.yml';

const {
    name,
    position,
    links: socials,
} = devData;

const navLinks = (() => {
    const { pages } = siteData;
    return pages
        .filter((page) => !page.hidden)
        .map((page) => ({
            ...page,
            title: page.subtitle,
            url: page.path,
        }));
})();

export {
    socials,
    navLinks,
    name,
    position,
};
