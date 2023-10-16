import { Fragment, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Github from '~/IMG/github.svg';
import LinkIn from '~/IMG/LinkedIn-Negative.svg';
import Instagram from '~/IMG/Instagram-Negative.svg';
import { worksStore, rootUrlStore } from '~/store/index';
import BackButton from '~/components/backButton/backButton';

import './navigation.scss';

const Navigation = () => {
  // const { menuState, getMenu } = menuStore((state) => state);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { getWorks } = worksStore((state) => state);
  const { rootUrlState, toggleRootUrl } = rootUrlStore((state) => state);
  useEffect(() => {
    renderNavigation();
    getWorks(i18n.language);
  }, [location.pathname]);

  const renderNavigation = () => {
    if (location.pathname !== '/') {
      toggleRootUrl(false);
    } else {
      toggleRootUrl(true);
    }
  };

  const changeLang = () => {
    if (i18n.language == 'zh-TW') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('zh-TW');
    }
    // getWorks(i18n.language);
  };
  const menuState: any = t('menu', { returnObjects: true });
  const iconLink = [
    {
      title: 'github',
      href: 'https://github.com/tommy88520',
      icon: Github,
    },
    {
      title: 'linkIn',
      href: 'https://www.linkedin.com/in/tommy8852024/',
      icon: LinkIn,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/tommy88520/',
      icon: Instagram,
    },
  ];

  return (
    <Fragment>
      <header className='navigation-bar'>
        <div className='navigation-bsr__logo-container'>
          <Link className='navigation-bar__logo' to='/'>
            <p>HYM</p>
          </Link>
        </div>
        <div className='navigation-bar__show-container'>
          <div className={`navigation-bar__link ${rootUrlState == false ? 'hide-link' : ''}`}>
            {menuState.map((res, index) => {
              return (
                <a
                  className={`navigation-bar__link-detail ${
                    i18n.language == 'zh-TW' && 'navigation-bar__link-margin'
                  }`}
                  key={index}
                  href={`#${res.link}`}
                  aria-hidden='true'
                >
                  {res.navigation}
                </a>
              );
            })}
          </div>
          <div className={`navigation-bar__icon ${rootUrlState == false ? 'hide-link' : ''}`}>
            {iconLink.map((res, index) => {
              return (
                <a
                  className={`navigation-bar__icon-detail`}
                  href={`${res.href}`}
                  target='_blank'
                  rel='noreferrer'
                  key={index}
                >
                  <img src={res.icon} alt='Logo' />
                </a>
              );
            })}
          </div>
          <div className='navigation-bar__lang'>
            <p
              className='navigation-bar__lang-text'
              onClick={() => changeLang()}
              aria-hidden='true'
            >
              {i18n.language !== 'zh-TW' ? '中文' : 'En'}
            </p>
          </div>
          <BackButton rootUrlState={rootUrlState} top={true} />
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
