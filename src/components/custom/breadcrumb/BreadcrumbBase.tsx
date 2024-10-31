import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type BreadcrumbMenu = {
  name: string;
  path?: string;
};

type BreadcrumbProps = {
  menus: BreadcrumbMenu[];
};

function BreadcrumbBase({ menus }: BreadcrumbProps) {
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
}

export default BreadcrumbBase;
