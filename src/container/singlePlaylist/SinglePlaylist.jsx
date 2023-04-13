import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Player from "../../components/mediaPlayer/Player";
import axios from "axios";
import Track from "../../components/trackCard/Track";

export default function SinglePlaylist() {
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getTracks() {
      const res = await axios.get(
        `https://api.spotify.com/v1/playlists/${id}/tracks`
      );
      setTracks(res?.data?.items);
    }
    getTracks();
  }, [id]);

  return (
    <div>
      <h1 className="mb-4">Playlist:</h1>

      {!!tracks?.length ? (
        <div className="row">
          {tracks.map((item) => (
            <Track track={item?.track} />
          ))}
        </div>
      ) : (
        <p>No tracks found!</p>
      )}
    </div>
  );
}
