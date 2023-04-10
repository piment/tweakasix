import React, {useCallback, useState} from 'react'
import Dropzone from 'react-dropzone'
import {useDropzone} from 'react-dropzone'

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        // console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
      console.log(acceptedFiles)
    })
    
  }, [])

  async function returnPathDirectories(directoryHandle) {
    // Get a file handle by showing a file picker:
    const handle = await self.showOpenFilePicker();
    if (!handle) {
      // User cancelled, or otherwise failed to open a file.
      return;
    }
  
    // Check if handle exists inside directory our directory handle
    const relativePaths = await directoryHandle.resolve(handle);
  
    if (relativePath === null) {
      // Not inside directory handle
    } else {
      // relativePath is an array of names, giving the relative path
  
      for (const name of relativePaths) {
        // log each entry
        console.log(name);
      }
    }
  }
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}



export default MyDropzone