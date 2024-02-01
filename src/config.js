import { createChatBotMessage } from 'react-chatbot-kit';
import wave from "./wave.jpeg"
import Ansh from "./Ansh.jpeg"
import LearningOptions from './learningoption';
const config = {
  initialMessages: [createChatBotMessage(`Hi, How can I help you? `,{
    widgets: LearningOptions})
  ],
 
  botName: 'Gustro Bot',
//   customComponents: {
//     // Replaces the default header
//    header: () => {<div style={{ background: "linear-gradient(273deg, #FFF4E1 4.05%, #EDD9A9 50%, #DEB976 98.85%)", padding: "5px", borderRadius: "19px 19px 0px 0px;", }}>This is a header</div>
//   }
//   }
// };

//Register widgets i.e. custom react components
// widgets: [
//   {
//     widgetName: 'dogPicture',
//     widgetFunc: (props) => <DogPicture {...props} />,
//   },
// ], 
//Use custom styles to manipulate css in the config file
// customStyles: {
//   botMessageBox: {
//     backgroundColor: '#376B7E',
//   },
//   chatButton: {
//     backgroundColor: '#5ccc9d',
//   },

// Use custom components to replace the default components
customComponents: {
  // Replaces the default header
 header: () => <div><div className='header'><img src={Ansh} className='header-image'/><span className='header-content'>Chat with <div className='Sub-div-header-content'>The Gustora bot</div></span></div><div className='Wave-image'><img src={wave} /></div></div>,
 // Replaces the default bot avatar
 botAvatar: (props) => {},
 customStyles: {
  botMessageBox: {
    borderRadius: "25px",
    border: "1px solid #000",
    background: "#EDF1F7",
  },
  chatButton: {
    backgroundColor: '#5ccc9d',
  },
}

},
widgets: [
  {
    widgetName: "learningOptions",
   widgetFunc: (props) => <LearningOptions {...props} />,
  },
],

}
export default config;


/* <input type="image" src=
"https://www.tutorialspoint.com/images/logo.png"
height="80px" width="110px"
alt="submit" /> */

// {/* <div className="chatbot">
// <div className="chatbot-heading">
//    <img src={BotIcon} className="chatbot-heading-image"/>
//     <section className="chatbot-content">Chat with <br/>The Zepto bot</section>
//     {/* <button className="chatbot-close"></button> */}
//     <p>...</p>
// </div>
// <div className="chatbot-heading2">
//    <img src={wave}  />
//    {/* <p className="chatbot-heading-para">i am your Assistant!</p>  */}
// </div> */}