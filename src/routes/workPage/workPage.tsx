import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { workPageStore } from '~/store/index';
import Spinner from '~/components/spinner/spinner';
import LazyLoadImg from '~/components/lazyLoadImg/lazyLoadImg';
import { useTranslation } from 'react-i18next';

import './workPage.scss';

const WorkPage = () => {
  const [repoLoading, setRepoLoading] = useState(true);

  const { id } = useParams();
  const { i18n } = useTranslation();

  const { workPageContent, getWorkPageContent } = workPageStore((state) => state);
  useEffect(() => {
    getWorkPageContent({ articleId: id?.toString(), lang: i18n.language });
    const timer = window.setTimeout(() => {
      setRepoLoading(false);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, []);
  const workData = {
    title: 'BatMobile Backend Developer',
    content: [
      {
        title: 'About CRAFT-Education',
        content:
          'CRAFT-Education is a company that teaches various topics in the field of industry (4.0). They offer courses, workshops and training programs for companies and individuals. The courses are taught by experts in their field and are often hands-on. I joined the company to help them with their digital ambitions. This included improving their learning environment, digitalising their business processes and building a website for their online courses.',
        image: ['https://i.imgur.com/CREAtI2.jpg'],
      },
    ],
  };

  const WorkPageDetail = () => {
    return (
      <div className='work-page'>
        <h2 className='work-page__title'>{workPageContent.title}</h2>
        <div className='work-page__content'>
          {workPageContent &&
            workPageContent?.workDetail.map((e, i) => {
              return (
                <div key={i} className='work-page__detail-wrap'>
                  <h3 className='work-page__detail-title'>{e.title}</h3>
                  <div className='work-page__detail-title'>{e.content}</div>
                  {e.workDetailImages.map((img, imgi) => {
                    return (
                      // <img
                      //   src={img.image}
                      //   alt='img'
                      //   key={imgi}
                      //   className='work-page__detail-img'
                      // />
                      <LazyLoadImg
                        image={{
                          src: img.image,
                          alt: 'tommy',
                          // height: '560',
                          // width: '622',
                          // scrollPosition,
                          class: 'work-page__detail-img',
                        }}
                        key={imgi}
                      />
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    );
  };
  return <Fragment>{repoLoading ? <Spinner /> : <WorkPageDetail />}</Fragment>;
};
export default WorkPage;
