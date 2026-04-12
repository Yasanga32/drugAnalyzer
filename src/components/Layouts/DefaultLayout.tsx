'use client'

import React,{useState,useLayoutEffect} from "react"
import Sidebar from "../Sidebar";
import Header from "../Header";

export default function DefaultLayout({
    children,
}:{
    children:React.ReactNode;
}){

    const [sidebarOpen,setSidebarOpen] = useState(false)


    return(
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <div className="flex h-screen overflow-hidden">
                {/* sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden lg:ml-72.5">
                    {/* headers */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}