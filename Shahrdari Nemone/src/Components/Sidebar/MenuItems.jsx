import "./Sidebar.css"
import RecyclingIcon from '@mui/icons-material/Recycling';
import SearchIcon from '@mui/icons-material/Search';
import FactoryIcon from '@mui/icons-material/Factory';
import PodcastsIcon from '@mui/icons-material/Podcasts';

export const MenuItems = [
  {
    title: "جستجوی پرونده",
    icon: <SearchIcon />,
    link: "/SearchCases",
  },
  {
    title: "گزارش بازدید",
    icon: <FactoryIcon />,
    link: "/ReportViews",
  },
  {
    title: "تاییدات مسول شهرسازی",
    icon: <RecyclingIcon />,
    link: "/Confirms",
  },
  {
    title: "تاییدات معاون شهرداری",
    icon: <PodcastsIcon />,
    link: "/Podcasts",
  },
  {
    title: "تاییدات شهردار",
    icon: <PodcastsIcon />,
    link: "/Podcasts",
  },
  {
    title: "گزارش گواهی",
    icon: <PodcastsIcon />,
    link: "/Podcasts",
  },    
  {
    title: "گزارش پروانه",
    icon: <PodcastsIcon />,
    link: "/Podcasts",
  },
  {
    title: "گزارش دارایی",
    icon: <PodcastsIcon />,
    link: "/Podcasts",
  },
];

