import React from 'react'
import Response from './Response'
import TypingIndicator from './TypingIndicator'

const MessagesHolder = ({messages,baseURL,setTabFilter,setMessages,useMessage}) => {
console.log("messagess",messages)
  return (
    <div className='messages p-3'>
       {messages.map((message, index) => (
        <Response   key={"component" + index}
        message={message}
        baseURL={baseURL}
        setTabFilter={setTabFilter}
        setMessages={setMessages}/>
      ))}
      {useMessage.spin && <TypingIndicator />}
    </div>
  )
}

export default MessagesHolder


