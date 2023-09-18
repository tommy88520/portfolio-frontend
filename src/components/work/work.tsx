import gsap, { Power2 } from 'gsap';
import './work.scss';
import Tag from '~/components/tag/tag';
interface WorkProps {
  order: {
    title: string;
    content: string;
    tags: string[];
    orderNumber: number;
    workImage: string;
  };
}
const Work: React.FC<WorkProps> = ({ order }) => {
  const { title, content, tags, workImage } = order;
  return (
    <div className='work-container'>
      <div className={`work-container__detail `}>
        <h3 className='work-container__detail-title'>{title}</h3>
        <p>{content}</p>
        <div className='work-container__tag-group'>
          {tags?.map((e: any, i) => {
            return <Tag key={i} tag={e.tag} />;
          })}
        </div>
      </div>
      <div className='work-container__image work-container__asc'>
        <img src={workImage} alt='icon' className='work-container__image-detail' />
        <div className='work-container__image-bg' />
      </div>
    </div>
  );
};

export default Work;
