import React from "react";
import "./LearningOptions.css";

export default function Learningoptions(props) {
    const { setState} = props || {};
    const {state} = props || {}
    const options = [
        { text: "Product Details", handler: () => { setState((prev) => ({...prev, message: "Product Details" }) ) }, id: 1 },
        { text: "Order Details", handler: () => { setState((prev) => ({...prev, message: "order Details" }) ) }, id: 2 },
        { text: "Recipes", handler: () => { setState((prev) => ({...prev, message: "Recipes" }) ) }, id: 3 },
        { text: "Call Support", handler: () => { setState((prev) => ({...prev, message: "Call Support" }) ) }, id: 4 },
        { text: "Other", handler: () => { setState((prev) => ({...prev, message: "Other" }) ) }, id: 5 },
    ];
   
    const optionsMarkup = options.map((option) => (
        <button
            className="learning-option-button"
            // id = {option.id}
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));
    return (
        <>
            <div className="learning-options-container">{optionsMarkup}</div>
            <div className="react-chatbot-kit-user-chat-message-container">
               <div className="react-chatbot-kit-user-chat-message">{state.message}</div>
            </div>
        </>
    )
}