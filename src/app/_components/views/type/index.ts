export interface ProjectProps {
  id: string | number;
  logo: string;
  progress: number;
  status: {
    linear_color: 'success' | 'warning' | 'primary' | 'secondary' | 'inherit';
    chip_color:
      | 'primary'
      | 'secondary'
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
      | 'default';
    label: string;
  };
  team: {
    name: string;
    profilePic: string;
  }[];
};