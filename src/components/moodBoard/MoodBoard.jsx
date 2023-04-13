import React, { useEffect, useState } from "react";
import Track from "../trackCard/Track";
import axios from "axios";
import { getMood } from "../../helper/common";

export default function MoodBoard({ topTracks, mood }) {
  const [tracksFeature, setTrackFeature] = useState([]);
  const [moodTracks, setMoodTracks] = useState([]);

  //Get all the ids and analyse
  useEffect(() => {
    if (!!topTracks?.length) {
      const ids = topTracks.map((track) => track.id);
      getAudioFeatures(ids);
    }
  }, [topTracks]);

  useEffect(() => {
    if (!!tracksFeature?.length) {
      const userMood = getMood(mood);
      const filteredIds = [];
      const selectedTracks = [];

      //Core functionality
      tracksFeature?.forEach((track) => {
        if (userMood === "Sad") {
          if (checkSadMoodCondi(track)) {
            filteredIds.push(track?.id);
          }
        }
        if (userMood === "Calm") {
          if (checkCalmMoodCondi(track)) {
            filteredIds.push(track?.id);
          }
        }
        if (userMood === "Energetic") {
          if (checkEnergeticMoodCondi(track)) {
            filteredIds.push(track?.id);
          }
        }

        if (userMood === "Happy") {
          if (checkHappyMoodCondi(track)) {
            filteredIds.push(track?.id);
          }
        }
      });

      //Compare chosen ids with track and set tracks
      if (!!filteredIds?.length) {
        filteredIds.forEach((id) => {
          topTracks.forEach((track) => {
            if (track?.id === id) {
              selectedTracks.push(track);
            }
          });
        });
      }
      setMoodTracks(selectedTracks);
    }
  }, [mood, tracksFeature]);

  //Gets audio features for all the track ids
  const getAudioFeatures = async (ids) => {
    const res = await axios.get(
      `https://api.spotify.com/v1/audio-features/?ids=${ids.toString()}`
    );
    setTrackFeature(res?.data?.audio_features);
  };

  //Condition for sad songs
  const checkSadMoodCondi = (track) => {
    if (
      track?.valence <= 0.2 &&
      track.energy <= 0.2 &&
      track.danceability <= 0.2
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Condition for calm songs
  const checkCalmMoodCondi = (track) => {
    if (
      track?.valence >= 0.8 &&
      track.energy >= 0.2 &&
      track.energy <= 0.5 &&
      track.danceability >= 0.2 &&
      track.danceability <= 0.5
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Condition for energetic songs
  const checkEnergeticMoodCondi = (track) => {
    if (
      track?.valence >= 0.5 &&
      track.energy >= 0.7 &&
      track.danceability >= 0.7
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Condition for Happy songs
  const checkHappyMoodCondi = (track) => {
    if (
      track?.valence >= 0.8 &&
      track.energy >= 0.8 &&
      track.danceability >= 0.8
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {moodTracks?.length ? (
        <>
          <div className="row">
            {moodTracks.map((track, index) => (
              <Track key={index} track={track} />
            ))}
          </div>
        </>
      ) : (
        <p>No Tracks found !</p>
      )}
    </>
  );
}
