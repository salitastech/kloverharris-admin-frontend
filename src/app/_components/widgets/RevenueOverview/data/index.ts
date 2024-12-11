export type RevenueType = {
  label: string;
  value: number;
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};
export const revenueList: RevenueType[] = [
  { label: 'Male', value: 89, color: 'warning' },
  { label: 'Female', value: 56, color: 'secondary' },
  { label: 'Transgender', value: 65, color: 'info' },
  { label: 'Others', value: 12, color: 'success' },
];
