// import React from "react";
// function CustomMessage(props){
//     async function getData(){
//         const data = fetch("https://localhost:5000/chatbotRequest",{
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({message:props.message}),
            
//         });
//         if (!data.ok) {
//             console.log("shit error aagya")
//             throw new Error('Network response was not ok');
//           }
//           console.log(data)
    
//           const response = await data.json();
//           return response;
        
//     }
//     return <div className="react-chatbot-kit-chat-bot-message"> {getData}</div>


// }
// export default CustomMessage;