import react, {useState} from 'react';

export default function Form(props) {
    const {addMember, setMember, member} = props;
    console.log(addMember, 'hereaddmember');
    console.log(member, 'hereaddmember')

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = e => {
        console.log(member, 'member from handlesubmit')
        e.preventDefault();
        addMember({member})
    }
    //remember to add value prop for each input
    return (
    <div>
        <form onSubmit={e => handleSubmit(e)}>
            <label>Name:
                <input onChange={e => handleChange(e)}  type='text'name='username'/>
            </label>
            <label>Email:
                <input onChange={e => handleChange(e)}  type='text'name='password'/>
            </label>
            <label>Role:
                <input onChange={e => handleChange(e)}  type='text'name='role'/>
            </label>
            <button>Submit</button>
        </form>
    </div>
    );
  }