import propTypes from "prop-types";

import {Box,Avatar,UserName,Additionals,Container,Stats,StatItem} from '../components/ui/Profile/common'





export const Profile = ({ username, tag, location, avatar,  stats  }) => {
    return ( <Box><Container class="description">
        <Avatar
            src={avatar}
            alt="User avatar"
            class="avatar" />
        <UserName class="name">{username}</UserName>
        <Additionals class="tag">@{tag}</Additionals>
        <Additionals class="location">{location}</Additionals>
    </Container>
        <Stats class="stats">
            <StatItem>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </StatItem>
            <StatItem>
                <span class="label">Views</span>
                <span class="quantity">{stats.views}</span>
            </StatItem>
            <StatItem>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </StatItem>
        </Stats>
    </Box>);
};

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape.isRequired,
};
