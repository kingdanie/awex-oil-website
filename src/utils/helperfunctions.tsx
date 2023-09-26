export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}



export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Our Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Get Quote', href: 'tel:+2348025726493' },
];



export function slugToTitle(slug: String) {
  // Remove the leading slash, if it exists
  const cleanedSlug = slug.startsWith('/') ? slug.slice(1) : slug;

  // Split the slug by hyphens to separate words
  const words = cleanedSlug.split('-');

  // Capitalize the first letter of each word and join them with a space
  const title = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return title;
}

