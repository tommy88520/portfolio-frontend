import './touchBox.scss';

interface iTouchBox {
  info: {
    text: string;
    img: any;
    link: string;
  };
}
const TouchBox: React.FC<iTouchBox> = ({ info }) => {
  const { img, link, text } = info;
  return (
    <a
      href={link}
      className='touch-box'
      target='_blank'
      rel='noreferrer'
      aria-label="Button to Rayco's LinkedIn"
    >
      <div className='touch-box__img-wrap'>
        <img src={img} alt='' />
      </div>
      <span className='touch-box__text'>{text}</span>
    </a>
  );
};
export default TouchBox;
