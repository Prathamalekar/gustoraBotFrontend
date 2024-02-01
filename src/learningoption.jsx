import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Product Details", handler: () => {}, id: 1 },
    { text: "order details", handler: () => {}, id: 2 },
    { text: "Recipes", handler: () => {}, id: 3 },
    { text: "call Support", handler: () => {}, id: 4 },
    { text: "other", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;