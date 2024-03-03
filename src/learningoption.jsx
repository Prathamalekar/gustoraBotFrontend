// import React, { Component } from "react";
// import "./LearningOptions.css";
// import { createClientMessage, createChatBotMessage } from 'react-chatbot-kit';

// function helper(){
  
// }


// class LearningOptions extends React.Component {
//   constructor(props) {
//     console.log(props,'inside Learning opt')
//     const {setState} = props || {}
    

//     super(props);
//     this.state = {
//       message: ""
//     }
 

//   }

//   options = [
//     { text: "Product Details", handler: () => { this.setState(prev => { return {message: "Product Details"} }) }, id: 1 },
//     { text: "Order Details", handler: () => { this.setState(prev => { return { message: "order Details"} }) }, id: 2 },
//     { text: "Recipes", handler: () => { this.setState(prev => { return {message: "Reciepes"} }) }, id: 3 },
//     { text: "Call Support", handler: () => { this.setState(prev => { return {message: "Call support" }}) }, id: 4 },
//     { text: "Other", handler: () => { this.setState(prev => { return {message:"other" }}) }, id: 5 },
//   ];

//   optionsMarkup = this.options.map((option) => (
//     <button
//       className="learning-option-button"
//       // id = {option.id}
//       key={option.id}
//       onClick={option.handler}
//     >
//       {option.text}
//     </button>
//   ));
//   response = ""
//   customComponent(){
    
//     this.response = createClientMessage(this.state.message);
//     console.log(this.response)
//     return this.response
//   }
  


//   render() {
//     return (
//       <>
//         <div className="learning-options-container">{this.optionsMarkup}</div>
//         <div className="react-chatbot-kit-user-chat-message-container">
//           <div className="react-chatbot-kit-user-chat-message">{createClientMessage(this.state.message).message}</div>
//         </div>
//       </>

//     );
//   }
// }


// export default LearningOptions;



// export {helper}