import {
  Link,
  NavLeft,
  NavRight,
  NavTitle,
  Navbar,
  Page,
} from 'framework7-react';
import { PageProps } from 'framework7-react/components/page';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import style from './PageTemplate.module.scss';
import { Toolbar } from '@/components/Layouts';

interface PageTemplateProps extends PageProps {
  children: ReactNode;
  name: string;
  title: string;
  id?: string;
  showNavbar?: boolean;
  showNavBack?: boolean;
  showToolbar?: boolean;
  inlinePageStyle?: React.CSSProperties;
  handleClickBack?: () => void;
}

export const PageTemplate: FC<PageTemplateProps> = ({
  children,
  name,
  title,
  id = 'Main-Page',
  showNavbar = true,
  showNavBack = true,
  showToolbar = true,
  inlinePageStyle = {},
  handleClickBack,
  ...props
}) => {
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const contentRef = useRef<{ el: HTMLElement | null }>({ el: null });

  useEffect(() => {
    if (
      contentRef.current &&
      contentRef.current.el &&
      contentRef.current.el?.childNodes?.length
    ) {
      const firstChild = contentRef.current.el.childNodes[0] as HTMLElement;
      setHasScrollbar(
        firstChild.scrollHeight > contentRef.current.el.clientHeight
      );
    }
  }, []);

  return (
    <Page
      id={id}
      name={name}
      className={style['page']}
      style={{ ...inlinePageStyle }}
      hideNavbarOnScroll
      hideToolbarOnScroll
      ref={contentRef}
      {...props}
    >
      {showNavbar && (
        <Navbar
          innerClassName={`${style['navbar-inner']} ${hasScrollbar && style['navbar-with-scrollbar']}`}
        >
          {showNavBack &&
            (!handleClickBack ? (
              <NavLeft>
                <Link
                  back
                  animate
                  className={`${style['no-ripple']} no-ripple`}
                >
                  <div className={style['icon-wrapper']}>
                    <i className={`${style['nav-icon']} icon-left no-ripple`} />
                  </div>
                </Link>
              </NavLeft>
            ) : (
              <NavLeft>
                <Link
                  onClick={handleClickBack}
                  className={`${style['no-ripple']} no-ripple`}
                >
                  <div className={style['icon-wrapper']}>
                    <i className={`${style['nav-icon']} icon-left no-ripple`} />
                  </div>
                </Link>
              </NavLeft>
            ))}
          <NavTitle className={style['page-title']}>{title}</NavTitle>
          <NavRight>
            <Link
              animate
              href="/help_top/"
              className={`${style['no-ripple']} no-ripple`}
            >
              <div className={style['icon-wrapper']}>
                <i className={`${style['nav-icon']} icon-help`} />
              </div>
            </Link>
          </NavRight>
        </Navbar>
      )}
      <div className={style['container']}>
        <div className={style['content']} id="template-content">
          {children}
        </div>
      </div>
      {showToolbar && <Toolbar hasScrollBar={hasScrollbar} />}
    </Page>
  );
};
