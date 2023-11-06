import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListBox } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendListBox>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </FriendListBox>
    </>
  );
};
