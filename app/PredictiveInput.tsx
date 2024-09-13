"use client";

import React, { useState, useEffect } from "react";
import "./PredictiveInput.css";
const PredictiveInput = () => {
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
    let wordArray = word.split("");
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
    let regex = new RegExp("^" + value, "i");
    for (let i in words) {
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
    <div className="relative bg-white w-[25em] h-[4.4em] rounded-[5px]">
      <input
        className=" bg-transparent absolute w-[inherit] h-[inherit] text-black text-[25px] z-[3] px-[18px] py-0 border-[none] outline: 0"
        type="text"
        id="input"
        value={inputValue}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Legend Name"
        autoComplete="off"
      />
      <span
        className="w-[inherit] h-[inherit] absolute z-[2] top-0 left-0 flex items-center py-[0] px-[18px] text-[25px] text-[#868686]    "
        id="suggestion"
      >
        {suggestion}
      </span>
    </div>
  );
};

export default PredictiveInput;
