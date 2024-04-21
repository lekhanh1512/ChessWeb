import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { SidebarContext } from "./SidebarContext";

type SidebarItemProps = {
  title: string;
  icon: React.ReactElement;
  isOpen: boolean;
  toggleItem: () => void;
  children?: Array<{
    label: string;
    to: string;
  }>;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  icon,
  isOpen,
  toggleItem,
  children,
}) => {
  const { isCollapsed } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isParentActive = children?.some(
    (child) => location.pathname === child.to
  );

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={`my-2 ${isParentActive ? "border-b-4 border-sky-400" : ""}`}
    >
      <div
        className="group flex items-center justify-between p-2 cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-150"
        onClick={toggleItem}
      >
        <div className="flex items-center">
          <div className="p-1 rounded-full text-gray-600">{icon}</div>
          <span
            className={`ml-2 text-gray-700 font-medium ${
              isCollapsed ? "hidden" : "block"
            }`}
          >
            {title}
          </span>
        </div>
        <div
          className={`transition-transform ${isCollapsed ? "hidden" : "block"}`}
        >
          {isOpen ? <ChevronDown /> : <ChevronRight />}
        </div>
      </div>
      {!isCollapsed && (
        <div
          className={`overflow-hidden cursor-pointer transition-max-height duration-700 ease-in-out ${
            isOpen ? "max-h-40" : "max-h-0"
          }`}
        >
         
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
