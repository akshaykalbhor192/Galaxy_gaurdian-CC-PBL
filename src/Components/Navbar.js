// import React from "react";
import PropTypes from "prop-types";
// import FileUpload from "../FileUpload";
import React, { useState } from "react";
import storage from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export default function Navbar(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("image uploaded");
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <span className="d-flex navbar-nav nav-item bg-" id="uploadContent">
            <a className="nav-link active" href="/">
              <div>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button onClick={uploadImage}>Upload</button>
              </div>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};
