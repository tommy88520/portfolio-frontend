import './backgroundColor.scss';
const BackgroundColor = ({ bgGradient }) => {
  return (
    <div className='background-gradient__contact-gradients' id='contact'>
      {bgGradient.map((g, hindex) => {
        return <div className={`background-gradient__gradients-${g}`} key={hindex} />;
      })}
    </div>
  );
};

export default BackgroundColor;
