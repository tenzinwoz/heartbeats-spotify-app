import React from "react";
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.png";

export default function Header({ profile }) {
  return (
    <div className={`header shadow`}>
      <div className="items">
        <img src={logo} alt="Sound"/>
        <h2>Heartbeats</h2>

        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <button type="sumbit" name="sumbit"><img src={search} alt="search"/></button>
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
            <p>H</p>
          )}
        </div>
      </div>
    </div>
  );
}
