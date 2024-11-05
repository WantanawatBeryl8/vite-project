import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbMenu {
  name: string;
  path?: string;
}

interface BreadcrumbProps {
  menus: BreadcrumbMenu[];
}

const BreadcrumbBase: React.FC<BreadcrumbProps> = ({ menus }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {menus.map((menu, index) => (
          <BreadcrumbItem key={index}>
            {menu.path ? (
              <BreadcrumbLink>
                <Link to={menu.path}>{menu.name}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{menu.name}</BreadcrumbPage>
            )}
            {index < menus.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbBase;
