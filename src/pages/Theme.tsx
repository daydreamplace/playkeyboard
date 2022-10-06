import { useParams } from 'react-router-dom';

const Theme = () => {
  const { id } = useParams();

  return <div>Theme</div>;
};

export default Theme;
