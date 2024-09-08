'use client'
 import {useDropzone} from "react-dropzone"

export default function UploadImage(){
    const {} = useDropzone({
        maxFiles:1,
        accept: {
          "image/png": [".png "],
          "image/jpg": [".jpg "],
          "image/webp": [".webp "],
          "image/jpeg": [".jpeg "],
        },
         
    onDrop: async (acceptedFiles, fileRejections) => {
        if (acceptedFiles.length) {
          const formData = new FormData()
          formData.append("image", acceptedFiles[0])
          //Generate Object url
          const objectUrl = URL.createObjectURL(acceptedFiles[0]);
    }
    },
    })
    
    return(
        <div>

        </div>
    )

}