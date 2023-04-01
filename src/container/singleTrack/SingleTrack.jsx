import React, { useState, useEffect } from "react";
import PlayImage from "../../assets/images/player.png";
import AddImage from "../../assets/images/add.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import Player from "../../components/mediaPlayer/Player";

export default function SingleTrack() {
  const { id } = useParams();

  return (
    <div className="single-track">
      <Player id={id} />
    </div>
  );
}
