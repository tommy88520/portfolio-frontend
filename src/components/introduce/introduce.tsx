import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation, Trans } from 'react-i18next';
import { skillsStore } from '~/store/index';

import { ReactComponent as ReactIcon } from '~/IMG/skills/react.svg';
import { ReactComponent as dockerIcon } from '~/IMG/skills/docker.svg';
import { ReactComponent as GCPIcon } from '~/IMG/skills/googlecloud.svg';
import { ReactComponent as JavascriptIcon } from '~/IMG/skills/javascript.svg';
import { ReactComponent as MongoDB } from '~/IMG/skills/mongodb.svg';
// import { ReactComponent as Mongoose } from '~/IMG/skills/mongoose.svg';
import { ReactComponent as Swagger } from '~/IMG/skills/swagger.svg';
// import { ReactComponent as TypeScript } from '~/IMG/skills/typescript.svg';
import { ReactComponent as NestJS } from '~/IMG/skills/nestjs.svg';
import { ReactComponent as Vue } from '~/IMG/skills/vuedotjs.svg';

import Button from '~/components/button/button';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import './introduce.scss';
import DownloadIcon from '~/IMG/downloadIcon.svg';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  tollerance?: number;
  scale?: number;
  debug?: boolean;
  borderRadius?: string;
}
gsap.registerPlugin(ScrollToPlugin);

const MagneticButton: React.FC<MagneticButtonProps> = (prop) => {
  const {
    children,
    className,
    speed = 1,
    tollerance = 0.8,
    scale = 1.2,
    debug = false,
    borderRadius = '0px',
    ...props
  } = prop;
  const $root = useRef<HTMLButtonElement | null>(null);
  const $item = useRef<HTMLDivElement | null>(null);
  const $hover = useRef<HTMLDivElement | null>(null);
  const rootBound = useRef<DOMRect | null>(null);
  const itemBound = useRef<DOMRect | null>(null);
  const diffBound = useRef({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    gsap.killTweensOf($item.current);
    gsap.set($hover.current, {
      scale: scale,
      borderRadius,
      background: debug ? 'rgba(0, 125, 255, .4)' : 'transparent',
    });
    // if ($root.current && rootBound.current !== null && $item.current) {
    rootBound.current = $root.current.getBoundingClientRect();
    itemBound.current = $item.current.getBoundingClientRect();
    diffBound.current.x = (rootBound.current.width * scale - rootBound.current.width) / 2;
    diffBound.current.y = (rootBound.current.height * scale - rootBound.current.height) / 2;
    // }
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf($item.current);
    gsap.to($item.current, {
      x: 0,
      y: 0,
      ease: 'elastic.out(1.1, .4)',
      duration: 1.2,
    });
    gsap.set($hover.current, {
      scale: 1,
    });
  };

  const handleMouseMove = (e) => {
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    // if (rootBound.current !== null && itemBound.current !== null) {
    const maxX = ((rootBound.current.width - itemBound.current.width) / 2) * tollerance;
    const maxY = ((rootBound.current.height - itemBound.current.height) / 2) * tollerance;

    const newX = gsap.utils.mapRange(
      0,
      rootBound.current.width * scale,
      -maxX,
      maxX,
      x - rootBound.current.x + diffBound.current.x,
    );

    const newY = gsap.utils.mapRange(
      0,
      rootBound.current.height * scale,
      -maxY,
      maxY,
      y - rootBound.current.y + diffBound.current.y,
    );

    gsap.killTweensOf($item.current);
    gsap.to($item.current, {
      x: newX,
      y: newY,
      ease: 'power3.out',
      duration: speed,
    });
  };
  // };

  return (
    <button
      ref={$root}
      className={`magnetic-button ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchEnd={handleMouseLeave}
      {...props}
    >
      <span ref={$item} className='magnetic-button--item'>
        {children}
      </span>
      <span ref={$hover} className='magnetic-button--hover' />
    </button>
  );
};

const Introduce = () => {
  const { t } = useTranslation();
  const { skillsState, getSkills } = skillsStore((state) => state);
  useEffect(() => {
    getSkills();
  }, []); //

  const introduceContent = {
    title: 'I Build Scalable APIs & Web-Applications',
    detail:
      '23 year old (backend leaning) full stack web developer from Deurne, The Netherlands. Most of my current experience is building customer-facing SaaS, websites and transforming business operations.',
  };
  const targetDivRef = useRef(null);
  const element = document.getElementById('work');
  const scrollToTargetDiv = () => {
    if (element) {
      element.scrollIntoView();
    }
  };

  const skills = [
    {
      skill: 'React',
      image: ReactIcon,
    },
    {
      skill: 'Docker',
      image: dockerIcon,
    },
    {
      skill: 'GCP',
      image: GCPIcon,
    },
    {
      skill: 'JS',
      image: JavascriptIcon,
    },
    {
      skill: 'MongoDB',
      image: MongoDB,
    },
    {
      skill: 'NestJS',
      image: NestJS,
    },
    {
      skill: 'Vue',
      image: Vue,
    },

    {
      skill: 'Swagger',
      image: Swagger,
    },
  ];

  return (
    <div className='introduce-section'>
      <div className='introduce-section__text'>
        <p className='introduce-section__text-title'>{t('introduce.title')}</p>
        <p className='introduce-section__text-detail'>{t('introduce.detail')}</p>
        <div className='introduce-section__buttons-desktop'>
          <Button text={t('introduce.button')} onClick={scrollToTargetDiv} ref={targetDivRef} />
          <a
            href='https://drive.google.com/file/d/1tZqaupNZGzhWoOMexJPYUWWXP5ajbkIi/view'
            target='_blank'
            rel='noreferrer'
          >
            <span>{t('introduce.resume')}</span>
            <div className='introduce-section__buttons-download'>
              <img src={DownloadIcon} alt='download' />
            </div>
          </a>
        </div>
      </div>
      <div className='introduce-section__skills'>
        {skills.map((e, index) => {
          return (
            <MagneticButton
              className='skill-icon'
              scale={2}
              tollerance={0.8}
              speed={0.3}
              borderRadius='50%'
              key={index}
            >
              <e.image />
              <p>{e.skill}</p>
            </MagneticButton>
          );
        })}
      </div>
    </div>
  );
};

export default Introduce;
