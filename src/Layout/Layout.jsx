

import Sidebar from "../component/Sidebar/Sidebar"
import Topbar from "../component/Topbar/Topbar"

export default function Layout({children}){
    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col w-screen">
                {children}
            </div>
            
        </div>
    )
}