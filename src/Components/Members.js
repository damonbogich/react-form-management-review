

export default function Members(props) {
    console.log(props.members, 'member props')
    const users = props.members.map(item => {
        console.log(item.member.member, 'from inside map')
        return <li>{item.member.member.username}</li>
    })
    
    return (
        <ul>
            {users}
        </ul>
    )

}