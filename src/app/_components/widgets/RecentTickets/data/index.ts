import { ASSET_AVATARS } from '@app/_utilities/constants/paths';

export type TicketType = {
  id: number;
  user: {
    id: number;
    name: string;
    profilePic: string;
  };
  title: string;
  createdDate: string;
  priority: {
    id: number;
    label: string;
    slug: string;
    color:
      | 'default'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'error'
      | 'success'
      | 'warning';
  };
};

export const tickets: TicketType[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Joy parish',
      profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
    },
    title: 'Need a quick support on setting',
    createdDate: '1 day ago ',
    priority: { id: 1, label: 'High', slug: 'high', color: 'error' },
  },
  {
    id: 2,
    user: {
      id: 1,
      name: 'John Smith',
      profilePic: `${ASSET_AVATARS}/avatar5.jpg`,
    },
    title: 'How can replace stepper controle with default',
    createdDate: '5 day ago ',
    priority: { id: 1, label: 'Low', slug: 'high', color: 'success' },
  },
  {
    id: 3,
    user: {
      id: 1,
      name: 'Mukesh k',
      profilePic: `${ASSET_AVATARS}/avatar11.jpg`,
    },
    title: 'Pre-sale query about the product',
    createdDate: '2 day ago ',
    priority: { id: 1, label: 'Low', slug: 'high', color: 'success' },
  },
  {
    id: 4,
    user: {
      id: 1,
      name: 'sonu siram',
      profilePic: `${ASSET_AVATARS}/avatar9.jpg`,
    },
    title: 'Regarding customization service',
    createdDate: '1 day ago ',
    priority: { id: 1, label: 'Low', slug: 'high', color: 'success' },
  },
  {
    id: 5,
    user: {
      id: 1,
      name: 'Dennis Roy',
      profilePic: `${ASSET_AVATARS}/avatar13.jpg`,
    },
    title: 'How can replace stepper controle with default',
    createdDate: '1 day ago ',
    priority: { id: 1, label: 'High', slug: 'high', color: 'error' },
  },
];
