import React, { useState, useEffect, useRef } from "react";
import search from "../../assets/images/search.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Header({ profile }) {
  const [searchField, setSearchField] = useState("");
  const [trackList, setTrackList] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(
          `https://api.spotify.com/v1/search?query=${searchField}&type=track`
        )
        .then((res) => {
          //Get top 3 tracks
          const topThree = res?.data?.tracks?.items?.slice(0, 3);
          setTrackList(topThree);
        });
    }, 2000);

    return () => {
      clearTimeout(getData);
    };
  }, [searchField]);

  const handleButtonClick = () => {
    setShowOptions(true);
  };

  const handleOptionClick = () => {
    setShowOptions(false);
    setSearchField('');
  };
  

  const handleSearchResultsClick = () => {
    setShowOptions(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowOptions(true);
    } else if (event.key === "Backspace") {
      setShowOptions(false);
    }
  };

  return (
    <div className={`header shadow`}>
      <div className="items">
        <h2>Heartbeats</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            name="searchField"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" name="submit" onClick={handleButtonClick}>
            <img src={search} alt="search" />
          </button>
          {showOptions && (
            <div className="search-results" ref={searchResultsRef} onClick={handleSearchResultsClick}>
              <ul>
                {trackList?.map((track) => (
                  <li key={track.id} onClick={handleOptionClick}>
                    <Link to={`/dashboard/track/${track?.id}`}>{track.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="rounded-circle account-avatar">
          {/* TODO: might break for non-premium menber, please check */}
          {!!profile?.images?.length ? (
            <img
              src={profile?.images[0]?.url}
              alt="User profile"
              className="rounded-circle"
            />
          ) : (
            // <p>{Array.from(profile?.display_name)[0]}</p>
            <p>T</p>
          )}
        </div>
      </div>
    </div>
  );
}
