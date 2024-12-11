import {
  CreditCardOutlined,
  DeveloperBoardOutlined,
  FacebookOutlined,
  HandshakeOutlined,
  Instagram,
  LinkedIn,
  Mail,
  MessageOutlined,
  NotificationsActiveRounded,
  PaymentOutlined,
  Refresh,
  Settings,
  SettingsOutlined,
  SvgIconComponent,
  TaskAltOutlined,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CallEndIcon from '@mui/icons-material/CallEnd';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import GridViewIcon from '@mui/icons-material/GridView';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ListIcon from '@mui/icons-material/List';
import LockResetIcon from '@mui/icons-material/LockReset';
import LoginIcon from '@mui/icons-material/Login';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import RunningWithErrorsOutlinedIcon from '@mui/icons-material/RunningWithErrorsOutlined';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { type SxProps, Theme } from '@mui/material';
import { IconType } from 'react-icons';
import {
  RiAdvertisementLine,
  RiBuildingLine,
  RiListView,
  RiLockPasswordLine,
  RiMailLine,
  RiMoneyDollarCircleLine,
  RiNotificationLine,
  RiSecurePaymentLine,
  RiShieldKeyholeLine,
  RiTeamLine,
  RiUser6Line,
} from 'react-icons/ri';

type Icon = {
  name: string;
  Component: SvgIconComponent | IconType;
  props?: {
    sx?: SxProps<Theme>;
  };
};

const APP_ICONS: Icon[] = [
  { name: 'misc', Component: GraphicEqIcon, props: { sx: { fontSize: 20 } } },
  {
    name: 'crypto',
    Component: CurrencyExchangeOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'listing',
    Component: ListAltOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'crm',
    Component: SupportAgentOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'intranet',
    Component: PieChartOutlineOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'ecommerce',
    Component: ShoppingCartOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  { name: 'news', Component: NewspaperIcon, props: { sx: { fontSize: 20 } } },
  /** cards menu */
  {
    name: 'widget',
    Component: WidgetsOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'metric',
    Component: LeaderboardOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  /** apps menu */
  {
    name: 'chat',
    Component: ChatOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'contact',
    Component: ContactsOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'mail',
    Component: EmailOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  /** extensions menu */
  {
    name: 'editor',
    Component: ModeEditOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'dnd',
    Component: DragIndicatorIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'dropzone',
    Component: BackupOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'sweet-alert',
    Component: WarningAmberIcon,
    props: { sx: { fontSize: 20 } },
  },
  /** modules menu */
  {
    name: 'calendar',
    Component: EventNoteIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'chart',
    Component: InsertChartOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  { name: 'map', Component: MyLocationIcon, props: { sx: { fontSize: 20 } } },
  /** auth-pages menu */
  { name: 'login', Component: LoginIcon, props: { sx: { fontSize: 20 } } },
  {
    name: 'signup',
    Component: PersonAddAltIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'forgot-password',
    Component: PasswordOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'reset-password',
    Component: LockResetIcon,
    props: { sx: { fontSize: 20 } },
  },
  /** extra-pages menu */
  {
    name: 'about-us',
    Component: InfoOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'contact-us',
    Component: ContactPageOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'call-outs',
    Component: CallEndIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'pricing-plan',
    Component: CreditCardIcon,
    props: { sx: { fontSize: 20 } },
  },
  { name: '404', Component: ErrorOutlineIcon, props: { sx: { fontSize: 20 } } },
  {
    name: '500',
    Component: RunningWithErrorsOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'lock-screen',
    Component: ScreenLockRotationIcon,
    props: { sx: { fontSize: 20 } },
  },
  /** user menu */
  {
    name: 'profile',
    Component: AccountBoxOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'profile-2',
    Component: VerifiedUserOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'profile-3',
    Component: AccountCircleOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'profile-4',
    Component: SupervisedUserCircleOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'social-wall',
    Component: StreamOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  /** list-view menu */
  {
    name: 'projects-list',
    Component: ViewListOutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },
  { name: 'users-list', Component: ListIcon, props: { sx: { fontSize: 20 } } },
  /** grid-view menu */
  {
    name: 'projects-grid',
    Component: GridViewIcon,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'users-grid',
    Component: Grid3x3OutlinedIcon,
    props: { sx: { fontSize: 20 } },
  },

  {
    name: 'facebook-outlined',
    Component: FacebookOutlined,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'twitter',
    Component: Twitter,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'instagram',
    Component: Instagram,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'google',
    Component: Instagram,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'youtube',
    Component: YouTube,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'linkedin',
    Component: LinkedIn,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'refresh',
    Component: Refresh,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'settings',
    Component: Settings,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'settings-outlined',
    Component: SettingsOutlined,
    props: { sx: { fontSize: 20 } },
  },

  {
    name: 'message-outlined',
    Component: MessageOutlined,
  },
  {
    name: 'mail',
    Component: Mail,
  },
  {
    name: 'task-alt-outlined',
    Component: TaskAltOutlined,
  },
  {
    name: 'notifications-active-rounded',
    Component: NotificationsActiveRounded,
  },

  /** other icons */

  {
    name: 'onboarding-1',
    Component: DeveloperBoardOutlined,
  },
  {
    name: 'onboarding-2',
    Component: HandshakeOutlined,
  },
  {
    name: 'onboarding-3',
    Component: PaymentOutlined,
  },
  {
    name: 'public-profile',
    Component: RiUser6Line,
  },
  {
    name: 'team',
    Component: RiTeamLine,
  },
  {
    name: 'active-login',
    Component: RiLockPasswordLine,
  },
  {
    name: 'organizations',
    Component: RiBuildingLine,
  },
  {
    name: 'email',
    Component: RiMailLine,
  },
  {
    name: 'reset-password',
    Component: RiLockPasswordLine,
  },
  {
    name: '2-factor-auth',
    Component: RiShieldKeyholeLine,
  },
  {
    name: 'memberships-plan',
    Component: RiMoneyDollarCircleLine,
  },
  {
    name: 'payment-methods',
    Component: RiSecurePaymentLine,
  },
  {
    name: 'invoices',
    Component: CreditCardOutlined,
    props: { sx: { fontSize: 20 } },
  },
  {
    name: 'statements',
    Component: RiListView,
  },
  {
    name: 'advertising',
    Component: RiAdvertisementLine,
  },
  {
    name: 'notifications',
    Component: RiNotificationLine,
  },
];

export { APP_ICONS, type Icon };
