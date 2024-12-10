import { ASSET_AVATARS } from '@app/_utilities/constants/paths';
import { getAssetPath, getCustomDateTime } from '@app/_utilities/helpers';

export type MessagesDataProps = {
  user: {
    id: number;
    name: string;
    profile_pic: string;
  };
  message: string;
  date: string;
};
export const messagesData: MessagesDataProps[] = [
  {
    user: {
      id: 1,
      name: 'Domnic Harris',
      profile_pic: getAssetPath(`${ASSET_AVATARS}/domnic-harris.jpg`, '40x40'),
    },
    message: 'I think its a good idea, lets do it then.',
    date: getCustomDateTime(-5, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    user: {
      id: 2,
      name: 'Joe Root',
      profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, '40x40'),
    },
    message: 'Hey, lets have a cricket match this sunday, what you say?',
    date: getCustomDateTime(-15, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    user: {
      id: 3,
      name: 'Dennis lilly',
      profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, '40x40'),
    },
    message: 'George has invited you for the dinner, will you go?',
    date: getCustomDateTime(-45, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
  {
    user: {
      id: 4,
      name: 'Sara Taylor',
      profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, '40x40'),
    },
    message:
      'Hi, I have shared some documents with you, please go through them.',
    date: getCustomDateTime(-55, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
  },
];
