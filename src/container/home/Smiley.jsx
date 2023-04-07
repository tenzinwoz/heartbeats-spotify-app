import React, { useEffect, useState } from "react";

export default function Smiley({ mood }) {
  const [emoji, setEmoji] = useState("Happy");

  // eslint-disable-next-line default-case
  useEffect(() => {
    if (mood) {
      if (mood === "0") {
        setEmoji("Sad");
      }
      if (mood === "1") {
        setEmoji("Sad");
      }
      if (mood === "2") {
        setEmoji("Sad");
      }
      if (mood === "3") {
        setEmoji("Calm");
      }
      if (mood === "4") {
        setEmoji("Calm");
      }
      if (mood === "5") {
        setEmoji("Calm");
      }
      if (mood === "6") {
        setEmoji("Energetic");
      }
      if (mood === "7") {
        setEmoji("Energetic");
      }
      if (mood === "8") {
        setEmoji("Energetic");
      }
      if (mood === "9") {
        setEmoji("Happy");
      }
      if (mood === "10") {
        setEmoji("Happy");
      }
    }
  }, [mood]);

  return (
    <div className="text-center">
      <h4>{emoji}</h4>
    </div>
  );
}
