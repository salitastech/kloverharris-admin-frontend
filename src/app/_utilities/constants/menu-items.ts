import { getDictionary } from '@app/[lang]/dictionaries';
import type { MenuItem } from '@jumbo/types';

export async function getMenus(locale: string): Promise<Array<MenuItem>> {
  const dictionary = await getDictionary(locale);
  const { sidebar } = dictionary;
  return [
    {
      label: sidebar.menu.dashboard,
      children: [{ label: sidebar.menu.dashboard, path: `/${locale}` }],
    },
    {
      label: sidebar.menu.clients,
      children: [
        { label: sidebar.menuItem.add_new_client, path: '#' },
        { label: sidebar.menuItem.clients, path: '#' },
      ],
    },
  ];
}
