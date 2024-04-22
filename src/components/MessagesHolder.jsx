import React from 'react'
import Response from './Response'
import TypingIndicator from './TypingIndicator'

const MessagesHolder = ({messages,setTabFilter,useMessage,messagesEndRef}) => {
console.log("messagess",messages)
  return (
    <div className='messages p-3'>
       {messages.map((message, index) => (
        <Response   key={"component" + index}
        message={message}
        setTabFilter={setTabFilter}/>
      ))}
      {useMessage.spin && <TypingIndicator />}
      <div ref={messagesEndRef}/>
    </div>
  )
}

export default MessagesHolder


