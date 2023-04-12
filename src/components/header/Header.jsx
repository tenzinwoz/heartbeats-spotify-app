import React, { useState, useEffect } from "react";
import search from "../../assets/images/search.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Header({ profile }) {
  const [searchField, setSearchField] = useState("");
  const [trackList, SetTrackList] = useState([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(
          `https://api.spotify.com/v1/search?query=${searchField}&type=track`
        )
        .then((res) => {
          //Get top 3 tracks
          const topThree = res?.data?.tracks?.items?.slice(0, 3);
          SetTrackList(topThree);
        });
    }, 2000);

    return () => {
      clearTimeout(getData);
    };
  }, [searchField]);

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
          />
          <button type="sumbit" name="sumbit">
            <img src={search} alt="search" />
          </button>
        </div>
        <div className="search-options">
          <ul>
            {trackList?.map((track) => (
              <li>
                <Link to={`/dashboard/track/${track?.id}`}>{track.name}</Link>
              </li>
            ))}
          </ul>
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
            <p>{Array.from(profile?.display_name)[0]}</p>
          )}
        </div>
      </div>
    </div>
  );
}
