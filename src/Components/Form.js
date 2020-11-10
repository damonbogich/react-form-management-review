import react, {useState} from 'react';

export default function Form(props) {
    console.log(props, 'add memeber hereee');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRole, setUserRole] = useState('');

    const addMember = props.addMember;

    const handleNameChange = e => {
        setUserName(e.target.value)
    };
    const handlePasswordChange = e => {
        setUserPassword(e.target.value)
    };
    const handleRoleChange = e => {
        setUserRole(e.target.value)
    };
    const handleSubmit = e => {
        
        e.preventDefault();
        addMember({username: userName, password: userPassword, role: userRole})
    }
    return (
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <label>Name:
                <input value={userName} onChange={e => handleNameChange(e)} type='text'name='name'/>
            </label>
            <label>Email:
                <input value={userPassword} onChange={e => handlePasswordChange(e)} type='text'name='email'/>
            </label>
            <label>Role:
                <input value={userRole} onChange={e => handleRoleChange(e)} type='text'name='role'/>
            </label>
            <button>Submit</button>
        </form>
    </div>
    );
  }