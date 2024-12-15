import { getDictionary } from '@app/[lang]/dictionaries';
import type { MenuItem } from '@jumbo/types';

export async function getMenus(locale: string): Promise<Array<MenuItem>> {
  const dictionary = await getDictionary(locale);
  const { sidebar } = dictionary;

  return [
    {
      label: sidebar.menu.dashboard,
      children: [{ label: sidebar.menu.dashboard, path: `/${locale}`, icon: 'misc', }],
    },
    {
      label: sidebar.menu.company_management,
      children: [
        {
          label: sidebar.menuItem.add_new_client,
          path: `/${locale}/clients/new`,
          icon: 'contact-us',
        },
        { label: sidebar.menuItem.clients, path: `/${locale}/clients`, icon: 'contact-us', },
        {
          label: sidebar.menuItem.employees,
          path: `/${locale}/clients/employees`,
          icon: 'users-list',
        },
        {
          label: sidebar.menuItem.departments,
          path: `/${locale}/clients/departments`,
          icon: 'contact-us',
        },
      ],
    },
    {
      label: sidebar.menu.job_management,
      children: [
        {
          label: sidebar.menuItem.add_new_job,
          path: `/${locale}/jobs/create`,
        },
        { label: sidebar.menuItem.jobs, path: `/${locale}/jobs` },
        {
          label: sidebar.menuItem.job_applications,
          path: `/${locale}/job-applications`,
        },
        { label: sidebar.menuItem.interviews, path: `/${locale}/interviews` },
      ],
    },
    {
      label: sidebar.menu.leave_management,
      children: [
        {
          label: sidebar.menuItem.all_leaves,
          path: `/${locale}/leaves`,
        },
        {
          label: sidebar.menuItem.leave_requests,
          path: `/${locale}/leaves/requests`,
        },
      ],
    },
    {
      label: sidebar.menu.user_management,
      children: [
        {
          label: sidebar.menuItem.admins,
          path: `/${locale}/admins`,
        },
        {
          label: sidebar.menuItem.roles_permissions,
          path: `/${locale}/roles-permissions`,
        },
        {
          label: sidebar.menuItem.activity_logs,
          path: `/${locale}/activity-logs`,
        },
      ],
    },
    {
      label: sidebar.menu.support,
      children: [
        {
          label: sidebar.menuItem.tickets,
          path: `/${locale}/support/tickets`,
        },
      ],
    },
    {
      label: sidebar.menu.analytics_reports,
      children: [
        {
          label: sidebar.menuItem.reports,
          path: `/${locale}/analytics/reports`,
        },
        {
          label: sidebar.menuItem.statistics,
          path: `/${locale}/analytics/statistics`,
          icon: 'chart'
        },
      ],
    },
    {
      label: sidebar.menu.settings,
      children: [
        {
          label: sidebar.menuItem.general_settings,
          path: `/${locale}/settings/general`,
          icon: 'chart'
        },
        {
          label: sidebar.menuItem.leave_policies,
          path: `/${locale}/settings/leave-policies`,
        },
        {
          label: sidebar.menuItem.notification_settings,
          path: `/${locale}/settings/notifications`,
        },
      ],
    },
  ];
}
