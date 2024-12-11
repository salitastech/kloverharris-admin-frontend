import { ASSET_AVATARS } from "@app/_utilities/constants/paths";

type CustomerType = {
    id: number;
    profilePic: string;
    title: string;
    desc: string;
}

export const customers: CustomerType[] = [
    {
        id: 1,
        profilePic: `${ASSET_AVATARS}/michael-dogov.jpg`,
        title: 'Albert Hall',
        desc: 'It\'s very engaging. Right?'
    },
    {
        id: 2,
        profilePic: `${ASSET_AVATARS}/jeson-born.jpg`,
        title: 'Albert Hall',
        desc: 'It\'s very engaging. Right?'
    },
    {
        id: 3,
        profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        title: 'Albert Hall',
        desc: 'It\'s very engaging. Right?'
    },
    {
        id: 4,
        profilePic: `${ASSET_AVATARS}/stella-johnson.png`,
        title: 'Albert Hall',
        desc: 'It\'s very engaging. Right?'
    },
    {
        id: 5,
        profilePic: `${ASSET_AVATARS}/jimmy-jo.jpg`,
        title: 'Albert Hall',
        desc: 'It\'s very engaging. Right?'
    },
    {
        id: 6,
        profilePic: `${ASSET_AVATARS}/avatar3.jpg`,
        title: 'Albert Hall',
        desc: 'It\'s very engaging. Right?'
    },
    {
        id: 7,
        profilePic: `${ASSET_AVATARS}/avatar7.jpg`,
        title: 'Albert Hall',
        desc: 'It\'s very engaging. Right?'
    }
]
