import { SvgIconComponent } from '@mui/icons-material';
import AlbumIcon from '@mui/icons-material/Album';
import AppleIcon from '@mui/icons-material/Apple';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DiamondIcon from '@mui/icons-material/Diamond';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export interface ActivityItem {
  icon: SvgIconComponent;
  title: string;
  subheader: string;
  color: string;
}
export const recentActivities: ActivityItem[] = [
  {
    icon: AppleIcon,
    title: 'Expo 2.0 iOS app release',
    subheader: '10 hours ago',
    color: 'rgb(0, 95, 238)',
  },
  {
    icon: MoneyOffIcon,
    title: 'Secure payment gateway implemented',
    subheader: '4 days ago',
    color: 'rgb(238, 114, 0)',
  },
  {
    icon: CardGiftcardIcon,
    title: 'Reward points received',
    subheader: '1 week ago',
    color: 'green',
  },
  {
    icon: DiamondIcon,
    title: 'A diamond badge is earned',
    subheader: '3 weeks ago',
    color: 'rgb(63, 81, 181)',
  },
  {
    icon: InstagramIcon,
    title: 'An official instagram account is setup',
    subheader: '2 months ago',
    color: 'rgb(33, 150, 243)',
  },
  {
    icon: RestaurantIcon,
    title: 'Dinner with client Jeff Brown',
    subheader: '6 months ago',
    color: 'rgb(238, 114, 0)',
  },
  {
    icon: AlbumIcon,
    title: 'Blazing start of the timeline',
    subheader: '1 year ago',
    color: '#6200EE',
  },
];
