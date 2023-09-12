import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { skillsStore } from '~/store/index';
import ReactIcon from '~/IMG/skills/react.svg';
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
  const { skillsState, getSkills } = skillsStore((state) => state);
  useEffect(() => {
    getSkills();
    // console.log(1, skillsState);
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
      skill: 'JavaScript',
      image: ReactIcon,
    },
    {
      skill: 'JavaScript',
      image: ReactIcon,
    },
    {
      skill: 'JavaScript',
      image: ReactIcon,
    },
    {
      skill: 'JavaScript',
      image: ReactIcon,
    },
    {
      skill: 'JavaScript',
      image: ReactIcon,
    },
    {
      skill: 'JavaScript',
      image: ReactIcon,
    },
    {
      skill: 'JavaScript',
      image: ReactIcon,
    },
    {
      skill: 'JavaScript',
      image: ReactIcon,
    },
  ];

  return (
    <div className='introduce-section'>
      <div className='introduce-section__text'>
        <p className='introduce-section__text-title'>{introduceContent.title}</p>
        <p className='introduce-section__text-detail'>{introduceContent.detail}</p>
        <div className='introduce-section__buttons-desktop'>
          <Button text={'Work'} onClick={scrollToTargetDiv} ref={targetDivRef} />
          <a
            href='https://drive.google.com/file/d/1tZqaupNZGzhWoOMexJPYUWWXP5ajbkIi/view'
            target='_blank'
            rel='noreferrer'
          >
            <span>Download resume</span>
            <div className='introduce-section__buttons-download'>
              <img src={DownloadIcon} alt='download' />
            </div>
          </a>
        </div>
      </div>
      {/* <div className='introduce-section__skills'>
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
              <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <title>React</title>
                <path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' />
              </svg>
              <p>test</p>
            </MagneticButton>
          );
        })}
      </div> */}
    </div>
  );
};

export default Introduce;
