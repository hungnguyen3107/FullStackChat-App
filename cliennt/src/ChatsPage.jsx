import{PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage =(props) =>

{
    
    return (
        <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='  24872cd4-f0c5-470c-94fc-41b46c7230f0'
        username={props.user.username}
        secret={props.user.username}
        style={{height: '100%'}}
        />
         </div>   
    )
}
export default ChatsPage