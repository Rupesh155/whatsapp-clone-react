import { Avatar,IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import  InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React ,{useState}from 'react';
import './Chat.css';
function Chat()
{
    const [input,setInput]=useState("");
    const sendMess=(e)=>
    {
        e.preventDefault();
        //console.log("tjsvwee",input);
        setInput("");
    }
    return(
        <div className="chat"> 
           
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3> Room Name</h3>
                    <p> Last seen at.....</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
              <p className ={`chat_messege ${true && " chat_reciever"}`}>
              <span className="chat_name"> rupesh kumar</span>
                 hey guys
                 <span className="chat_time"> 3.24pm </span>
                
                  </p>  
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="type a messege" value={input} onChange={(e)=>
                    setInput(e.target.value)}/>
                    <button onClick={sendMess} type="submit"> Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
export default Chat;