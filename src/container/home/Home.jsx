import React, { useState, useEffect } from "react";
import Smiley from "./Smiley";
import axios from "axios";
import Track from "../../components/trackCard/Track";

export default function Home() {
  const [mood, setMood] = useState(0);
  const [topTracks, setTopTracks] = useState([]);

  //Gets user top tracks
  const getTopTracks = async () => {
    const res = await axios.get(
      `https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term`
    );
    setTopTracks(res?.data?.items);
  };

  useEffect(() => {
    getTopTracks();
  }, []);

  return (
    <div>
      <h1 className="white-text">
        If your mood was a number, what would it be?
      </h1>
      <p>0 Being Sad and 10 being super happy</p>
      <Smiley mood={mood} />
      <div>
        <input
          type="range"
          id="mood"
          name="mood"
          min="0"
          max="10"
          value={mood}
          onChange={(e) => setMood(e?.target?.value)}
          style={{ width: "100%" }}
        />
        <p className="text-center">{mood}</p>
      </div>
      <div className="mb-5">
        <h2>Song Recommendations</h2>
        <div></div>
      </div>
      <div>
        <h2>Top Tracks</h2>
        <div className="row">
          {topTracks?.length ? (
            <>
              {topTracks.map((track, index) => (
                <Track key={index} track={track} />
              ))}
            </>
          ) : (
            "No Tracks found for the user"
          )}
        </div>
      </div>
    </div>
  );
}

/* <div className="slides">
        <p>If your mood was a song, what would it be?</p>
        <div class="slides-navigation">
          <ul>
            <li className="slides-navigation-item">
              <a
                href="/"
          
              >
              
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Sad
                </div>
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Calm
                </div>
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Calm
                </div>
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Calm
                </div>
              </a>
            </li>

            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Energetic
                </div>
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Energetic
                </div>
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Energetic
                </div>
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Happy
                </div>
              </a>
            </li>
            <li className="slides-navigation-item">
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span></span>
                <div className={`tooltip ${showTooltip ? "show" : ""}`}>
                  Happy
                </div>
              </a>
            </li>
          </ul>
          <span class="scale-label scale-label-left">01</span>
          <span class="scale-label scale-label-right">10</span>
        </div>
      </div>
      <div className="trending">
        <p>Trending songs</p>
      </div> */
