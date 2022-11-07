import { SVGProps, VFC } from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  namespace: string;
  Icon: VFC<SVGProps<SVGAElement>>;
  authOnly?: boolean;
}
