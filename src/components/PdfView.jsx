import React, { useEffect, useState } from "react";

const PdfView = ({ botResponse,pdflink,setPdfLink,tabFilter }) => {
  const links = botResponse.source_files || [];
  const [sourcePage, setSourcePage] = useState("");
  useEffect(() => {
    if (botResponse?.pdf_base64) {
      setPdfLink(botResponse.pdf_base64);
    }
  }, [botResponse]);

  const handlePdfClick = (link) => {
    setPdfLink(botResponse.pdf_base64s[link]);
    setSourcePage(botResponse.source_pages[link]);
    console.log("object-link", pdflink);
  };
  return (
    <div className="chat_window_container border rounded-lg">
      {
links.length>0?(
 <div className="h-[100%] flex flex-col">
   <div className="min-h-min-content max-h-[22%] overflow-hidden border rounded-lg p-2">
  <p>Source File Name:</p>
  <div className="flex">
    {links.length > 0 ? ( // Check if links array has items
      links.map((link, index) => (
        <button
          key={index}
          className={`border m-1 px-2 py-1 text-[10px] rounded-lg ${tabFilter==='Agriculture'?`bg-green-600 hover:bg-green-800`:`bg-zinc-400 hover:bg-zinc-600`} text-white`}
          onClick={() => handlePdfClick(index)}
        >
          <div>{link}</div>
        </button>
      ))
    ) : (
      <p> </p>
    )}
  </div>
</div>
<div className="h-[77%] w-[100%] mt-2 border rounded-lg p-2">
  <div className="flex flex-col h-[100%]">
    <div className="h-[13%]">
      <p>Source Pages: </p>
      {sourcePage}
      <p></p>
    </div>
    <div className="h-[87%]">
      {pdflink !== "" ? (
        <embed
          src={`data:application/pdf;base64,${pdflink}`}
          type="application/pdf"
          width="100%"
          height="100%"
          className="shadow-md"
        />
      ) : (
        <p>Click on PDF name to display PDF</p>
      )}
    </div>
  </div>

  {/* {links.length>0 && <embed src={pdflink} type="application/pdf" width="100%" height="600px" />} */}
</div>
 </div>
):(
  <p>
    Waiting for PDF to generate
  </p>
)
      }
     
    </div>
  );
};

export default PdfView;
