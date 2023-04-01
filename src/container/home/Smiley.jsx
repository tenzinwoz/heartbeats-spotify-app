import React, { useEffect, useState } from "react";

export default function Smiley({ mood }) {
  const [emoji, setEmoji] = useState("😭");

  // eslint-disable-next-line default-case
  useEffect(() => {
    if (mood) {
      if (mood === "0") {
        setEmoji("😭");
      }
      if (mood === "1") {
        setEmoji("😩");
      }
      if (mood === "2") {
        setEmoji("😫");
      }
      if (mood === "3") {
        setEmoji("😔");
      }
      if (mood === "4") {
        setEmoji("😟");
      }
      if (mood === "5") {
        setEmoji("😌");
      }
      if (mood === "6") {
        setEmoji("🙂");
      }
      if (mood === "7") {
        setEmoji("😀");
      }
      if (mood === "8") {
        setEmoji("😆");
      }
      if (mood === "9") {
        setEmoji("🤩");
      }
      if (mood === "10") {
        setEmoji("🥳");
      }
    }
  }, [mood]);

  return <div style={{ fontSize: "40px", textAlign: "center" }}>{emoji}</div>;
}
