// import { siteMap } from '@/core/utils';
import { SidebarProvider } from '@/components/ui/sidebar';
import VerticalNavigation from '../VerticalNavigation';

interface LayoutMainProps {
  children?: React.ReactNode;
  //   activePath?: (typeof siteMap)[keyof typeof siteMap];
}
export const LayoutMain = ({ children }: LayoutMainProps) => {
  return (
    <div className="grid min-h-screen grid-cols-[240px_1fr] grid-rows-subgrid overflow-hidden [grid-template-areas:'header_header_header''aside_main_main''aside_main_main']">
      <div className="h-16 w-full bg-background-slip-purple [grid-area:header]">
        Header
      </div>
      <SidebarProvider>
        <div className="min-h-[calc(100vh-64px)] w-60 [grid-area:aside]">
          <VerticalNavigation />
        </div>
      </SidebarProvider>
      <div className="flex overflow-hidden [grid-area:main]">
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
