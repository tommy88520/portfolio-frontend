import gsap, { Power2 } from 'gsap';
import './work.scss';
import Tag from '~/components/tag/tag';
interface WorkProps {
  order: {
    orderNumber: number;
    workImage: string;
    introduce: {
      title: string;
      detail: string;
      skills: string[];
    };
  };
}
const Work: React.FC<WorkProps> = ({ order }) => {
  const { orderNumber, workImage, introduce } = order;

  return (
    <div className='work-container'>
      <div className={`work-container__detail `}>
        <h3 className='work-container__detail-title'>{introduce.title}</h3>
        <p>{introduce.detail}</p>
        <div className='work-container__tag-group'>
          {introduce.skills.map((e, i) => {
            return <Tag key={i} tag={e} />;
          })}
        </div>
      </div>
      <div className={`work-container__image ${orderNumber == 1 ? 'work-container__asc' : ''}`}>
        <img src={workImage} alt='icon' className='work-container__image-detail' />
        <div className='work-container__image-bg' />
      </div>
    </div>
  );
};

export default Work;
