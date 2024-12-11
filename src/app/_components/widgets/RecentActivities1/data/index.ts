import { ASSET_AVATARS, ASSET_IMAGES } from '@app/_utilities/constants/paths';

type MediaType = {
  id: number;
  name: string;
  mediaUrl: string;
};

export type ActivityType = {
  id: number;
  user: {
    id: number;
    name: string;
    profilePic: string;
  };
  mediaList: MediaType[];
  content: string;
};

export type ActivityGroupType = {
  date: string;
  data: ActivityType[];
};

export const recentActivities: ActivityGroupType[] = [
  {
    date: '21 Mar, 2024',
    data: [
      {
        id: 1,
        user: {
          id: 12,
          name: 'Alex Dolgove',
          profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        mediaList: [
          {
            id: 123,
            name: 'Media1',
            mediaUrl: `${ASSET_IMAGES}/properties/bedroom-1.jpeg`,
          },
          {
            id: 124,
            name: 'Media2',
            mediaUrl: `${ASSET_IMAGES}/properties/bedroom-2.jpeg`,
          },
          {
            id: 125,
            name: 'Media3',
            mediaUrl: `${ASSET_IMAGES}/properties/bedroom-3.jpeg`,
          },
        ],
        content: 'Alex Dolgove left a 5 star review on Albama’s House',
      },
      {
        id: 2,
        user: {
          id: 12,
          name: 'Kailash',
          profilePic: `${ASSET_AVATARS}/avatar5.jpg`,
        },
        mediaList: [],
        content: 'Kailash is looking for a house in New Jersey, USA',
      },
      {
        id: 3,
        user: {
          id: 12,
          name: 'Chelsea Johns',
          profilePic: `${ASSET_AVATARS}/avatar7.jpg`,
        },
        mediaList: [],
        content: `Agent Chelsea Johns has added 7 new photos to the property Albama's house`,
      },
    ],
  },
  {
    date: '20 Mar, 2024',
    data: [
      {
        id: 4,
        user: {
          id: 12,
          name: 'Domnic Brown',
          profilePic: `${ASSET_AVATARS}/avatar9.jpg`,
        },
        mediaList: [
          {
            id: 123,
            name: 'Media1',
            mediaUrl: `${ASSET_IMAGES}/wall/community1.png`,
          },
          {
            id: 124,
            name: 'Media1',
            mediaUrl: `${ASSET_IMAGES}/wall/community2.png`,
          },
          {
            id: 125,
            name: 'Media1',
            mediaUrl: `${ASSET_IMAGES}/wall/community3.png`,
          },
        ],
        content: 'Welcome to a new agent Domnic Brown in the company.',
      },
      {
        id: 5,
        user: {
          id: 12,
          name: 'Michael Phelps',
          profilePic: `${ASSET_AVATARS}/avatar10.jpg`,
        },
        mediaList: [],
        content:
          'Michael Phelps is looking for an office space in Colarado, USA.',
      },
    ],
  },

  {
    date: '19 Mar, 2024',
    data: [
      {
        id: 6,
        user: {
          id: 12,
          name: 'Domnic Harris',
          profilePic: `${ASSET_AVATARS}/avatar11.jpg`,
        },
        mediaList: [],
        content: "Domnic Harris left a 5 star rating on Albama's property.",
      },
      {
        id: 7,
        user: {
          id: 12,
          name: 'Garry Sobars',
          profilePic: `${ASSET_AVATARS}/avatar12.jpg`,
        },
        mediaList: [],
        content:
          ' Callback request from Garry Sobars for the property Dmitri House',
      },
      {
        id: 8,
        user: {
          id: 12,
          name: 'Guptil Sharma',
          profilePic: `${ASSET_AVATARS}/avatar13.jpg`,
        },
        mediaList: [
          {
            id: 123,
            name: 'Media1',
            mediaUrl: `${ASSET_IMAGES}/products/marcus-urbenz.jpg`,
          },
          {
            id: 124,
            name: 'Media2',
            mediaUrl: `${ASSET_IMAGES}/products/maria-fatima.jpg`,
          },
          {
            id: 125,
            name: 'Media3',
            mediaUrl: `${ASSET_IMAGES}/products/iPhone.jpeg`,
          },
        ],
        content: `Guptil Sharma left a 5 star rating on Aloboma's house`,
      },
    ],
  },
  {
    date: '18 Mar, 2024',
    data: [
      {
        id: 9,
        user: {
          id: 12,
          name: 'Jeson Born',
          profilePic: `${ASSET_AVATARS}/avatar11.jpg`,
        },
        mediaList: [],
        content: `Jeson Born is looking for a house in New jersey, USA.`,
      },
      {
        id: 10,
        user: {
          id: 12,
          name: 'Jimmy Jo',
          profilePic: `${ASSET_AVATARS}/avatar10.jpg`,
        },
        mediaList: [],
        content: `Agent Jimmy Jo has added 7 new photos to the property Albama's house`,
      },
      {
        id: 11,
        user: {
          id: 12,
          name: 'Jonathan Lee',
          profilePic: `${ASSET_AVATARS}/avatar9.jpg`,
        },
        mediaList: [
          {
            id: 123,
            name: 'Media1',
            mediaUrl: `${ASSET_AVATARS}/martin-j.jpg`,
          },
          {
            id: 124,
            name: 'Media1',
            mediaUrl: `${ASSET_AVATARS}/jeson-born.jpg`,
          },
          {
            id: 125,
            name: 'Media1',
            mediaUrl: `${ASSET_AVATARS}/jonathan.jpg`,
          },
        ],
        content: 'Welcome to a new agent Jonathan Lee in the company.',
      },
      {
        id: 12,
        user: {
          id: 12,
          name: 'Joshua',
          profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        },
        mediaList: [],
        content: `Joshua is looking for an office space in Colarado, USA.`,
      },
      {
        id: 13,
        user: {
          id: 12,
          name: 'Stella Johnson',
          profilePic: `${ASSET_AVATARS}/avatar5.jpg`,
        },
        mediaList: [],
        content: `Stella Johnson left a 5 star rating on Albama's property.`,
      },
    ],
  },
];
