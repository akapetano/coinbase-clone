import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai';
import { BiTrendingUp } from 'react-icons/bi';
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri';
import { MdWeb } from 'react-icons/md';
import { BsPersonPlus } from 'react-icons/bs';

export const navItems = [
  {
    title: 'Assets',
    id: '1',
    icon: AiOutlinePieChart,
  },
  {
    title: 'Trade',
    id: '2',
    icon: BiTrendingUp,
  },
  {
    title: 'Pay',
    id: '3',
    icon: RiCoinsLine,
  },
  {
    title: 'For You',
    id: '4',
    icon: MdWeb,
  },
  {
    title: 'Learn and earn',
    id: '5',
    icon: AiOutlinePlusCircle,
  },
  {
    title: 'Notifications',
    id: '6',
    icon: RiNotification3Line,
  },
  {
    title: 'Invite Friends',
    id: '7',
    icon: BsPersonPlus,
  },
  {
    title: 'Send a gift',
    id: '8',
    icon: AiOutlineGift,
  },
];
