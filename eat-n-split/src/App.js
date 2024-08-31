import './App.css';
import { Friend } from './components/Friend';
import { useState } from 'react';
import { Fragment } from 'react';

// https://i.pravatar.cc/48?u=1189
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// ToDo
// Update balance logic after form submission
// CSS changes for friend list
// CSS changes for add form (more consistent css)
function App() {
  const [selectedFriend, setSelectedFriend] = useState(null); // saves the id
  const [friends, setFriends] = useState(initialFriends);

  const handleSelect = (id) => {
    let selectedId = Number(id);
    if (selectedId === selectedFriend) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(selectedId);
    }
  };

  const handleAddFriends = (friend) => {
    const newFriends = [...friends, friend]
    setFriends(newFriends)
  }

  const updateBalance = (friendId, amount, payer) => {
    // you - if I paid - the friend owes me - so increase the balance
    // friend - if friend paid - I owne the friend - so decrease the balance
    const friend = friends.find(el => el?.id === friendId);
    if (!friend) return "";

    // update balance
    let newBalance;
    if (payer === 'you') {
      newBalance = friend?.balance + amount;
    } else if (payer === 'friend') {
      newBalance = friend?.balance - amount;
    }
    friend.balance = newBalance;

    let newArray = friends.filter(el => el?.id !== friendId);
    setFriends([...newArray, friend]);
  }

  return (
    <Fragment>
      <Friend
        friends={friends}
        handleSelect={handleSelect}
        selectedFriend={selectedFriend}
        handleAddFriends={handleAddFriends}
        updateBalance={updateBalance}
      />
    </Fragment>
  );
}

export default App;
