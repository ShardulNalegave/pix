import { IconFolders, IconHome, IconSettings, IconUsers } from "@tabler/icons-react";
import { ReactNode } from "react";

export function Sidebar() {
  return (
    <div className='h-screen flex flex-col p-[12px] border-r-[0.5px] border-solid border-black border-opacity-50'>
      <SidebarItem icon={<IconHome/>} />
      <SidebarItem active icon={<IconFolders/>} />
      <SidebarItem icon={<IconUsers/>} />
      <div className="grow"></div>
      <SidebarItem icon={<IconSettings/>} />
    </div>
  );
}

function SidebarItem({
  active = false,
  icon,
} : {
  active?: boolean,
  icon: ReactNode,
}) {
  return (
    <div className={`my-[5px] p-[10px] ${active ? 'bg-accent text-zinc-200 shadow-lg' : 'text-zinc-900 dark:text-zinc-200'} rounded`}>
      {icon}
    </div>
  );
}