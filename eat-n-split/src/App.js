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
// 1. Add "Select" on click event that you can pass to Button component
// 2. Add "Add friend" on click event that you can pass to FriendList component

/*

When you "Select" you can split a bill with that friend - & pops open a form to share bill
with then based on the inputs - it needs to update the data in `initialFriends`


It's important to practice first then watch how the teacher did it
*/

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

  const updateBalance = (friendId) => {
    return
  }

  // Close add friend button
  // Drop down for bill form
  // Update balance logic
  // What happens when you have a long list of friends
  // CSS iterations
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
