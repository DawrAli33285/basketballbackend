import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./forms.css";

const UploadMediaForm = ({mediaFiles, setMediaFiles}) => {
  

    const onDrop = (acceptedFiles) => {
        setMediaFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    };

    const handleRemoveFile = (index) => {
        setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*,video/*",
        multiple: true
    });

    return (
        <div className="uploadMediaForm">
            <h2 style={{ fontSize: "22px" }}>Upload Photos</h2>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p className="media-guide">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-upload">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M12 3v14M19 8l-7-7-7 7M17 9.5h-4v5h-2v-5H7"></path>
                    </svg>
                    Upload Photos
                </p>
            </div>
            <div className="mediaPreview">
                {mediaFiles.map((file, index) => (
                    <div className="mediaContainer" key={index}>
                        {file.type.startsWith("image/") ? (
                            <img src={URL.createObjectURL(file)} alt={`media-${index}`} className="mediaFile" />
                        ) : (
                            <video src={URL.createObjectURL(file)} controls className="mediaFile"></video>
                        )}
                        <div className="removeMediaButton" onClick={() => handleRemoveFile(index)}>
                            &times;
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadMediaForm;
