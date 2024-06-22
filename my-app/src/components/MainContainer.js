import React from 'react';
import Sidebar from './Sidebar';
import ConversationsItem from './ConversationsItem';
import ChatArea from './ChatArea';
import  './myStyle.css'
function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />
       <ChatArea name='shreya'  timeStamp='10:00'/>
      <ConversationsItem  />
    </div>
  );
}

export default MainContainer;
