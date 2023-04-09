import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Player from "../../components/mediaPlayer/Player";
import AddIcon from "../../assets/images/add.png";
import AddCreatePLaylistModal from "../../components/addCreatePlaylistModal/AddCreatePlaylistModal";

export default function SingleTrack() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single-track">
      <div className="row">
        <div className="col-lg-6 ">
          <Player id={id} />
        </div>
        <div className="col-lg-6 ">
          <div className="add">
            <img
              src={AddIcon}
              alt="Add icon"
              className="img-fluid"
              type="button"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>
      <AddCreatePLaylistModal
        show={showModal}
        onHide={() => setShowModal(false)}
        id={id}
      />
    </div>
  );
}
