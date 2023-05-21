import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { addColor, triggerDrop } from "../features/Colors";
import { useDispatch, useSelector } from "react-redux";
import "./Tweaker/Dropzone.css";
import ChipsDemo from "./Tweaker/Multiselect";
import {
  textureAdd,
  textureDelete,
  textureAssign,
  textureUnassign,
} from "../features/TextureReducer";
import { v4 as uuidv4 } from "uuid";

function MyDropzone({ colorList, setColorList, setDropped, dropped }) {
  const thumbsContainer = {
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // marginTop: 16,
  };

  const thumb = {
    // display: 'flex',
    // display: 'inline-flex',
    borderRadius: 2,
    // border: '1px solid #eaeaea',
    // marginBottom: 8,
    // marginRight: 8,
    // height:100,
    // padding: 4,
    // boxSizing: 'border-box'
  };

  const thumbInner = {
    display: "flex",
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

  // const textureFiles = useSelector((state) => state.texture_data.texture_files);
  // console.log(textureFiles)

  const path = `${import.meta.env.VITE_BACKEND_URL}`;
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noClick: true,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const updatedFiles = acceptedFiles.map((file) => ({
        id: uuidv4(), // Generate a unique ID for each file
        file,
        preview: URL.createObjectURL(file),
      }));
      setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    },
  });
  // dispatch(textureAdd(files))






  useEffect(() => {
    const filesId = [];
    if(files && filesId.length > 0){
        
      files.forEach((file) => {
        if(!filesId.includes(file.id)){
          filesId.push(file.id);
        }
      });
      dispatch(textureAdd(filesId));
    }

  }, [setFiles, dispatch]);



    console.log(files)

  // console.log(files);

  const [getPic, setGetPic] = useState([]);


  const handleDeleteImg = (fileId) => {
  //   const tempArr = 
  setFiles((prevState) => prevState.filter((file) => file.id !== fileId));
    dispatch(textureDelete(fileId))

  }



//   useEffect(() => {
// setFiles(textureFiles)
//   }, [])



  const handleLoad = (file) => {
    URL.revokeObjectURL(file.preview);
  };

  const thumbs = files.map((file) => (
    <>
      <div className="preview-cart">
        <div style={thumb} key={file.name}>
          <ChipsDemo key={file.name}/>
          <div style={thumbInner}>
            <button type="button" 
            value={file.id}
             onClick={(e) => {e.preventDefault(),handleDeleteImg(file.id)}}
            // onClick={() => console.log(file.id)}
             >
              <span>pipi</span>
            </button>
            {files.some((f) => f.id === file.id) && (
          <img
            src={file.preview}
            style={img}
            onLoad={handleLoad}
          />
        )}
          </div>
        </div>
      </div>
    </>
  ));

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <>
      <form encType="multipart/form-data">
        <div {...getRootProps()} className="dropzone-div" >
          <input {...getInputProps()} type="file" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          <div className="exaside" style={thumbsContainer}>
            {thumbs}
          </div>
        </div>
      </form>
      {/* <div style={{maxWidth:  '500px', maxHeight: '500px'}}>
    {allTx && (
        
            allTx.map((f) =>(
              f.map((m, key) =>(
                console.log("URL", `${path}${m.url}`),
           <div   key={key}>{m.name}
        <img style={{maxWidth:  '500px', maxHeight: 500}} src={path + m.url} key={key}></img>
        </div>
   
              )  )   ))
     
    ) }

</div> */}
    </>
  );
}
export default MyDropzone;



  // useEffect(() =>{
  // axios.get(`${import.meta.env.VITE_BACKEND_URL}/stocked`).then(response =>
  // {
  //   let filesReached = []

  //   filesReached.push(response.data)

  //       setGetPic(filesReached)
  // //       // tablo.push(response.data)
  // //       // return tablo
  //     }
  //     )

  // // .then(console.log(getPic)
  // // )
  // },[] )