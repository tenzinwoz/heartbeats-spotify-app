import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

export default function AddCreatePLaylistModal(props) {
  const [playLists, setPlayLists] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const getPlaylist = async () => {
    const res = await axios.get(`https://api.spotify.com/v1/me/playlists`);
    setPlayLists(res?.data?.items);
  };

  useEffect(() => {
    getPlaylist();
  }, [props.show]);

  const addToPlaylist = async (playlist) => {
    await axios.post(
      `https://api.spotify.com/v1/users/entelperú/playlists/${playlist?.id}/tracks?uris=spotify:track:${props?.id}`
    );
    setNewPlaylist(false);
    props.onHide();
  };

  const createAndAddToPlaylist = async () => {
    const res = await axios.get("https://api.spotify.com/v1/me");
    const parameter = {
      name: playlistName,
      description: "",
      public: false,
    };
    parameter.toString();

    const response = await axios.post(
      `https://api.spotify.com/v1/users/${res?.data?.id}/playlists`,
      parameter
    );

    await addToPlaylist(response?.data);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="cm-modal"
      onHide={() => {
        setNewPlaylist(false);
        props?.onHide();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {newPlaylist ? "Create a new playlist" : " Add to your playlist"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {newPlaylist ? (
          <input
            name="playlistName"
            value={playlistName}
            type="text"
            placeholder="Enter the playlist name"
            className="create-playlist-input"
            onChange={(e) => {
              setPlaylistName(e?.target?.value);
            }}
          />
        ) : (
          <ListGroup as="ol" numbered>
            {!!playLists?.length ? (
              <>
                {playLists.map((playlist, index) => (
                  <ListGroup.Item
                    className="d-flex justify-content-between align-items-start"
                    variant="dark"
                    action
                    key={index}
                    onClick={() => addToPlaylist(playlist)}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{playlist?.name}</div>
                    </div>
                    <Badge bg="primary" pill>
                      {playlist?.tracks?.total}
                    </Badge>
                  </ListGroup.Item>
                ))}
              </>
            ) : (
              "No playlist found!"
            )}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        {newPlaylist ? (
          <button
            onClick={() => {
              createAndAddToPlaylist();
            }}
            className="btn-green"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setNewPlaylist(true);
            }}
            className="btn-green"
          >
            Create New playlist
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
