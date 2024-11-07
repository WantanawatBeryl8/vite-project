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

export const BreadcrumbBase = ({ menus }: BreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {menus.map((menu, index) => (
          <BreadcrumbItem key={menu.path}>
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
