import React, {useCallback, useState} from 'react'
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';





// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import axios from 'axios';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, 
  FilePondPluginImagePreview
  );

  const serverPort = 'http://localhost:3001'

// Our app
function MyDropzone() {
    const [files, setFiles] = useState([]);
    const handleUpload = (files) => {
console.log(files)
        // axios.post('http://localhost:3001/upload', files)
    }
    // console.log(files)

    
// console.log(files.file)

    return (
        <div className="Dropzone">
    
            <FilePond
                files={files}
                onupdatefiles={console.log('file')}
                allowMultiple={false}
                // maxFiles={3}
                // server={serverPort + '/upload'}
        
            
              
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    );
}





export default MyDropzone