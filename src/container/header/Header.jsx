import React from "react";

export default function Header() {
  return (
    <div className={` header shadow`}>
      <div className="items">
        <input type="email" className="search-bar" placeholder="Search" />
        <div className="rounded-circle account-avatar">
          {/* Add account profile image / Avatar */}
        </div>
      </div>
    </div>
  );
}
