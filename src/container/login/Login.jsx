import React from "react";
import Sound from "../../assets/images/sound.gif";

export default function Login() {
  const CLIENT_ID = "0488d6cf182842f39b700107193dc752";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const REDIRECT_URI = "https://tenzinwoz.github.io/heartbeats-spotify-app";
  const RESPONSE_TYPE = "token";

  //Features that we are gonna use
  const SCOPE = [
    "ugc-image-upload",
    "user-read-playback-state",
    "playlist-read-private",
    "user-top-read",
    "playlist-modify-public",
    "playlist-modify-private",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
  ];

  //Url cleaning
  const SPACE_DELIMITER = "%20";
  const SCOPE_URL_PARAM = SCOPE.join(SPACE_DELIMITER);

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_URL_PARAM}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

  //Handles login
  const handleLogin = () => {
    window.location = loginUrl;
  };

  return (
    <div className="landing-page">
      <div>
        <div>
          <h1 className="text-white font-weight-bold mb-3">HeartBeats</h1>
          <button onClick={handleLogin} className="btn-green">
            Login to spotify
          </button>
        </div>
        <div className="logo-box">
          <img src={Sound} alt="Sound" width="51px" />
          <div className="vl"></div>
        </div>
      </div>
    </div>
  );
}
