import React from 'react';
// import PropTypes from 'prop-types';

function ConversationsItem({id,name,lastMessage,timeStamp}) {
  return (
    <div className='conversation-container'>
      {name && <p className='con-icon'>{name[0]}</p>}
      <p className='con-title'>{name}</p>
      <p className='con-lastMessage'>{lastMessage}</p>
      <p className='con-timeStamp'>{timeStamp}</p>
    </div>
  );
}

// ConversationsItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   lastMessage: PropTypes.string.isRequired,
//   timeStamp: PropTypes.string.isRequired,
// };

export default ConversationsItem;
