import React, { useEffect, useState } from "react";
import MessagesHolder from "./MessagesHolder";
import InputBar from "./InputBar";
import PdfView from "./PdfView";

const Chatscreen = () => {
  const baseURL = "http://127.0.0.1:8000/chat/";
  const [inputBox, setInputBox] = useState(true);
  const [filter, setFilter] = useState("Agriculture");
  const [botResponse, setBotResponse] = useState("Agriculture");
  const [pdflink, setPdfLink] = useState("");
  const [tabFilter,setTabFilter]=useState("")
  const [useMessage, setUseMessage] = useState({
    input: true,
    spin: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      query:
        "I am H.Ai, your personal virtual assistant. How can I help you today?",
      isBot: true,
      filter:'Agriculture',
      bgLeft:"bg-green-600",
      bgRight:"bg-green-500",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    },
  ]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setUseMessage({ input: true, spin: false });
  };

  const handleSendButtonClick = () => {
    setBotResponse("")
    setPdfLink("")
    console.log("Input", inputValue);
    if(filter==='Agriculture'){
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          query: inputValue,
          isBot: false,
          filter:"Agriculture",
          bgLeft:"bg-green-600",
      bgRight:"bg-green-500",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
        },
      ]);
    }else{
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          query: inputValue,
          isBot: false,
          filter:"Minerals",
          bgLeft:"bg-zinc-400",
      bgRight:"bg-zinc-600",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
        },
      ]);
    }
    
    setInputValue("");
    handleApiResponse();
  };

  const handleApiResponse = async () => {
    setUseMessage({
      input: false,
      spin: true,
    });
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      field:filter,
      question: inputValue,
    });

    let response = await fetch(baseURL, {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log("ask", data);
    console.log("ask", data.bot_response);
setBotResponse(data)
if(filter==="Agriculture"){
  setMessages((prevMessages) => [
    ...prevMessages,
    {
      query: data.bot_response,
      isBot: true,
      filter:"Agriculture",
      bgLeft:"bg-green-600",
      bgRight:"bg-green-500",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    },
  ]);
}else{
  setMessages((prevMessages) => [
    ...prevMessages,
    {
      query: data.bot_response,
      isBot: true,
      filter:"Minerals",
      bgLeft:"bg-zinc-400",
      bgRight:"bg-zinc-600",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    },
  ]);
}
    
    setUseMessage({
      input: true,
      spin: false,
    });
  };
  return (
    <>
      <div className="flex">
        <div className="w-1/2 chat_window_container h-[100svh] border-2 rounded-lg">
          <div className="chat_window h-[100%]">
            <MessagesHolder
              useMessage={useMessage}
              baseURL={baseURL}
              setTabFilter={setTabFilter}
              messages={messages}
              setMessages={setMessages}
            />
            <div className="h-[15%]">

            <InputBar
              handleInputChange={handleInputChange}
              inputBox={inputBox}
              filter={filter}
              setFilter={setFilter}
              inputValue={inputValue}
              useMessage={useMessage}
              handleSendButtonClick={handleSendButtonClick}
            />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <PdfView botResponse={botResponse} tabFilter={tabFilter} pdflink={pdflink} setPdfLink={setPdfLink} />
        </div>
      </div>
    </>
  );
};

export default Chatscreen;
