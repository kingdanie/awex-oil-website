export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}



export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Get Quote', href: 'tel:+2348025726493' },
];