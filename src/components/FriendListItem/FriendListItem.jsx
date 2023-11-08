import { FriendItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem $isOnline={isOnline}>
      <Status></Status>
      <Avatar src={avatar} alt={name} width={48}></Avatar>
      <Name>{name}</Name>
    </FriendItem>
  );
};
