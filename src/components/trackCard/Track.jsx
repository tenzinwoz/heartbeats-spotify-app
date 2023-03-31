import React from "react";

export default function Track({ track }) {
  const { album, artists } = track;
  console.log({ track });
  return (
    <div className="col-lg-4 col-md-4">
      <div style={{ maxWidth: "200px" }}>
        <img src={album?.images[0]?.url} alt="Album cover" width={"100%"} />
        <p>{artists[0]?.name}</p>
        <p>{track?.name}</p>
      </div>
    </div>
  );
}
