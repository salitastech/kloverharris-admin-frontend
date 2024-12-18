import { getAssetPath } from "@app/_utilities/helpers";
import { ASSET_AVATARS } from "@app/_utilities/constants/paths";

export type FriendProps = {
  id: number;
  profilePic: string;
  color: "error" | "warning" | "success";
  name: string;
};

export const friendsData: FriendProps[] = [
  {
    id: 1,
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "120x100"),
    color: "error",
    name: "Chelsea Johns",
  },
  {
    id: 2,
    profilePic: getAssetPath(`${ASSET_AVATARS}/domnic-harris.jpg`, "120x100"),
    color: "warning",
    name: "Domnic Harris",
  },
  {
    id: 3,
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "120x100"),
    color: "error",
    name: "Alexas",
  },
  {
    id: 4,
    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "120x100"),
    color: "success",
    name: "Chelsea",
  },
  {
    id: 5,
    profilePic: getAssetPath(`${ASSET_AVATARS}/alex-dolgove.png`, "120x100"),
    color: "warning",
    name: "Alex Dolgove",
  },
];
