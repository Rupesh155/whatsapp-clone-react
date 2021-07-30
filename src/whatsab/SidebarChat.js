import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
function SidebarChat({id, name , addNewChat }) {
    const [seed, setSeet] = useState('');
    useEffect(() => {
        setSeet(Math.floor(Math.random() * 5000))

    }, [])
    const createChat=()=>{
      const roomName=prompt("Please enter name");
    };

    return  !addNewChat ? (

        <div className="sidebarchat">
            <Avatar src={`http://avatars.dicebear.com/api/human/ ${seed}.svg`} />
            <div className="sidebarchat_info">
                <h2> {name}</h2>
                <p> last messege...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2> Add New Chat</h2>
        </div>
    );
}
export default SidebarChat;
