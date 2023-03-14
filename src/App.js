import React from 'react';
import AddUser from './components/users/AddUser';
import './App.css'
import List from './components/list/List';


function App() {
  const [users, setUsers] = React.useState([{ name: "Max", age: "30" }])

  const addUser = (newUser) => {
    setUsers((prev) => {
      return [...prev, newUser]
    })
  }


  return (
    <div className='app'>

      <AddUser onAddUser={addUser} />

      <List users={users} />

    </div>
  );

  
}

export default App;
