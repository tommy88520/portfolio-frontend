import { useTranslation } from 'react-i18next';
import { rootUrlStore } from '~/store/index';
import BackButton from '../backButton/backButton';
import TouchBox from '~/components/touchBox/touchBox';
import BackgroundColor from '../backgroundColor/backgroundColor';
import Calicon from '~/IMG/cal.svg';
import linkIcon from '~/IMG/LinkedIn-Negative.svg';
import EmailIcon from '~/IMG/email.svg';

import './footer.scss';

const Footer = () => {
  const { rootUrlState } = rootUrlStore((state) => state);
  const footerText = '2023 portfolio - developed by Tommy Huang';
  const bgGradient = ['1', '2', '3'];
  const { t, i18n } = useTranslation();

  const touchBox = [
    {
      text: '',
      img: Calicon,
      link: 'https://calendly.com/tommy8852024/booking',
    },
    {
      text: '',
      img: linkIcon,
      link: 'https://www.linkedin.com/in/tommy8852024/',
    },
    {
      text: '',
      img: EmailIcon,
      link: 'mailto:tommy8852024@gmail.com?subject=Hi, Tommy Huang',
    },
  ];
  return rootUrlState ? (
    <footer className='footer-text'>{footerText}</footer>
  ) : (
    <footer className='footer-page'>
      <div className='footer-page__wrap'>
        <div className='footer-page__button-wrap'>
          <BackButton rootUrlState={rootUrlState} />
        </div>

        <div className='footer-page__box-wrap'>
          <h3>{t('contact.title')}</h3>
          <div className='footer-page__touch-box'>
            {touchBox.map((e, i) => {
              return <TouchBox key={i} info={e} />;
            })}
          </div>
        </div>
      </div>

      <p className='footer-text'>{footerText}</p>
      <BackgroundColor bgGradient={bgGradient} />
    </footer>
  );
};

export default Footer;
