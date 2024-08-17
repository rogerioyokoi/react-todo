import FemalePicture from '@/assets/images/profile-female.png';
import Avatar from '@/components/atoms/avatar/avatar';

interface UserProfileMenuProps {
  name?: string;
  role?: string;
}

const UserProfileMenu: React.FC<UserProfileMenuProps> = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col justify-end">
        <h6 className="font-semibold">Kristie Hall</h6>
        <small className="text-xs w-full text-right text-gray-500">Administrator</small>
      </div>
      <Avatar src={FemalePicture} alt="avatar" size="sm" />
    </div>
  );
};

export default UserProfileMenu;
