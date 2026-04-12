import React from "react";
import Link from "next/link";
import SidebarDropdown from "./SidebarDropdown";
import { usePathname } from "next/navigation";


const SidebarItem = ({item, pageName, setPageName} : any)=>{

    const handleClick = () =>{
        const updatePageName = pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";
        return setPageName(updatePageName);
    };


    const pathName = usePathname();

    const isActive = (item:any) =>{
        if(item.children){
            return item.children.some((child:any) => isActive(child))
        }
        return false;
    };

    const isItemActive = isActive(item)

    return(
        <>
         <li>
            <Link
            href={item.route}
            onClick={handleClick}
            className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2.5 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                isItemActive
                ? "bg-graydark dark:bg-meta-4"
                : ""
            }`}
            >

                {item.icon}
                {item.label}
            </Link>

            {item.children && (
                <div
                  className={`translate transform overflow-hidden ${
                    pageName !== item.label.toLowerCase() && "hidden"}`}
                >

                    <SidebarDropdown item={item.children}/>

                </div>
            )}
         </li>
        </>
    );
};


export default SidebarItem;