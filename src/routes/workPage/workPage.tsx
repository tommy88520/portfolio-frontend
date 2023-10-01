import { useEffect, useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Spinner from '~/components/spinner/spinner';
import LazyLoadImg from '~/components/lazyLoadImg/lazyLoadImg';
import { workPageStore } from '~/store/index';

import './workPage.scss';

const WorkPage = () => {
  const [repoLoading, setRepoLoading] = useState(true);

  const { id } = useParams();
  const { i18n } = useTranslation();

  const { workPageContent, getWorkPageContent } = workPageStore((state) => state);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    getWorkPageContent({ articleId: id?.toString(), lang: i18n.language });
    const timer = window.setTimeout(() => {
      setRepoLoading(false);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [i18n.language]);

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
                  <div className='work-page__detail-content'>{e.content}</div>
                  {e.workDetailImages.map((img, imgi) => {
                    return (
                      <LazyLoadImg
                        image={{
                          src: img.image,
                          alt: 'tommy',
                          class: 'work-page__detail-img',
                          // width: 375,
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
