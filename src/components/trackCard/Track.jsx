import React from "react";
import { useNavigate } from "react-router";

export default function Track({ track }) {
  const navigate = useNavigate();
  const { album, artists } = track;

  //Routes to single track page
  const handleTrackClick = (trackSelected) => {
    navigate(`track/${trackSelected?.id}`);
  };
  return (
    <div className="col-lg-4 col-md-4">
      <div
        style={{ maxWidth: "200px" }}
        type="button"
        onClick={() => {
          handleTrackClick(track);
        }}
      >
        <img src={album?.images[0]?.url} alt="Album cover" width={"100%"} />
        <p>{artists[0]?.name}</p>
        <p>{track?.name}</p>
      </div>
    </div>
  );
}
