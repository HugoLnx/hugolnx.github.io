import devData from '../../data/dev.yml';

const { links: allLinks } = devData;
const socials = allLinks.filter((link) => link.navbar);
const { name, position } = devData;

export {
    socials,
    name,
    position,
};
