import { getDictionary } from '@app/[lang]/dictionaries';
import type { MenuItem } from '@jumbo/types';

export async function getMenus(locale: string): Promise<Array<MenuItem>> {
  const dictionary = await getDictionary(locale);
  const { sidebar } = dictionary;
  return [{ label: sidebar.menu.dashboard }, { label: sidebar.menu.clients }];
}
