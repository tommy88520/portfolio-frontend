import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderImg from '~/IMG/placeholder.png';
const LazyLoadImg = ({ image, scrollPosition }) => {
  return (
    <div>
      <LazyLoadImage
        alt={image.alt}
        height={image.height}
        src={image.src} // use normal <img> attributes as props
        // width={image.width}
        effect='blur' // 加载效果，默认为 'none'
        delayMethod='throttle' // 延迟加载方法，默认为 'debounce'
        placeholderSrc={PlaceholderImg} // 自定义加载占位元素
        scrollPosition={scrollPosition}
        wrapperClassName={image.class}
      />
      <span>{image.caption}</span>
    </div>
  );
};

export default trackWindowScroll(LazyLoadImg);
