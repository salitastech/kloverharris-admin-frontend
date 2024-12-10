import { getDictionary } from '@app/[lang]/dictionaries';

export async function getMenus(locale: string) {
  const dictionary = await getDictionary(locale);
  const { sidebar } = dictionary;
  return [
    {
      label: sidebar.menu.sample,
      children: [
        {
          path: `/${locale}`,
          label: sidebar.menuItem.sample,
          icon: 'sample',
        },
      ],
    },
  ];
}
