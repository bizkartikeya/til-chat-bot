import React from "react";
import agri from "../assets/agri.svg";
import min from "../assets/min.svg";

const InputBar = ({
  inputBox,
  inputValue,
  useMessage,
  filter,
  setFilter,
  handleInputChange,
  handleSendButtonClick,
}) => {
  const handleFilterClick = () => {
    if (filter === "Agriculture") {
      setFilter("Minerals");
    } else if (filter === "Minerals") {
      setFilter("Agriculture");
    }
    console.log("object-filter", filter);
  };
  return (
    <>
      {inputBox && (
        <div className="bottom_wrapper p-1" style={{ position: "relative" }}>
          
            
            <button
              className={`px-4 py-2 rounded-md text-lg font-semibold w-[20%] mr-2 flex items-center justify-center overflow-clip ease-in-out duration-500 ${
                filter === "Agriculture"
                  ? `bg-green-600 text-black`
                  : `bg-zinc-600 text-white`
              }`}
              onClick={handleFilterClick}
            >
              <img
              src={filter === "Agriculture" ? agri:min}
              alt=""
              className="h-8 w-8 ease-in-out duration-700"
              style={{fill:"white"}}
            />
              {filter}
            </button>
          
          <input
            id="msg_input"
            className="rounded-md"
            value={inputValue}
            placeholder="Type your query here..."
            disabled={useMessage.spin}
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSendButtonClick();
              }
            }}
          />

          <div className="sendButtonDiv" onClick={handleSendButtonClick}>
            {useMessage.input && inputValue.length > 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            )}
            {useMessage.spin && (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                  className="spinner_P7sC"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InputBar;
