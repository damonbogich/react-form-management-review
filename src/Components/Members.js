

export default function Members(props) {
    console.log(props, 'member props')
    console.log(props.members, 'right below')
    const users = props.members.map(item => {
        return <li>{item.member.username}</li>
    })
    
    return (
        <ul>
            {users}
        </ul>
    )

}