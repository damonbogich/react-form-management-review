import react, {useState} from 'react';

export default function Form(props) {
    
    const [member, setMember] = useState({ username: "", password: "", role: ""});

    const addMember = props.addMember;

    const handleNameChange = e => {
        setMember({...member, username: e.target.value})
    };
    const handlePasswordChange = e => {
        setMember({...member, password: e.target.value})
    };
    const handleRoleChange = e => {
        setMember({...member, role: e.target.value})
    };
    const handleSubmit = e => {
        console.log(member, 'member from handlesubmit')
        e.preventDefault();
        addMember({member})
    }
    return (
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <label>Name:
                <input value={member['username']} onChange={e => handleNameChange(e)} type='text'name='username'/>
            </label>
            <label>Email:
                <input value={member['password']} onChange={e => handlePasswordChange(e)} type='text'name='password'/>
            </label>
            <label>Role:
                <input value={member['role']} onChange={e => handleRoleChange(e)} type='text'name='role'/>
            </label>
            <button>Submit</button>
        </form>
    </div>
    );
  }