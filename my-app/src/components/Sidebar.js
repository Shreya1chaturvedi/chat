import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConversationsItem from './ConversationsItem'; 

function Sidebar() {
  const [conversations,setConversation] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ]);

  return (
    <div className='sidebar-container'>
      <div className="sb-header">
        <div>
          <IconButton><AccountCircleIcon /></IconButton>
        </div>
        <div>
          <IconButton><PersonAddIcon /></IconButton>
          <IconButton><GroupsIcon /></IconButton>
          <IconButton><AddCircleIcon /></IconButton>
          <IconButton><NightlightRoundIcon /></IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder='Search' className='search-box' />
      </div>
      <div className='sb-conversations'>
        {conversations.map((conversation, index) => (
          <ConversationsItem
            key={index}
            name={conversation.name}
            lastMessage={conversation.lastMessage}
            timeStamp={conversation.timeStamp}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
