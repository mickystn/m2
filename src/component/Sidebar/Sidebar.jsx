import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { Sidebar,SubMenu, Menu, MenuItem   } from "react-pro-sidebar";
import logo from '../../assets/logo.png'

import { useState } from "react";

import imgAcc from "../../assets/img-acc.png"

export default function Sidebarnew({children}){
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const handleMenuClick = (menu) => {
        if(selectedMenu===menu){
            return setSelectedMenu(null);
        }
        setSelectedMenu(menu);
    };
    const isMenuSelected = (menu) => {
        if(menu === selectedMenu){
            return menu === selectedMenu;
        }
        return null
    };
    const menuItemStyles = {
        button: {
            '&:hover': {
                backgroundColor: "#1561AD33",
                borderRight: '4px solid #ddd',
                borderColor:'#1D1666'
            },
        }
    }
    const selectExpanded=(open)=>{
        return(
            <div>
                {collapsed? 
                    null
                    :
                    <span>
                        {open ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>}
                    </span>
                }
            </div>
        )
    }
    return (
        <div>  
            <Sidebar width="330px" className='h-screen' collapsed={collapsed} >
                <div className="h-full flex flex-col justify-between">
                    <Menu menuItemStyles={menuItemStyles}  renderExpandIcon={({open})=>{ return selectExpanded(open)}}>
                        {collapsed? 
                                <div className="flex justify-center items-center my-10">
                                    <button className="p-2.5 bg-blue-600 rounded-md" onClick={()=>{setCollapsed(!collapsed)}}>
                                        <MenuRoundedIcon className="text-white"/>
                                    </button>
                                </div>
                            :
                                <div className="flex justify-between items-center mx-5">
                                    <MenuItem disabled className="py-10 ">
                                        {collapsed? null:<img src={logo} className="w-30"/>}
                                    </MenuItem>
                                    <button className="p-2.5 bg-blue-600 flex rounded-md" onClick={()=>{setCollapsed(!collapsed)}}>
                                        <MenuRoundedIcon className="text-white"/>
                                    </button>
                                </div>
                        }
                        <MenuItem icon={<DashboardOutlinedIcon/>} component={<Link to="/"/>}>
                            Dashboard 
                        </MenuItem>
                        <MenuItem icon={<FeedOutlinedIcon/>} component={<Link to="/form"/>}>
                            Form 
                        </MenuItem>
                        <SubMenu icon={<LayersOutlinedIcon/>} label="Status tracking"
                        onClick={()=>{handleMenuClick('tracking')}} className={`${isMenuSelected('tracking') ? "bg-blue-300 rounded-sm":"transparent"}`} >
                            <MenuItem>Status tracking</MenuItem>
                            <MenuItem>Flow tracking</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<ListAltOutlinedIcon/>}>
                            My task 
                        </MenuItem>
                        <MenuItem icon={<NotificationsNoneOutlinedIcon/>}>
                            Announcement 
                        </MenuItem>
                        <SubMenu icon={<ManageAccountsOutlinedIcon/>} label="User Management" 
                        onClick={()=>{handleMenuClick('user_management')}} className={`${isMenuSelected('user_management') ? "bg-blue-300 rounded-sm":"transparent"}`}>
                            <MenuItem>User management</MenuItem>
                            <MenuItem>Permission</MenuItem>
                            <MenuItem>Create announcement</MenuItem>
                        </SubMenu>
                        <SubMenu icon={<StorageOutlinedIcon/>} label="Master data" 
                        onClick={()=>{handleMenuClick('masterdata')}} className={`${isMenuSelected('masterdata') ? "bg-blue-300 rounded-sm":"transparent"}`}>
                            <MenuItem>Customer</MenuItem>
                            <MenuItem>CS</MenuItem>
                            <MenuItem>Plant Location</MenuItem>
                            <MenuItem>Plant in</MenuItem>
                            <MenuItem>Plant out</MenuItem>
                            <MenuItem>Plant Location Supplier</MenuItem>
                            <MenuItem>Doctype</MenuItem>
                            <MenuItem>Classmark</MenuItem>
                            <MenuItem>Material</MenuItem>
                        </SubMenu>
                    </Menu>
                    <Menu>
                        <div className='mb-10'>
                            <MenuItem icon={<SettingsIcon/>} component={<Link to="/"/>}>
                                Settings
                            </MenuItem>
                            <MenuItem icon={<LogoutIcon/>}>
                                Logout
                            </MenuItem>
                        </div>
                        {collapsed? 
                                <div className="flex justify-center items-center mb-10">
                                    <img src={imgAcc}/>
                                </div>
                            :
                                <div className="flex justify-evenly items-center mx-5 mb-10">
                                    <img src={imgAcc}/>
                                    <div>
                                        <h1>นายสมชาย จิตใจดี</h1>
                                        <h1>somchai@scgp.com</h1>
                                    </div>
                                </div>
                        }
                    </Menu>
                </div>
            </Sidebar>
            
        </div>
    )
}