import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { FiFolder, FiChevronDown } from 'react-icons/fi';

export const renderMenu = (
  menuItems: any[],
  getActiveKey: (key: string) => string,
) => {
  return menuItems.map(({ key, label, value }) => (
    <li key={key} className="my-1">
      <a
        href={value}
        className={`flex items-center px-4 py-1 text-[18px] hover:bg-gray-300 ${getActiveKey(value)}`}
      >
        <FiFolder className="mr-2" />
        <span>{label}</span>
      </a>
    </li>
  ));
};

export const renderCollapsibleMenu = (
  menu: any,
  getActiveKey: (key: string) => string,
) => {
  return (
    <Collapsible key={menu.key} defaultOpen className="group/collapsible">
      <div className="p-0">
        <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-1 text-[18px] font-semibold text-purple-800 hover:bg-gray-300">
          {menu.label}
          <FiChevronDown className="ml-auto transition-transform group-open:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ul className="space-y-1 pl-6">
            {renderMenu(menu.children, getActiveKey)}
          </ul>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export const renderMenuItem = (
  menu: any,
  getActiveKey: (key: string) => string,
) => {
  return (
    <li key={menu.key} className="my-1">
      <a
        href={menu.value}
        className={`flex w-full justify-between px-4 py-1 text-[18px] font-semibold text-purple-800 hover:bg-gray-300 ${getActiveKey(menu.value)}`}
      >
        <span>{menu.label}</span>
      </a>
    </li>
  );
};
