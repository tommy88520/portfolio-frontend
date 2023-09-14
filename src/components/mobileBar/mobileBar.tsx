import { Fragment, useEffect } from 'react';
import './mobileBar.scss';
import Calicon from '~/IMG/cal.svg';
import linkIcon from '~/IMG/LinkedIn - Negative.svg';
import EmailIcon from '~/IMG/email.svg';
import { menuStore } from '~/store/index';

const MobileBar = () => {
  // const { menuState, getMenu } = menuStore((state) => state);
  // useEffect(() => {
  //   getMenu();
  // }, []); //
  const touchBox = [
    {
      text: 'plan meeting',
      img: Calicon,
      link: 'https://calendly.com/tommy8852024/booking',
    },
    {
      text: 'Connect',
      img: linkIcon,
      link: 'https://www.linkedin.com/in/tommy8852024/',
    },
    {
      text: 'tommy8852024@gmail.com',
      img: EmailIcon,
      link: 'mailto:tommy8852024@gmail.com?subject=Hi, Tommy Huang',
    },
  ];
  const mobileMenuState = [
    {
      navigation: 'work',
      link: '#work',
    },
    {
      navigation: 'resume',
      link: 'https://drive.google.com/file/d/1tZqaupNZGzhWoOMexJPYUWWXP5ajbkIi/view',
    },
  ];

  return (
    <div className='mobile-bar'>
      <div className='mobile-bar__container'>
        <div className='mobile-bar__container-detail'>
          <div className='mobile-bar__contact-section'>
            <div className='mobile-bar__contact'>
              {touchBox.map((e, i) => {
                return (
                  <div className='mobile-bar__contact-box' key={i}>
                    <img src={e.img} alt={e.text} />
                  </div>
                );
              })}
            </div>
            <div className='mobile-bar__intro'>
              {mobileMenuState.map((e, i) => {
                return (
                  <div className='mobile-bar__intro-box' key={i}>
                    <a
                      href={`${e.link}`}
                      aria-hidden='true'
                      target={e.navigation == 'resume' ? '_blank' : ''}
                      rel='noreferrer'
                    >
                      {e.navigation}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBar;
