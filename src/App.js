import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😨": "Fearful Face",
  "😭": "Loudly Crying Face",
  "✌️": "Victory Hand",
  "🤙": "Call Me Hand"
  /** add some more to show how the app now expands when there's new data */
};

//convert it to array of strings:
var emojiWeKnow = Object.keys(emojiDictionary);
//console.log(emojiWeKnow);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function changeHandler(item) {
    var userInput = item.target.value;
    //console.log(userInput);
    //var emoji = setEmoji(userInput);
    //setMeaning(userInput);
    //var emoji = emojiDictionary(emoji);
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry! the emoji is not available in our database";
    }
    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "cyan" }}>Emoji descriptor</h1>

      <input
        placeholder={"search emoji here!"}
        onChange={(item) => changeHandler(item)}
      ></input>
      <h1>{meaning}</h1>

      <h2>Emoji that we know:</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
