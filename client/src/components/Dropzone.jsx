import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { addColor, triggerDrop } from "../features/Colors";
import { useDispatch, useSelector } from "react-redux";
import "./Tweaker/Dropzone.css";
import {
  textureAdd,
  textureDelete,
  textureAssign,
  textureUnassign,
} from "../features/TextureReducer";
import { v4 as uuidv4 } from "uuid";
import TextureSelect from "./Tweaker/Multiselect";

function MyDropzone({
  setDropped,
  dropped,
  selectedParts,
  setSelectedParts,
  files,
  setFiles,
}) {
  const thumb = {
    borderRadius: 2,
  };

  const thumbInner = {
    minWidth: 30,
    overflow: "hidden",
  };

  const img = {
    display: "flex",
    maxWidth: "10vw",
    height: "auto",
    objectFit: "cover",
  };

  const imgs = [];

  const path = `${import.meta.env.VITE_BACKEND_URL}`;

  const dispatch = useDispatch();

  const onDrop = useCallback((acceptedFiles) => {
    const updatedFiles = acceptedFiles.map((file) => {
      const modifiedFilename = file.name
        .replace(/[^a-z0-9.\s]/g, "")
        .replace(/[\u00B0-\u036f]/g, "")
        .replace(/\s/g, "")
        .replace(/[\u2018\u2019]/g, "");
      console.log("MOD", modifiedFilename);
      console.log(file);
      return {
        id: uuidv4(),
        file,
        preview: URL.createObjectURL(file),
        modifiedFilename, // Add the modified filename to the file object
      };
    });
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    console.log(acceptedFiles);
    const formData = new FormData();
    updatedFiles.forEach((img) => {
      formData.append("file", img.file);
      formData.append("id", img.id);
    });
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .then(setDropped(dropped + 1))
      // .then(dispatch(addColor(colorList)))
      .then(dispatch(triggerDrop(dropped)));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,

    onDrop,
  });

  useEffect(() => {
    const filesId = [];
    if (files && filesId.length > 0) {
      files.forEach((file) => {
        if (!filesId.includes(file.id)) {
          filesId.push(file.id);
        }
      });
      //   dispatch(textureAdd(filesId));
    }
  }, [setFiles, dispatch]);

  const [getPic, setGetPic] = useState([]);

  const handleDeleteImg = (fileId) => {
    setFiles((prevState) => prevState.filter((file) => file.id !== fileId));
    // dispatch(textureDelete(fileId))
  };

  const handleLoad = (file) => {
    URL.revokeObjectURL(file.preview);
  };

  const thumbs = files.map((file) => (
    <>
      <div className="preview-cart">
        <div style={thumb} key={file.name}>
          <TextureSelect
            key={file.name}
            selectedParts={selectedParts}
            setSelectedParts={setSelectedParts}
            fileid={file.id}
          />
          <div style={thumbInner}>
            <button
              type="button"
              value={file.id}
              onClick={(e) => {
                e.preventDefault(), handleDeleteImg(file.id);
              }}
            >
              <span>pipi</span>
            </button>
            {files.some((f) => f.id === file.id) && (
              <img src={file.preview} style={img} onLoad={handleLoad} />
            )}
          </div>
        </div>
      </div>
    </>
  ));

  useEffect(() => {
    // return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <form encType="multipart/form-data">
        <div {...getRootProps()} className="dropzone-div">
          <input {...getInputProps()} type="file" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}

          <div className="exaside">{thumbs}</div>
        </div>
      </form>
    </>
  );
}
export default MyDropzone;
