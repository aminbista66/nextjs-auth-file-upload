import React, { useRef, useState } from "react";
import { Upload, X } from "lucide-react";

type Props = {};

const FileUpload = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [vidSrc, setVidSrc] = useState<string>();

  const handleChange = (e: any) => {
    e.target.files && e.target.files[0] && setFile(e.target.files[0]);
    if (e.target.files[0]) {
      setVidSrc(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div className="">
      {file && vidSrc ? (
        <div>
          <video src={vidSrc} controls className="w-full h-[500px] rounded-md">
            Sorry, your browser doesn't support embedded videos.
          </video>
          <button
            onClick={() => {
              setFile(null);
              setVidSrc("");
            }}
            className="bg-white mt-4 text-gray-800 border border-gray-800 rounded-md w-full py-3 hover:bg-gray-800 hover:text-white duration-300"
          >
            Remove
          </button>
        </div>
      ) : (
        <label className="">
          <div className="py-16 px-24 border border-gray-700 rounded-sm flex flex-col items-center">
            <Upload />
            <p>Upload file</p>
          </div>
          <input type="file" onChange={handleChange} hidden />
        </label>
      )}
    </div>
  );
};

export default FileUpload;
