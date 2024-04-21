import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarContext } from "./SidebarContext";

type SidebarLinkProps = {
  title: string;
  icon: React.ReactElement;
  to: string;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ title, icon, to }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCollapsed } = useContext(SidebarContext);

  return (
    <div className="my-2">
      <div
        className={`flex items-center  p-2 cursor-pointer hover:bg-gray-200 rounded-md transition-colors duration-150 ${
          location.pathname === to ? "bg-[#c5e9ff] " : ""
        }`}
        onClick={() => navigate(to)}
      >
        <div className="p-1 rounded-full text-gray-600 ">{icon}</div>
        {!isCollapsed && (
          <span className="font-medium ml-2 text-gray-700">{title}</span>
        )}
      </div>
    </div>
  );
};

export default SidebarLink;
