import SpotifyPlayer from "react-spotify-player";
import React from "react";

export default function Player({ id }) {
  // size may also be a plain string using the presets 'large' or 'compact'
  const size = {
    width: "100%",
    height: 300,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'
  return (
    <SpotifyPlayer
      uri={`spotify:track:${id}`}
      size={size}
      view={view}
      theme={theme}
    />
  );
}
