import './App.css';
// import { FriendList } from './components/FriendList';
import { Friend } from './components/Friend';
import { useState } from 'react';

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

// ToDO
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
    setSelectedFriend(Number(id));
  };

  // const handleClick = () => {
  //   const newArray = [...friends]
  //   setFriends(newArray);
  // }

  return (
    <Friend
      friends={friends}
      handleSelect={handleSelect}
      selectedFriend={selectedFriend}
    />
    // <BillForm /> - this will need the friend name & understand which friend balance to update
  );
}

export default App;
