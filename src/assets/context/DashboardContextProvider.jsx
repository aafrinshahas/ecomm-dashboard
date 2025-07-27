import { createContext, useState } from "react";

import { icons } from "../utilis/icons";
import { useTheme } from "../context/ThemeContext";
import { images } from "../utilis/images";
import { List } from 'lucide-react';
const Dashboardcontext = createContext()

const DashboardContextProvider = (data) => {
    

const [user, setUser] = useState('ByeWind');
const [active, setActive] = useState("Default");

const { theme } = useTheme();
//arrow
const arrow = icons.arrow[theme];

//dashboard
const menuItems = [
{ label: "Default", icon: icons.default[theme], path: "/default" },
{ label: "eCommerce", icon: icons.ecomm[theme], path: "/ecommerce" },
{ label: "Projects", icon: icons.project[theme], path: "/" },
{ label: "Online Courses", icon: icons.course[theme], path:"/" },
  {label: 'Order', icon: icons.clipboard[theme], path:"/order"}
];

//pages
const pageMenuItems = [
{ label: "User Profile", icon: icons.profile[theme], sublabel: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers'] },
{ label: "Account", icon: icons.account[theme] },
{ label: "Corporate", icon: icons.corporate[theme] },
{ label: "Blog", icon: icons.blog[theme] },
{ label: "Social", icon: icons.social[theme] },
];

//notifications
const notifications = [
{message: 'You have a bug that needs....', timing: 'Just now', icon: icons.bugbeetle},
{message: 'New user registered', timing: '59 minutes ago', icon: icons.user},
{message: 'You have a bug that needs....', timing: '12 hours ago', icon: icons.bugbeetle},
{message: 'Andi Lane subscribed to you', timing: 'Today, 11:59 AM', icon: icons.broadcast}
]

//activities

const activities = [
{activity: 'You have a bug that needs...', time: 'Just now', userimage: images.activityone},
{activity: 'Released a new version', time: '59 minutes ago', userimage: images.activitytwo},
{activity: 'Submitted a bug', time: '12 hours ago', userimage: images.activitythree},
{activity: 'Modified A data in Page X', time: 'Today, 11:59 AM', userimage: images.activityfour},
{activity: 'Deleted a page in Project X', time: 'Feb 2, 2023', userimage: images.activityfive}
]

//contacts

const contacts = [
{username: 'Natali Craig', profileimage: images.contactone},
{username: 'Drew Cano', profileimage: images.contacttwo},
{username: 'Orlando Diggs', profileimage: images.contactthree},
{username: 'Andi Lane', profileimage: images.contactfour},
{username: 'Kate Morrison', profileimage: images.contactfive},
{username: 'Koray Okumus', profileimage: images.contactsix},
]

//Product List

const productlist = [
{name: 'ASOS Ridley High Waist', price: '$79.49', quantity: '82', amount: '$6,518.18'},
{name: 'Marco Lightweight Shirt', price: '$128.50', quantity: '37', amount: '$4,754.50'},
{name: 'Half Sleeve  Shirt', price: '$39.99', quantity: '64', amount: '$2,559.36'},
{name: 'Lightweight Jacket', price: '$20.00', quantity: '184', amount: '$3,680.00'},
{name: 'Marco Shoes', price: '$79.49', quantity: '64', amount: '$1,965.81'},

]

//order list
const firstbaselist = [
{
orderId: '#CM9801',
userProfile: images.user1,
user: 'Natali Craig',
project: 'Landing Page',
address: 'Meadow Lane Oakland',
date: 'Just now',
status: 'In Progress',
statusColor: '#8A8CD9',
statusColorDark: '#8A8CD9' 
},
{
orderId: '#CM9802',
userProfile: images.user2,
user: 'Kate Morrison',
project: 'CRM Admin pages',
address: 'Larry San Francisco',
date: 'A minute ago',
status: 'Complete',
statusColor: '#4AA785',
statusColorDark: '#4AA785' 
},
{
orderId: '#CM9803',
userProfile: images.user3,
user: 'Drew Cano',
project: 'Client Project',
address: 'Bagwell Avenue Ocala',
date: '1 hour ago',
status: 'Pending',
statusColor: '#59A8D4',
statusColorDark: '#59A8D4'
},
{
orderId: '#CM9804',
userProfile: images.user4,
user: 'Orlando Diggs',
project: 'Admin Dashboard',
address: 'Washburn Baton Rouge',
date: 'Yesterday',
status: 'Approved',
statusColor: '#FFC555',
statusColorDark: '#FFC555'
},
{
orderId: '#CM9805',
userProfile: images.user5,
user: 'Andi Lane',
project: 'App Landing Page',
address: 'Nest Lane Olivette',
date: 'Feb 2, 2023',
status: 'Rejected',
statusColor: '#1C1C1C66',
statusColorDark: '#FFFFFF66' 
}
];


const secondbaselist = [
{
orderId: '#CM9801',
userProfile: images.user4,
user: 'Orlando Diggs',
project: 'Admin Dashboard',
address: 'Washburn Baton Rouge',
date: 'Yesterday',
status: 'Approved',
statusColor: '#FFC555',
statusColorDark: '#FFC555'
},
{
orderId: '#CM9802',
userProfile: images.user5,
user: 'Andi Lane',
project: 'App Landing Page',
address: 'Nest Lane Olivette',
date: 'Feb 2, 2023',
status: 'Rejected',
statusColor: '#1C1C1C66',
statusColorDark: '#FFFFFF66' 
},
{
orderId: '#CM9803',
userProfile: images.user2,
user: 'Kate Morrison',
project: 'CRM Admin pages',
address: 'Larry San Francisco',
date: 'A minute ago',
status: 'Complete',
statusColor: '#4AA785',
statusColorDark: '#4AA785' 
},
{
orderId: '#CM9804',
userProfile: images.user1,
user: 'Natali Craig',
project: 'Landing Page',
address: 'Meadow Lane Oakland',
date: 'Just now',
status: 'In Progress',
statusColor: '#8A8CD9',
statusColorDark: '#8A8CD9' 
},
{
orderId: '#CM9805',
userProfile: images.user2,
user: 'Kate Morrison',
project: 'CRM Admin pages',
address: 'Larry San Francisco',
date: 'A minute ago',
status: 'Complete',
statusColor: '#4AA785',
statusColorDark: '#4AA785' 
},
{
orderId: '#CM9806',
userProfile: images.user3,
user: 'Drew Cano',
project: 'Client Project',
address: 'Bagwell Avenue Ocala',
date: '1 hour ago',
status: 'Pending',
statusColor: '#59A8D4',
statusColorDark: '#59A8D4'
},
{
orderId: '#CM9807',
userProfile: images.user4,
user: 'Orlando Diggs',
project: 'Admin Dashboard',
address: 'Washburn Baton Rouge',
date: 'Yesterday',
status: 'Approved',
statusColor: '#FFC555',
statusColorDark: '#FFC555'
},
{
orderId: '#CM9808',
userProfile: images.user5,
user: 'Andi Lane',
project: 'App Landing Page',
address: 'Nest Lane Olivette',
date: 'Feb 2, 2023',
status: 'Rejected',
statusColor: '#1C1C1C66',
statusColorDark: '#FFFFFF66' 
},
{
orderId: '#CM9809',
userProfile: images.user2,
user: 'Kate Morrison',
project: 'CRM Admin pages',
address: 'Larry San Francisco',
date: 'A minute ago',
status: 'Complete',
statusColor: '#4AA785',
statusColorDark: '#4AA785' 
},
{
orderId: '#CM9810',
userProfile: images.user1,
user: 'Natali Craig',
project: 'Landing Page',
address: 'Meadow Lane Oakland',
date: 'Just now',
status: 'In Progress',
statusColor: '#8A8CD9',
statusColorDark: '#8A8CD9' 
}
];


const fristorderlist =[...firstbaselist, ...firstbaselist];
const secondorderlist = [...secondbaselist];

const orderlist = [fristorderlist, secondorderlist, fristorderlist, secondorderlist,fristorderlist]


return(
<Dashboardcontext.Provider value={{user, menuItems, pageMenuItems, notifications, activities, contacts, productlist, orderlist, arrow, active, setActive}}>
{data.children}
</Dashboardcontext.Provider>
)

}

export default DashboardContextProvider;

export {Dashboardcontext}