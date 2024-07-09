import { IconFolders, IconHome, IconSettings, IconUsers } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export function Sidebar() {
  return (
    <div className='h-screen flex flex-col p-[12px] border-r-[0.5px] border-solid border-black border-opacity-50'>
      <SidebarItem to='/' icon={<IconHome/>} />
      <SidebarItem to='/albums' icon={<IconFolders/>} />
      <SidebarItem to='/people' icon={<IconUsers/>} />
      <div className="grow"></div>
      <SidebarItem to='/settings' icon={<IconSettings/>} />
    </div>
  );
}

function SidebarItem({
  icon,
  to,
} : {
  icon: ReactNode,
  to: string,
}) {
  return (
    <Link to={to} className={`my-[5px] p-[10px] [&.active]:bg-accent [&.active]:text-zinc-200 [&.active]:shadow-lg text-zinc-900 dark:text-zinc-200 rounded cursor-pointer`}>
      {icon}
    </Link>
  );
}