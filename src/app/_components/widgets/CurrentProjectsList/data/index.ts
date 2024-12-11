import { ASSET_LOGOS } from '@app/_utilities/constants/paths';

export type CurrentProjectType = {
  id: number;
  name: string;
  logo: string;
  dueDate: string;
  isDelayed: boolean;
  progress: number;
  team: number[];
  category: {
    name: string;
    color: string;
  };
};

export const projects: CurrentProjectType[] = [
  {
    id: 21,
    name: 'Jumbo React',
    logo: `${ASSET_LOGOS}/project-logo-3.png`,
    dueDate: 'July 30, 2020',
    isDelayed: false,
    progress: 70,
    team: [1, 2, 5, 6, 8, 9],
    category: {
      name: 'Development',
      color: '#7352C7',
    },
  },
  {
    id: 22,
    name: 'Wieldy',
    logo: `${ASSET_LOGOS}/project-logo-1.png`,
    dueDate: 'July 25, 2020',
    isDelayed: false,
    progress: 60,
    team: [1, 2, 3, 5],
    category: {
      name: 'Designing',
      color: '#3BD2A2',
    },
  },
  {
    id: 24,
    name: 'Mouldify',
    logo: `${ASSET_LOGOS}/project-logo-5.png`,
    dueDate: 'July 09, 2020',
    isDelayed: true,
    progress: 90,
    team: [2, 6, 9, 10],
    category: {
      name: 'Marketing',
      color: '#E73145',
    },
  },
  {
    id: 28,
    name: 'Jumbo React Admin',
    logo: `${ASSET_LOGOS}/project-logo-2.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 20,
    team: [2, 3, 4, 5, 6, 8],
    category: {
      name: 'Development',
      color: '#7352C7',
    },
  },
  {
    id: 29,
    name: 'Drift Angular',
    logo: `${ASSET_LOGOS}/project-logo-7.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 40,
    team: [1, 2, 3, 5, 6, 8, 9, 10],
    category: {
      name: 'Marketing',
      color: '#E73145',
    },
  },
  {
    id: 30,
    name: 'Jumbo React',
    logo: `${ASSET_LOGOS}/project-logo-10.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 70,
    team: [2, 3, 5, 6, 7, 8],
    category: {
      name: 'Designing',
      color: '#3BD2A2',
    },
  },
  {
    id: 32,
    name: 'Wieldy',
    logo: `${ASSET_LOGOS}/project-logo-8.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 60,
    team: [1, 2, 3, 6, 9],
    category: {
      name: 'Designing',
      color: '#3BD2A2',
    },
  },
  {
    id: 34,
    name: 'Mouldify',
    logo: `${ASSET_LOGOS}/project-logo-3.png`,
    dueDate: 'July 15, 2020',
    isDelayed: true,
    progress: 90,
    team: [5, 6, 7],
    category: {
      name: 'Marketing',
      color: '#E73145',
    },
  },
  {
    id: 38,
    name: 'Jumbo React Admin',
    logo: `${ASSET_LOGOS}/project-logo-2.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 20,
    team: [1, 2, 5, 6, 7, 8],
    category: {
      name: 'Development',
      color: '#7352C7',
    },
  },
  {
    id: 39,
    name: 'Drift Angular',
    logo: `${ASSET_LOGOS}/project-logo-7.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 40,
    team: [1, 2, 3, 4, 5, 6],
    category: {
      name: 'Development',
      color: '#7352C7',
    },
  },
  {
    id: 41,
    name: 'Jumbo React',
    logo: `${ASSET_LOGOS}/project-logo-5.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 70,
    team: [4, 5, 8, 9],
    category: {
      name: 'Designing',
      color: '#3BD2A2',
    },
  },
  {
    id: 42,
    name: 'Wieldy',
    logo: `${ASSET_LOGOS}/project-logo-6.png`,
    dueDate: '06-25-2020',
    isDelayed: false,
    progress: 60,
    team: [4, 5, 6, 2, 3],
    category: {
      name: 'Designing',
      color: '#3BD2A2',
    },
  },
  {
    id: 44,
    name: 'Mouldify',
    logo: `${ASSET_LOGOS}/project-logo-10.png`,
    dueDate: 'July 15, 2020',
    isDelayed: true,
    progress: 90,
    team: [1, 5, 9],
    category: {
      name: 'Designing',
      color: '#3BD2A2',
    },
  },
  {
    id: 48,
    name: 'Jumbo React Admin',
    logo: `${ASSET_LOGOS}/project-logo-3.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 20,
    team: [1, 2, 4, 5],
    category: {
      name: 'Development',
      color: '#7352C7',
    },
  },
  {
    id: 49,
    name: 'Drift Angular',
    logo: `${ASSET_LOGOS}/project-logo-2.png`,
    dueDate: 'July 15, 2020',
    isDelayed: false,
    progress: 40,
    team: [1, 2, 3, 4, 5, 6, 8, 9],
    category: {
      name: 'Marketing',
      color: '#E73145',
    },
  },
];

export const menuItems = [
  {
    title: 'Scrum board',
    slug: 'scrum board',
  },
  {
    title: 'Team',
    slug: 'team',
  },
  {
    title: 'Reports',
    slug: 'reports',
  },
];
