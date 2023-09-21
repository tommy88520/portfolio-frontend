import './tag.scss';
interface Tag {
  tag: string;
}

const Tag: React.FC<Tag> = (props) => {
  const { tag } = props;
  return <div className='tag-button'>{tag}</div>;
};

export default Tag;
