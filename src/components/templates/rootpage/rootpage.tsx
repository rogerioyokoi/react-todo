import { Outlet } from 'react-router-dom';

const RootPage: React.FC = () => {
  return (
    <div className="component-class">
      <Outlet />
    </div>
  );
};

export default RootPage;
