import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../ui/collapsible';
import { FiChevronDown, FiFolder } from 'react-icons/fi';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import { baseMenuItems } from '@/core/utils/baseMenuItems';

const VerticalNavigation = () => {
  const renderMenu = (menuItems: any[]) => {
    return menuItems.map(({ key, label, value }) => {
      return (
        <SidebarMenuItem key={key}>
          <SidebarMenuButton asChild>
            <a href={value}>
              <div className="flex px-4 py-2 text-[18px]">
                <FiFolder className="mr-2" />
                <span>{label}</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  };

  const renderCollapsibleMenu = (menu: any) => {
    return (
      <Collapsible key={menu.key} defaultOpen className="group/collapsible">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel asChild>
            <CollapsibleTrigger className="flex justify-between px-4 py-2 text-[18px] font-semibold text-purple-800 hover:bg-gray-300">
              {menu.label}
              <FiChevronDown className="!important ml-auto transition-transform group-open:rotate-180" />
            </CollapsibleTrigger>
          </SidebarGroupLabel>
          <CollapsibleContent>
            <ul className="space-y-1 pl-6">{renderMenu(menu.child)}</ul>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    );
  };

  const renderMenuItem = (menu: any) => {
    return (
      <SidebarMenuItem key={menu.key}>
        <SidebarMenuButton asChild>
          <a
            href={menu.value}
            className="flex w-full justify-between px-4 py-2 text-[18px] font-semibold text-purple-800 hover:bg-gray-300"
          >
            <span>{menu.label}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>VerticalNavigation</SidebarGroupLabel> */}
          <SidebarMenu>
            {Object.values(baseMenuItems).map(menu =>
              menu.child && menu.child.length > 0
                ? renderCollapsibleMenu(menu)
                : renderMenuItem(menu),
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default VerticalNavigation;
