
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';


export const Sidebardata = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"

    },

    {
        title: "About",
        icon: <GroupIcon />,
        link: "/about"

    },
    {
        title: "Carrier",
        icon: <WorkIcon />,
        link: "/carrier"

    },
    {
        title: "Report",
        icon: <ReportIcon />,
        link: "/report",
        submenu: [
            {
                title: "Todos",
                icon: <ReportIcon />,
                link: "/report/todos"
            },
            {
                title: "Posts",
                icon: <ReportIcon />,
                link: "/report/posts"
            },
            {
                title:"Lists",
                icon:<ReportIcon/>,
                link:"/report/lists "

            },      
            
        ]
    },

]