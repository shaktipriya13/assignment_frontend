import React from "react";
import SidebarExpanded from "./SidebarExpanded";
import SidebarCollapsed from "./SidebarCollapsed";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return collapsed ? (
    <SidebarCollapsed toggleSidebar={toggleSidebar} />
  ) : (
    <SidebarExpanded toggleSidebar={toggleSidebar} />
  );
};

export default Sidebar;
