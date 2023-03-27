import React, { useState } from "react";

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return ( 
    <div>
      <div className="slides">
        <p>If your mood was a song, what would it be?</p>
        <div class="slides-navigation">
          <ul>
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
      </div>
    </div>
  );
}
