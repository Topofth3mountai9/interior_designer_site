import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLayerGroup,
  FaPenNib,
} from 'react-icons/fa';

import { AiFillHome } from 'react-icons/ai';
export const nav_links = [
  {
    id: 1,
    label: 'home',
  },
  {
    id: 2,
    label: 'about',
  },
  {
    id: 3,
    label: 'services',
  },
  {
    id: 4,
    label: 'portfolio',
  },
  {
    id: 5,
    label: 'blog',
  },
  {
    id: 6,
    label: 'contact',
  },
];

export const social_media_links = [
  {
    id: 1,
    icon: <FaTwitter />,
  },
  {
    id: 2,
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
];

export const my_services = [
  {
    id: 1,
    icon: <FaLayerGroup />,
    individual_services: [
      'space planning',
      'furniture layout',
      'surface_selection',
    ],
  },
  {
    id: 2,
    icon: <FaPenNib />,
    individual_services: [
      'lighting decoration',
      'Interior design',
      'installation',
    ],
  },
  {
    id: 3,
    icon: <AiFillHome />,
    individual_services: [
      'color selection',
      'window treatments',
      'constructor documentations',
    ],
  },
];

export const my_projects = [
  {
    id: 1,
    img: '/projects/work1.jpg',
    label: 'interior design',
    title: 'Giving your home a new style',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime deleniti dolores harum perspiciatis perferendis culpa quis recusandae porro pariatur vero!',
  },
  {
    id: 2,
    img: '/projects/work2.jpg',
    label: 'interior design',
    title: 'Giving your home a new style',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime deleniti dolores harum perspiciatis perferendis culpa quis recusandae porro pariatur vero!',
  },
  {
    id: 3,
    img: '/projects/work3.jpg',
    label: 'interior design',
    title: 'Giving your home a new style',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime deleniti dolores harum perspiciatis perferendis culpa quis recusandae porro pariatur vero!',
  },
  {
    id: 4,
    img: '/projects/work4.jpg',
    label: 'interior design',
    title: 'Giving your home a new style',
    paragraph:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime deleniti dolores harum perspiciatis perferendis culpa quis recusandae porro pariatur vero!',
  },
];

export const achievement_stats = [
  {
    id: 1,
    label: 'clients',
    num: 1479,
  },
  {
    id: 2,
    label: 'projects done',
    num: 2342,
  },
  {
    id: 3,
    label: 'cups of coffee',
    num: 1000,
  },
];
