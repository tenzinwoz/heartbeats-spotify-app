import React from "react";

export default function Header({ profile }) {
  return (
    <div className={`header shadow`}>
      <div className="items">
        <p>Heartbeats</p>
        <input type="search" className="search-bar" placeholder="Search" />

        <div className="rounded-circle account-avatar">
          {/* TODO: might break for non-premium menber, please check */}
          {!!profile?.images?.length ? (
            <img
              src={profile?.images[0]?.url}
              alt="User profile"
              className="rounded-circle"
            />
          ) : (
            <p>"W"</p>
          )}
        </div>
      </div>
    </div>
  );
}
