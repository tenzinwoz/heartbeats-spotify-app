import React, { useState, useEffect } from "react";
import Smiley from "./Smiley";
import axios from "axios";
import Track from "../../components/trackCard/Track";
import MoodBoard from "../../components/moodBoard/MoodBoard";
import { getMood } from "../../helper/common";

export default function Home() {
  const [mood, setMood] = useState(10);
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
      <div className="mood-box mb-4">
        <h1>If your mood was a song, what would it be ?</h1>
        <p className="mb-3">Slide to choose your current mood.</p>
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
            style={{ width: "100%", accentColor: "#71948d" }}
          />
        </div>
      </div>

      <div className="mb-5">
        <h2 className="mb-4">
          <span className="bold-primary-text">{getMood(mood)}</span> songs
        </h2>
        <MoodBoard topTracks={topTracks} mood={mood} />
      </div>
      <div>
        <h2 className="mb-4">Top Tracks</h2>
        <div className="row">
          {topTracks?.length ? (
            <>
              {topTracks.map((track, index) => (
                <Track key={index} track={track} />
              ))}
            </>
          ) : (
            <p>
              <i class="bi bi-slash-circle text-white"></i> No Tracks found for
              the user!
            </p>
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
