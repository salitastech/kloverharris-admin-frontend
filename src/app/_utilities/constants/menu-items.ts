import { getDictionary } from '@app/(app)/dictionaries';
import type { MenuItem } from '@jumbo/types';

export async function getMenus(locale: string): Promise<Array<MenuItem>> {
  const dictionary = await getDictionary('en-US');
  const { sidebar } = dictionary;

  return [
    {
      label: sidebar.menu.dashboard,
      children: [{ label: sidebar.menu.dashboard, path: `/`, icon: 'misc' }],
    },
    {
      label: sidebar.menu.website_management,
      children: [
        {
          label: sidebar.menuItem.insights,
          path: `/website/insights`,
          icon: 'contact-us',
        },
        {
          label: sidebar.menuItem.publications,
          path: `/website/publications`,
          icon: 'users-list',
        },
        {
          label: sidebar.menuItem.contacts,
          path: `/website/contacts`,
          icon: 'contact-us',
        },
        {
          label: sidebar.menuItem.book_demo,
          path: `/website/demo`,
          icon: 'contact-us',
        },
      ],
    },
    {
      label: sidebar.menu.company_management,
      children: [
        {
          label: sidebar.menuItem.add_new_client,
          path: `/clients/new`,
          icon: 'contact-us',
        },
        {
          label: sidebar.menuItem.clients,
          path: `/clients`,
          icon: 'contact-us',
        },
        {
          label: sidebar.menuItem.employees,
          path: `/clients/employees`,
          icon: 'users-list',
        },
        {
          label: sidebar.menuItem.departments,
          path: `/clients/departments`,
          icon: 'contact-us',
        },
      ],
    },
    {
      label: sidebar.menu.job_management,
      children: [
        {
          label: sidebar.menuItem.add_new_job,
          path: `/jobs/create`,
        },
        { label: sidebar.menuItem.jobs, path: `/jobs` },
        {
          label: sidebar.menuItem.job_applications,
          path: `/job-applications`,
        },
        { label: sidebar.menuItem.interviews, path: `/interviews` },
      ],
    },
    {
      label: sidebar.menu.leave_management,
      children: [
        {
          label: sidebar.menuItem.all_leaves,
          path: `/leaves`,
        },
        {
          label: sidebar.menuItem.leave_requests,
          path: `/leaves/requests`,
        },
      ],
    },
    {
      label: sidebar.menu.user_management,
      children: [
        {
          label: sidebar.menuItem.admins,
          path: `/admins`,
        },
        {
          label: sidebar.menuItem.roles_permissions,
          path: `/roles-permissions`,
        },
        {
          label: sidebar.menuItem.activity_logs,
          path: `/activity-logs`,
        },
      ],
    },
    {
      label: sidebar.menu.support,
      children: [
        {
          label: sidebar.menuItem.tickets,
          path: `/support/tickets`,
        },
      ],
    },
    {
      label: sidebar.menu.analytics_reports,
      children: [
        {
          label: sidebar.menuItem.reports,
          path: `/analytics/reports`,
        },
        {
          label: sidebar.menuItem.statistics,
          path: `/analytics/statistics`,
          icon: 'chart',
        },
      ],
    },
    {
      label: sidebar.menu.settings,
      children: [
        {
          label: sidebar.menuItem.general_settings,
          path: `/${locale}/settings/general`,
          icon: 'chart',
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
