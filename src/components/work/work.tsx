import { Link } from 'react-router-dom';

import Tag from '~/components/tag/tag';

import './work.scss';
interface WorkProps {
  order: {
    articleId: string;
    title: string;
    content: string;
    tags: string[];
    orderNumber: number;
    workImage: string;
  };
  number: any;
}

const Work: React.FC<WorkProps> = ({ order, number }) => {
  const { title, content, tags, workImage, orderNumber, articleId } = order;
  return (
    <div className='work-container'>
      <Link className='work-container__detail' to={`/work/${articleId}`}>
        <h3 className='work-container__detail-title'>{title}</h3>
        <p>{content}</p>
        <div className='work-container__tag-group'>
          {tags?.map((e: any, i) => {
            return <Tag key={i} tag={e.tag} />;
          })}
        </div>
      </Link>
      <Link className='work-container__image work-container__asc' to={`/work/${articleId}`}>
        {orderNumber == -1 && (
          <img
            src='https://i.ibb.co/dffvNWm/5c5c1edb0909.webp'
            alt='icon'
            className='work-container__uni-img'
          />
        )}
        <div className={`work-container__image-bg work-container__image${number}`}>
          <img src={workImage} alt='icon' className='work-container__image-detail' />
        </div>
      </Link>
    </div>
  );
};

export default Work;
