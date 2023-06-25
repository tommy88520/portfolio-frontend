import { Fragment, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Github from '~/IMG/github.svg';
import LinkIn from '~/IMG/LinkedIn - Negative.svg';
import Instagram from '~/IMG/instagram - Negative.svg';
import { menuStore } from '~/store/index';
// import { useLoginStore } from '~/store';
// import { useUserStore } from '~/store/userStore';
import './navigation.scss';

const Navigation = () => {
  // const { toggleLogOut, login } = useLoginStore((state) => state);
  // const { userData } = useUserStore((state) => state);
  // const linkData = [
  //   {
  //     url: 'repo',
  //     text: 'Repo',
  //   },
  // ];

  // const SignOut = () => {
  //   toggleLogOut();
  // };
  const { menuState, getMenu } = menuStore((state) => state);
  useEffect(() => {
    getMenu();
  }, []); //
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
                <Link className='navigation-bar__link-detail' key={index} to={`${res.navigation}`}>
                  {res.navigation}
                </Link>
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
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
