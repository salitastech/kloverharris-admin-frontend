import { ASSET_AVATARS } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';

export interface UserProps {
  firstName: string;
  lastName: string;
  title: string;
  handle: string;
  profilePic: string;
  summary: {
    projects: number;
    views: number;
    followers: number;
  };
  isFavorite: boolean;
  isOnline: boolean;
  isFollowing: boolean;
}
export const users: UserProps[] = [
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, '56x56'),
    firstName: 'Jannie',
    lastName: 'Thompson',
    title: 'Admin',
    handle: '@jannie',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: false,
    isOnline: true,
    isFollowing: true,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, '56x56'),
    firstName: 'Eliza',
    lastName: 'Shelton',
    title: 'Marketing Head',
    handle: '@jannie',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: true,
    isOnline: false,
    isFollowing: false,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, '56x56'),
    firstName: 'Irene',
    lastName: 'Owen',
    title: 'Fashion Artist',
    handle: '@jannie',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: false,
    isOnline: true,
    isFollowing: true,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, '56x56'),
    firstName: 'Rebeca',
    lastName: 'Nunez',
    title: 'Graphic Designer',
    handle: '@rebeca.graphic',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: false,
    isOnline: true,
    isFollowing: false,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, '56x56'),
    firstName: 'Stacy',
    lastName: 'Burns',
    title: 'Creative Head',
    handle: '@stacy.burns',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: true,
    isOnline: false,
    isFollowing: false,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`, '56x56'),
    firstName: 'Daniel',
    lastName: 'Murray',
    title: 'Web Master',
    handle: '@web.daniel',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: false,
    isOnline: false,
    isFollowing: false,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, '56x56'),
    firstName: 'Rocky',
    lastName: 'Hamilton',
    title: 'Marketing Head',
    handle: '@rocky.h',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isOnline: true,
    isFavorite: false,
    isFollowing: true,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`, '56x56'),
    firstName: 'Jack',
    lastName: 'Brown',
    title: 'Fashion Artist',
    handle: '@jack.brown',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: false,
    isOnline: true,
    isFollowing: true,
  },
  {
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, '56x56'),
    firstName: 'Mariya',
    lastName: 'Gray',
    title: 'Human Resource',
    handle: '@mariya.human',
    summary: {
      projects: 243,
      views: 689,
      followers: 457,
    },
    isFavorite: true,
    isOnline: false,
    isFollowing: true,
  },
];
