import { createChatBotMessage } from 'react-chatbot-kit';
import wave from "./wave.jpeg"
import Ansh from "./Ansh.jpeg"


import Learningoptions from './learningoptions';
const config = {
  initialMessages: [createChatBotMessage(`Hi, How can I help you? `)
  ,
  createChatBotMessage("Here are some options you can choose from:",
      {
        widget: 'learningOptions',
      }
    ),
    
  ],
 
  botName: 'GustoraBot',

// Use custom components to replace the default components
customComponents: {
  // Replaces the default header
 header: () => <div>
                  <div className='header_wave'>      
                    <div className='header'>
                      <img src={Ansh} alt= '' className='header-image'/>
                      <span className='header-content'>Chat with 
                          <div className='Sub-div-header-content'>The Gustora Bot</div>
                      </span>
                    </div>
                      <div className='Wave-image'>
                        <img src={wave} alt = ''/>
                        <div className='Wave-text'>I am your Assistant!</div> 
                    </div>
                  </div>
                </div>,

//  botChatMessage: (props) => {},
  
 // Replaces the default bot avatar
 botAvatar: (props) =>  {},
 userAvatar: (props) => {},
//  botMessageBox: ()=>{} ,

 customStyles: {
  botMessageBox: {
    borderRadius: "25px",
    border: "1px solid #000",
    background: "#EDF1F7",
  },
  chatButton: {
    backgroundColor: '#5ccc9d',
  },
},


},

// botMessageBox:()=> {widget: Widget1} ,
state:{
  state:{message:""}
},
widgets: [
  {
    widgetName: "learningOptions",
    widgetFunc: (props) => <Learningoptions {...props} />,
    mapStateToProps: ['state']
  },

],

} 
export default config;

