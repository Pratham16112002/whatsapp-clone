import React, { useState , useEffect} from 'react'
import './SidebarChat.css';
import {  Avatar } from '@mui/material';
import db from './firebase';
import { Link } from 'react-router-dom'

function SidebarChat( {id , name , addNewChat}) {
  const [seed , setSeed ] = useState('');
  const [message,setMessages] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat")

    if(roomName) {
      db.collection('Rooms').add({
        name: roomName ,
      })
    }
  };
  useEffect( () =>
  {
    if ( id )
    {
      db.collection( 'Rooms' ).doc( id ).collection( 'messages' ).orderBy( 'timestamp', 'desc' ).
        onSnapshot( ( snapshot ) =>
          setMessages( snapshot.docs.map( ( doc ) =>
            doc.data() ) )
        )
    }
  }, [id] )
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChat'>
        <Avatar src={ `https://avatars.dicebear.com/api/human/${seed}.svg` } />
        <div className="sidebarChat__info">
          <h2>{ name }</h2>
          <p>{message[0]?.message}</p>
        </div>

      </div>
    </Link>
    
  ) : (
      <div onClick={createChat} className="SidebarChat addnew__chat">
        <h2>Add new Chat</h2>

      </div>
  )
}

export default SidebarChat