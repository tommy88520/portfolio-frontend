import './work.scss';
import Tag from '~/components/tag/tag';
import CoinImg from '~/IMG/eth 3.png';
interface WorkProps {
  order: {
    title: string;
    content: string;
    tags: string[];
    orderNumber: number;
    workImage: string;
  };
  number: any;
}
const Work: React.FC<WorkProps> = ({ order, number }) => {
  const { title, content, tags, workImage, orderNumber } = order;
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
        {orderNumber == -1 && <img src={CoinImg} alt='icon' className='work-container__uni-img' />}
        <div className={`work-container__image-bg work-container__image${number}`}>
          <img src={workImage} alt='icon' className='work-container__image-detail' />
        </div>
      </div>
    </div>
  );
};

export default Work;
