import { baseMenuItems } from '@/core/utils/sitemap';
import { renderCollapsibleMenu, renderMenuItem } from './menuRenderers';
import { useLocation } from 'react-router-dom';

const VerticalNavigation = () => {
  const location = useLocation();

  const getActiveKey = (key: string) => {
    return location.pathname === key
      ? 'bg-gray-300 text-purple-900 font-bold'
      : '';
  };

  return (
    <div className="bg-gray-100">
      <ul>
        {Object.values(baseMenuItems).map(menu =>
          menu.children && menu.children.length > 0
            ? renderCollapsibleMenu(menu, getActiveKey)
            : renderMenuItem(menu, getActiveKey),
        )}
      </ul>
    </div>
  );
};

export default VerticalNavigation;
