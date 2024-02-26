import { Link, Toolbar as F7Toolbar } from 'framework7-react';
import { FC } from 'react';
import style from './Toolbar.module.scss';

interface ToolbarProps {
  hasScrollBar?: boolean;
}

export const Toolbar: FC<ToolbarProps> = ({ hasScrollBar = false }) => {
  return (
    <F7Toolbar
      bottom
      tabbar
      className={`${style.toolbar} ${hasScrollBar && style['toolbar-with-scrollbar']}`}
    >
      <Link tabLink="#tab-1" tabLinkActive>
        Tab 1
      </Link>
      <Link tabLink="#tab-2">Tab 2</Link>
      <Link tabLink="#tab-3">Tab 3</Link>
    </F7Toolbar>
  );
};
