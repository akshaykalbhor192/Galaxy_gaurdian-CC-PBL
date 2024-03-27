// import React, { useState } from "react";
// import storage from "./firebase";
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";

// export default function FileUpload() {
//   const [imageUpload, setImageUpload] = useState(null);
//   const uploadImage = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then(() => {
//       alert("image uploaded");
//     });
//   };
//   return (
//     <>
//       <div>
//         <input
//           type="file"
//           onChange={(event) => {
//             setImageUpload(event.target.files[0]);
//           }}
//         />
//         <button onClick={uploadImage}>Upload</button>
//       </div>
//     </>
//   );
// }

// // // import React, { useState } from "react";
// // // import storage from "../firebase";

// // // const FileUpload = () => {
// // //   const [file, setFile] = useState(null);
// // //   const [uploading, setUploading] = useState(false);

// // //   const handleFileChange = (e) => {
// // //     const selectedFile = e.target.files[0];
// // //     setFile(selectedFile);
// // //   };

// // //   const handleUpload = async () => {
// // //     if (file) {
// // //       setUploading(true);
// // //       const storageRef = storage.ref();
// // //       const photoRef = storageRef.child(`photos/${file.name}`);
// // //       try {
// // //         await photoRef.put(file);
// // //         alert("File uploaded successfully!");
// // //         setFile(null);
// // //       } catch (error) {
// // //         console.error("Error uploading file:", error);
// // //         alert("Failed to upload file. Please try again.");
// // //       }
// // //       setUploading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <input type="file" onChange={handleFileChange} />
// // //       <button onClick={handleUpload} disabled={!file || uploading}>
// // //         {uploading ? "Uploading..." : "Upload"}
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default FileUpload;
