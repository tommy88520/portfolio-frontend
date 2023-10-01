import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Introduce from '~/components/introduce/introduce';
import './home.scss';
import Work from '~/components/work/work';
import TouchBox from '~/components/touchBox/touchBox';
import MobileBar from '~/components/mobileBar/mobileBar';
import BackgroundColor from '~/components/backgroundColor/backgroundColor';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

import Calicon from '~/IMG/cal.svg';
import linkIcon from '~/IMG/LinkedIn-Negative.svg';
import EmailIcon from '~/IMG/email.svg';
import { worksAnimation } from '~/animation/index';
import { useTranslation } from 'react-i18next';
import { worksStore } from '~/store/index';
// gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(TextPlugin);
const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { t, i18n } = useTranslation();
  const { worksContent, getWorks } = worksStore((state) => state);
  const extraWork = [
    {
      title: t('extraWork.experience.title'),
      skills: t('extraWork.experience.content', { returnObjects: true }),
      link: '其他',
    },
    {
      title: t('extraWork.education.title'),
      skills: t('extraWork.education.content', { returnObjects: true }),
      link: '其他',
    },
    {
      title: t('extraWork.others.title'),
      skills: t('extraWork.others.content', { returnObjects: true }),
      link: '其他',
    },
  ];
  const touchBox = [
    {
      text: t('contact.meeting'),
      img: Calicon,
      link: 'https://calendly.com/tommy8852024/booking',
    },
    {
      text: t('contact.connect'),
      img: linkIcon,
      link: 'https://www.linkedin.com/in/tommy8852024/',
    },
    {
      text: 'tommy8852024@gmail.com',
      img: EmailIcon,
      link: 'mailto:tommy8852024@gmail.com?subject=Hi, Tommy Huang',
    },
  ];

  const bgGradient = ['1', '2', '3'];
  const workContainer = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getWorks(i18n.language);
    if (worksContent[0].title) {
      navShrink();
      worksAnimation(gsap, ref);
      introItems();
    }
  }, [worksContent[0].title, i18n.language]);
  function navShrink() {
    if (workContainer) {
      const element = ref.current;
      if (!element) return;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element.querySelector('.home-page'),
            scrub: true,
            start: 'top -300px',
            end: '35% 50%',
          },
        })
        .fromTo(
          workContainer.current,
          {
            scaleX: 0.9,
            transformOrigin: 'center center',
            ease: 'none',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          {
            scaleX: 1,
          },
        );
    }
  }

  function introItems() {
    const element = ref.current;
    if (!element) return;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element.querySelector('.home-page__extra-intro'),
          start: 'top 100%',
          end: 'bottom 100px',
          scrub: false,
          toggleActions: 'restart none none reverse',
        },
      })
      .fromTo(
        element.querySelectorAll('.home-page__intro-detail'),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          ease: 'back',
        },
      );
  }

  return (
    <div className='home-page' ref={ref}>
      <div className='home-page__introduce-section'>
        <Introduce />
        <BackgroundColor bgGradient={bgGradient} />
      </div>
      <section className='home-page__works-container' ref={workContainer} id='work'>
        <div className='home-page__title'>{t('works.title')}</div>
        {worksContent.map((order, i) => {
          return <Work key={i} order={order} number={i} />;
        })}
      </section>
      <section className='home-page__extra-intro'>
        {extraWork.map((item: any, index) => {
          return (
            <div className='home-page__intro-item' key={index}>
              <div className='home-page__intro-title'>{item.title}</div>
              <div className='home-page__intro-wrap'>
                {item.skills.map((skill, Sindex) => {
                  return (
                    <div className='home-page__intro-detail' key={Sindex}>
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
      <section className='home-page__contact-page'>
        <div className='home-page__touch-text'>
          <p>{t('contact.title')}</p>
          <div className='home-page__contact-icon'>
            {touchBox.map((e, i) => {
              return <TouchBox key={i} info={e} />;
            })}
          </div>
        </div>
        <BackgroundColor bgGradient={bgGradient} />
      </section>
      <MobileBar />
    </div>
  );
};

export default Home;
