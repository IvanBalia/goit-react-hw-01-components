import propTypes from "prop-types";
import { FriendCard, FriendName, IsOnline, FriendAvatar, ListOfFriends } from './index';



export const FriendList = ({ friends,theme}) => {
    return (
        <ListOfFriends>
            {friends.map(friend => (
                <FriendCard
                    className="item" key={friend.id}>
                    <IsOnline style={friend.isOnline ? { backgroundColor: theme.colors.green}  : { backgroundColor: theme.colors.yellow} } />
                    <FriendAvatar
                        className="avatar"
                        src={friend.avatar}
                        alt="User avatar" width="48"
                    />
                    <FriendName
                        className="name">{friend.name}
                    </FriendName>
                </FriendCard>
            ))}
        </ListOfFriends>
    )
};

FriendList.propTypes = {
      friends: propTypes.array.isRequired,
};
