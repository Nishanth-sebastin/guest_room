import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";

import {  storage } from "../../../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function FbFilePicker() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
     

      const date = new Date().getTime();
      const storageRef = ref(storage, `${user.username + date}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            if(downloadURL)
            {
              newPost.photo=downloadURL
              console.log(downloadURL)
               const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
            }
            

          } catch (err) {
            console.log(err);
           
            
          }
        });
      });
    }
    
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
  
}
