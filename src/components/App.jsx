
import user from '../mock/user.json';
import data from '../mock/data.json';
import friends from '../mock/friends.json';
import items from '../mock/transactions.json'

import { Profile } from "./ui/Profile/Profile";
import { Statistics } from './ui/Statistics/Statistics';
import { FriendList } from './ui/FriendList/FriendList';
import { TransactionHistory } from './ui/TransactionHistiory/TransactionsHistory';


export const App = () => {
  return (
    <div>
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
      <Statistics stats={data} title="Upload Statistics" />
      <FriendList friends={friends} />
      <TransactionHistory items = {items}/>
      
    </div>
  );
};
