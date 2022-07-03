import propTypes from "prop-types";
import { FriendCard } from "./ui/FriendList/Card"
import { FriendName } from "./ui/FriendList/FriendName"
import { Online } from "./ui/FriendList/isOnline"
import { Offline } from "./ui/FriendList/isOnline"
import { FriendAvatar } from "./ui/FriendList/FriendAvatar"
import { ListOfFriends } from "./ui/FriendList/ListOfFriends";

export const FriendList = ({ friends }) => {
    return (
        <ListOfFriends>
            {friends.map(friend => (
                <FriendCard class="item" key={friend.id}>
                    {friend.isOnline?(<Online class="status"></Online>):(<Offline class="status"></Offline>)}
                    <FriendAvatar class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <FriendName class="name">{friend.name}</FriendName>
                </FriendCard>
            ))}
        </ListOfFriends>
    )
};

FriendList.propTypes = {
      friends: propTypes.array.isRequired,
};
