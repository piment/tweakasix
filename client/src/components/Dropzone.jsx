import React, {useCallback, useState} from 'react'
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';





// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, 
  // FilePondPluginImagePreview
  );

// Our app
function MyDropzone({setFiles}) {
    // const [files, setFiles] = useState([]);
    // console.log(files)
    return (
        <div className="Dropzone">
            <FilePond
                // files={files}
                onupdatefiles={setFiles}
                allowMultiple={true}
                maxFiles={3}
                server={null}
                name="files"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
}





export default MyDropzone