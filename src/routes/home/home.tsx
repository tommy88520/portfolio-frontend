import gsap, { Power2 } from 'gsap';
import { useEffect, useRef } from 'react';
import Introduce from '~/components/introduce/introduce';
import './home.scss';
import Work from '~/components/work/work';
import TouchBox from '~/components/touchBox/touchBox';
import MobileBar from '~/components/mobileBar/mobileBar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { GSDevTools } from 'gsap-trial/GSDevTools';
import FIcon from '~/IMG/works/craft-blue.webp';
import SIcon from '~/IMG/works/eth2.webp';
import TIcon from '~/IMG/works/microservice.webp';
import Calicon from '~/IMG/cal.svg';
import linkIcon from '~/IMG/LinkedIn - Negative.svg';
import EmailIcon from '~/IMG/email.svg';
import { worksAnimation } from '~/animation/index';
import { useTranslation } from 'react-i18next';
import { worksStore } from '~/store/index';

// gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(TextPlugin);
const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  // const workOrder = [1, -1, 1];
  const { t, i18n } = useTranslation();
  const { worksContent, getWorks } = worksStore((state) => state);
  useEffect(() => {
    getWorks(i18n.language);
  }, []); //
  // console.log(worksContent);

  const workOrder: any = [
    {
      orderNumber: 1,
      workImage: FIcon,
      introduce: {
        title: 'PHP at CRAFT-Education',
        detail:
          'In 2 years of flextime work at CRAFT-Education I improved the learning environment for their students and digitalised many of their business processes.',
        skills: ['java', 'gcp', 'postgresQL'],
      },
    },
    {
      orderNumber: -1,
      workImage: SIcon,
      introduce: {
        title: 'Scaling microservices on Google Cloud Platform',
        detail:
          'A high traffic social media platform built on microservices, using ASP.NET core, Redis, RabbitMQ and Kubernetes.',
        skills: ['java', 'golang'],
      },
    },
    {
      orderNumber: 1,
      // workImage: TIcon,
      workImage: worksContent[0].workImage,
      introduce: {
        title: 'Web3',
        detail:
          'I delved into the world of Web3 by developing a variety of projects utilizing smart contracts and token economics.',
        skills: ['javascript', 'mongoDB', 'nestJs', 'reactJS', 'vueJs', 'typeScript'],
      },
    },
  ];

  const extraWork = [
    {
      title: '經歷',
      skills: ['資策會', 'PressLogic', '蝙蝠移動'],
      link: '其他',
    },
    {
      title: '學歷',
      skills: ['淡江大學公共行政學士', '政治大學國發所碩士'],
      link: '其他',
    },
    {
      title: '其他',
      skills: ['萬芳高中小論文比賽助教', '伯大尼孤兒院志工'],
      link: '其他',
    },
  ];
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

  const bgGradient = ['1', '2', '3'];
  const workContainer = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    navShrink();
    introItems();
    worksAnimation(gsap, ref);
  }, []);
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
          // duration: 0.3,
          ease: 'back',
        },
      );
  }

  return (
    <div className='home-page' ref={ref}>
      <Introduce />
      <section className='home-page__works-container' ref={workContainer} id='work'>
        <div className='home-page__title'>{t('works.title')}</div>
        {worksContent.map((order, i) => {
          return <Work key={i} order={order} />;
        })}
      </section>
      <section className='home-page__extra-intro'>
        {extraWork.map((item, index) => {
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
          <p>Let&rsquo;s Get In Touch</p>
          <div className='home-page__contact-icon'>
            {touchBox.map((e, i) => {
              return <TouchBox key={i} info={e} />;
            })}
          </div>
        </div>
        <div className='home-page__contact-gradients' id='contact'>
          {bgGradient.map((g, hindex) => {
            return <div className={`home-page__gradients-${g}`} key={hindex} />;
          })}
        </div>
      </section>
      <footer className='home-page__footer'>2023 portfolio - developed by Tommy Huang</footer>
      <MobileBar />
    </div>
  );
};

export default Home;
