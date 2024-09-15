"use client";

import React, { useState, useEffect } from "react";
import "./PredictiveInput.css";
export const PredictiveInput = () => {
  const [words] = useState(
    [
      "Apple",
      "Ash",
      "Ball",
      "Bat",
      "Bell",
      "Chair",
      "Chat",
      "Cookie",
      "Donut",
      "Eye",
      "Fan",
      "Fish",
      "Game",
      "Grapes",
      "Helmet",
      "Ice",
      "Juice",
      "Orange",
      "Pen",
      "Pencil",
      "Shirt",
      "Trophy",
      "Tub",
      "Zip",
    ].sort()
  );

  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    clearSuggestion();
  }, []);

  const clearSuggestion = () => {
    setSuggestion("");
  };

  const caseCheck = (word: string) => {
    const wordArray = word.split("");
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] === wordArray[i]) {
        continue;
      } else if (inputValue[i].toUpperCase() === wordArray[i]) {
        wordArray[i] = wordArray[i].toLowerCase();
      } else {
        wordArray[i] = wordArray[i].toUpperCase();
      }
    }
    return wordArray.join("");
  };

  // Add correct type for the event 'e'
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Capitalize the first letter
    if (value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    setInputValue(value);
    clearSuggestion();
    const regex = new RegExp("^" + value, "i");
    for (const i in words) {
      if (regex.test(words[i]) && value !== "") {
        setSuggestion(caseCheck(words[i]));
        break;
      }
    }
  };

  // Add correct type for the event 'e'
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && suggestion !== "") {
      e.preventDefault();
      setInputValue(suggestion);
      clearSuggestion();
    }
  };

  return (
    //type the legend box
    <div className="input-container">
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Start typing..."
        autoComplete="off"
      />
      <span id="suggestion">{suggestion}</span>
    </div>
  );
};
