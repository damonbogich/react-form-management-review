
import react, { useState } from 'react';
import Form from './Components/Form';
import Members from './Components/Members';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [member, setMember] = useState({ username: "", password: "", role: ""});

  const addMember = member => {
    console.log(member, 'member from addmember')
      setTeamMembers([
        ...teamMembers,
        {
          member
        }
      ]);
  }

  return (
    <div className="App">
      <Form addMember={addMember} setMember={setMember} member={member}/>
      <Members members={teamMembers} />
    </div>
  );
}

export default App;
