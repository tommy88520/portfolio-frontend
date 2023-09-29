import { ReactComponent as LeftArrow } from '~/IMG/left-arrow.svg';
import './backButton.scss';
const BackButton = ({ rootUrlState }) => {
  return (
    <div
      className={`back-button ${rootUrlState != false ? 'hide-link' : ''} `}
      onClick={() => window.history.back()}
      aria-hidden='true'
    >
      <LeftArrow className='back-button__left-arrow' />
    </div>
  );
};

export default BackButton;
