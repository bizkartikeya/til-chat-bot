import React from 'react'
import agri from "../assets/agri.svg";
import min from "../assets/min.svg";

const Response = ({message: { isBot, query,filter,bgLeft,bgRight, timestamp },setTabFilter}) => {
  setTabFilter(filter)
  return (
    <div>
      <div className={`message ${isBot ? "left" : "right"}`}>
        {/* <img src={isBot ? botimage : userimage} alt="Avatar" className="avatar" /> */}
        <div className={`text_wrapper`}>
        <div className='flex flex-row'>
       {!isBot&& <div className={`rounded-[50%] p-2 flex justify-end m-2 min-w-[25%]`}>
        <img
              src={filter === "Agriculture" ? agri:min}
              alt=""
              className="h-[40px] w-[40px]"
              style={{fill:"white"}}
            />
        </div>}
          <div className={`messageContent w-[90%] rounded-2xl p-2 ${isBot?bgLeft:bgRight}`}>
            <div className={`text ${filter==='Agriculture'?(isBot?'text-black':'text-black'):(isBot?'text-black':'text-white')}`}>{query}</div>
          </div>
       {isBot&& <div className={`rounded-[50%] flex justify-start w-[20%] p-2 m-2`}>
        <img
              src={filter === "Agriculture" ? agri:min}
              alt=""
              className="h-[40px] w-[40px]"
              style={{fill:"white"}}
            />
        </div>}
        </div>
        </div>

        <div className={`message ${isBot ? "left" : "right"}`}>
          <div
            className="timestamp"
            style={{ textAlign: isBot ? "left" : "right" }}
          >
            {timestamp}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Response
