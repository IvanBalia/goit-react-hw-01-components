
import user from './mock/user.json';
import data from './mock/data.json';
import friends from './mock/friends.json';
import items from './mock/transactions.json'

import { Profile } from "./components/Profile/Profile";
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistiory/TransactionsHistory';


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
