import {
  AlignJustify,
  BookOpen,
  Calendar,
  Folder,
  GraduationCap,
  Home,
  Microscope,
  Settings,
  Users,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { SidebarContext } from "./SidebarContext";
import SidebarItem from "./SidebarItem";
import SidebarLink from "./SidebarLink";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) setActiveItem(null);
  };

  const handleSelectItem = (item: string) => {
    if (isCollapsed) {
      setIsCollapsed(false);
    }
    setActiveItem((active) => (active === item ? null : item));
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse }}>
      <div className="flex bg-gray-50">
        <div
          className={`flex flex-col transition-width duration-300 ${
            isCollapsed ? "w-20" : "w-64"
          } p-4 bg-secondary shadow-lg`}
        >
          <div className="cursor-pointer px-3 mb-2" onClick={toggleCollapse}>
            {isCollapsed ? (
              <AlignJustify className="text-gray-600" />
            ) : (
              <X className="text-gray-600" />
            )}
          </div>

          {/* MENU */}
          <SidebarLink
            title="Home"
            icon={<Home strokeWidth={2} color="#2d3748" />}
            to="/"
          />

          <SidebarItem
            title="Syllabus"
            icon={<BookOpen />}
            isOpen={activeItem === "Syllabus"}
            toggleItem={() => handleSelectItem("Syllabus")}
            children={[
              {
                label: "View syllabus",
                to: "/syllabus/view-syllabus",
              },
              {
                label: "Create syllabus",
                to: "/syllabus/create-syllabus",
              },
            ]}
          />

          <SidebarItem
            title="Training program"
            icon={<Microscope />}
            isOpen={activeItem === "Training program"}
            toggleItem={() => handleSelectItem("Training program")}
            children={[
              {
                label: "View program",
                to: "/training/view-program",
              },
              {
                label: "Create Program",
                to: "/training/create-training",
              },
            ]}
          />

          <SidebarItem
            title="Class"
            icon={<GraduationCap />}
            isOpen={activeItem === "Class"}
            toggleItem={() => handleSelectItem("Class")}
            children={[
              {
                label: "View class",
                to: "/class/view-class",
              },
              {
                label: "Create class",
                to: "/class/create-class",
              },
            ]}
          />

          <SidebarLink
            title="Training calendar"
            icon={<Calendar strokeWidth={2} color="#2d3748" />}
            to="/training-calendar"
          />

          <SidebarItem
            title="User management"
            icon={<Users />}
            isOpen={activeItem === "User management"}
            toggleItem={() => handleSelectItem("User management")}
            children={[
              {
                label: "User list",
                to: "/user/list-user",
              },
              {
                label: "User permission",
                to: "/user/permission",
              },
            ]}
          />

          <SidebarLink title="Learning materials" icon={<Folder />} to="#" />

          <SidebarItem
            title="Setting"
            icon={<Settings />}
            toggleItem={() => handleSelectItem("Setting")}
            isOpen={activeItem === "Setting"}
            children={[
              {
                label: "Calendar",
                to: "#",
              },
            ]}
          />
          {/* END MENU */}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default Sidebar;
