import { Fragment, useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import gsap from 'gsap';
import { useTranslation, Trans } from 'react-i18next';
import Github from '~/IMG/github.svg';
import LinkIn from '~/IMG/LinkedIn - Negative.svg';
import Instagram from '~/IMG/instagram - Negative.svg';
import { menuStore } from '~/store/index';
import { worksStore } from '~/store/index';

// import { useLoginStore } from '~/store';
// import { useUserStore } from '~/store/userStore';
import './navigation.scss';

const Navigation = () => {
  // const { menuState, getMenu } = menuStore((state) => state);
  const { t, i18n, ready } = useTranslation();
  // if (!ready) return 'loading translations...';
  const { getWorks } = worksStore((state) => state);

  const lngs = {
    en: { nativeName: 'English' },
    zhTw: { nativeName: '中文' },
  };
  const [lang, setLang] = useState(true);

  function changeLang(lng) {
    setLang(!lng);
    const newLang = lang ? 'zhTw' : 'en';
    i18n.changeLanguage(newLang);
    getWorks(i18n.language);
  }

  const menuState: any = t('menu', { returnObjects: true });
  if (!ready) return 'loading translations...';
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
          <div className='navigation-bar__link'>
            {menuState.map((res, index) => {
              return (
                <a
                  className='navigation-bar__link-detail'
                  key={index}
                  href={`#${res.navigation}`}
                  aria-hidden='true'
                >
                  {res.navigation}
                </a>
              );
            })}
          </div>
          <div className='navigation-bar__icon'>
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
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
