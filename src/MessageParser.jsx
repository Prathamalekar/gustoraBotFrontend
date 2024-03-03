import React, { useState,useEffect } from 'react';

import Learningoptions from './learningoptions';
import { createChatBotMessage } from 'react-chatbot-kit';



const MessageParser = ({ children, actions }) => {

  const [test, setTest] = useState("")
  const state = children.props.state.message;
  useEffect(() => {
    if(state==="Product Details" && test){
      actions.handleOrderDetails(test)
      console.log(test)
    }
    if(state==="order Details"){
      createChatBotMessage("Enter your transaction Id")
    }
    if(state==="order Details" && test){
      actions.orderDetails(test)
    }
  },[test,state])
  var parse = (message) => {

    if (message.includes('hello', 'hi', 'hey', 'Hello', 'Hi', 'Hey')) {

      actions.handleHello();

    }
    setTest(message)

  };



  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: { Learningoptions  },
        });
      })}
    </div>
  );
};

export default MessageParser;







// class MessageParser extends React.Component{

//   constructor(chil) {
//     this.actionProvider = actionProvider;
//     super(props)
//     console.log(props)
//    }
//    parse = ()=>{
//     console.log("inside parse")
//    }



//    render(){
//     return(
//       <>
//     <div>
//       {React.Children.map(children, (child) => {
//         return React.cloneElement(child, {
//           parse: parse,
//           actions: { Learningoptions  },
//         });
//       })}
//     </div>
//       </>
//     )
//    }
   

// }
// export default MessageParser