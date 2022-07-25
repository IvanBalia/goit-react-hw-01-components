import propTypes from "prop-types";
import {FriendCard,FriendName,Online,Offline,FriendAvatar,ListOfFriends} from './index'


export const FriendList = ({ friends }) => {
    return (
        <ListOfFriends>
            {friends.map(friend => (
                <FriendCard
                    class="item" key={friend.id}>
                    {friend.isOnline ?
                        (<Online class="status"></Online>)
                        : (<Offline class="status"></Offline>)}
                    <FriendAvatar
                        class="avatar"
                        src={friend.avatar}
                        alt="User avatar" width="48"
                    />
                    <FriendName
                        class="name">{friend.name}
                    </FriendName>
                </FriendCard>
            ))}
        </ListOfFriends>
    )
};

FriendList.propTypes = {
      friends: propTypes.array.isRequired,
};
