import { getMenus as getMenuItems } from '@app/_utilities/constants/menu-items';
async function getMenus(locale: string) {
  return getMenuItems(locale);
}

export { getMenus };
