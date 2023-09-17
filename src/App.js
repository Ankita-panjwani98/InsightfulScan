import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../src/index.css";

function App() {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages([...images, ...selectedImages]);
  };
  console.log("Image: ", images);
  const handleSubmit = () => {
    images.forEach((image, index) => {
      const imageRef = ref(storage, `images/${image.name}`);
      uploadBytes(imageRef, image)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setUrls((prevUrls) => [...prevUrls, url]);
              if (index === images.length - 1) {
                setImages([]); // Clear the images array after processing all images
              }
            })
            .catch((error) => {
              console.log("Error while getting image URL:", error.message);
            });
        })
        .catch((error) => {
          console.log("Error while uploading image:", error.message);
        });
    });
  };
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome to my image app!
      </p>
      <p className="text-gray-500 text-lg">Upload any image that you wish!!</p>
      <input type="file" onChange={handleImageChange} multiple />
      <div>
        <button className="bg-blue-200 p-3 mt-5" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div>
        {urls.length > 0
          ? urls.map((url, index) => (
              <img
                key={index}
                className="object-center m-2"
                src={url}
                alt={`image-${index}`}
                width={200}
                height={200}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
