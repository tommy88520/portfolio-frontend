import { Fragment, useEffect, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Github from '~/IMG/github.svg';
import LinkIn from '~/IMG/LinkedIn-Negative.svg';
import Instagram from '~/IMG/Instagram-Negative.svg';
import { worksStore } from '~/store/index';
import { ReactComponent as LeftArrow } from '~/IMG/left-arrow.svg';

// import { useLoginStore } from '~/store';
// import { useUserStore } from '~/store/userStore';
import './navigation.scss';

const Navigation = () => {
  // const { menuState, getMenu } = menuStore((state) => state);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { getWorks } = worksStore((state) => state);
  const [lang, setLang] = useState(true);
  const [navigationStyle, setNavigationStyle] = useState(true);
  useEffect(() => {
    renderNavigation();
  }, []);

  const renderNavigation = () => {
    if (location.pathname !== '/') {
      setNavigationStyle(false);
    }
  };

  const changeLang = (lng) => {
    setLang(!lng);
    const newLang = lang ? 'zhTw' : 'en';
    i18n.changeLanguage(newLang);
    getWorks(i18n.language);
  };
  const menuState: any = t('menu', { returnObjects: true });
  const iconLink = [
    {
      title: 'github',
      href: 'https://github.com/tommy88520',
      icon: LinkIn,
    },
    {
      title: 'linkIn',
      href: 'https://www.linkedin.com/in/tommy8852024/',
      icon: Github,
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
          <div className={`navigation-bar__link ${navigationStyle == false ? 'hide-link' : ''}`}>
            {menuState.map((res, index) => {
              return (
                <a
                  className='navigation-bar__link-detail'
                  key={index}
                  href={`#${res.link}`}
                  aria-hidden='true'
                >
                  {res.navigation}
                </a>
              );
            })}
          </div>
          <div className={`navigation-bar__icon ${navigationStyle == false ? 'hide-link' : ''}`}>
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
              onClick={() => changeLang(lang)}
              aria-hidden='true'
            >
              {lang ? '中文' : 'En'}
            </p>
          </div>
          <div
            className={`navigation-bar__back-button ${
              navigationStyle != false ? 'hide-link' : ''
            } `}
            onClick={() => window.history.back()}
            aria-hidden='true'
          >
            <LeftArrow className='navigation-bar__left-arrow' />
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
