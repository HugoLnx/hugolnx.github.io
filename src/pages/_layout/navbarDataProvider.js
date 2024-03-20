import devData from '../../data/dev.yml';
import siteData from '../../data/site.yml';

const { name, position } = devData;
const socials = (() => {
    const { links: allLinks } = devData;
    return allLinks.filter((link) => link.navbar);
})();
const navLinks = (() => {
    const { pages } = siteData;
    return pages
        .filter((page) => !page.hidden)
        .map((page) => ({
            title: page.subtitle,
            url: page.path,
            external: page.external,
            id: page.id,
        }));
})();

export {
    socials,
    navLinks,
    name,
    position,
};
