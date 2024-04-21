import React from "react";

export type SidebarContextType = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  isCollapsed: false,
  toggleCollapse: () => {},
});
