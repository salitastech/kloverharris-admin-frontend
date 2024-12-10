import { ASSET_AVATARS } from '@app/_utilities/constants/paths';
import * as Helpers from '@app/_utilities/helpers';
import type { IUser } from '../../../../interfaces';

export const authUser: IUser = {
  email: 'kiley.brown@example.com',
  name: 'Kiley Brown',
  // profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`, `60x60`),
  profile_pic: "https://via.placeholder.com/60x60.png",
  handle: 'kiley.brown@example.com',
  job_title: 'Creative Head',
  is_2fa_enabled: true,
};
