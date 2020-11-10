
import react, { useState } from 'react';
import Form from './Components/Form';
import Members from './Components/Members';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addMember = member => {
    if (teamMembers !== []) {
      console.log('if entered')
      setTeamMembers([
        ...teamMembers,
        {
          member
        }
      ]);
    }
    else {
      console.log('else entered')
      setTeamMembers([member])
    }
  }
  console.log(teamMembers, 'teamembers again')

  return (
    <div className="App">
      <Form addMember={addMember}/>
      <Members members={teamMembers}/>
    </div>
  );
}

export default App;
