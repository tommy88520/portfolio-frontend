import { useParams } from 'react-router-dom';
import './workPage.scss';
import { useEffect } from 'react';

const WorkPage = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  const workData = {
    title: 'BatMobile Backend Developer',
    content: [
      {
        title: 'About CRAFT-Education',
        content:
          'CRAFT-Education is a company that teaches various topics in the field of industry (4.0). They offer courses, workshops and training programs for companies and individuals. The courses are taught by experts in their field and are often hands-on. I joined the company to help them with their digital ambitions. This included improving their learning environment, digitalising their business processes and building a website for their online courses.',
        image: ['https://i.imgur.com/uNvCryp.png'],
      },
    ],
    order: '01',
  };
  return (
    <div className='work-page'>
      <h2 className='work-page__title'>{workData.title}</h2>
      <div className='work-page__content'>
        {workData.content.map((e, i) => {
          return (
            <div key={i} className='work-page__detail-wrap'>
              <div className='work-page__detail-title'>{e.content}</div>
              {e.image.length &&
                e.image.map((img, imgi) => {
                  return <img src={img} alt='' key={imgi} />;
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WorkPage;
