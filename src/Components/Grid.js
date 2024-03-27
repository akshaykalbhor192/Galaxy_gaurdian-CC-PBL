// import React, { useEffect, useState } from "react";
// import "./style.css";
// import { storage } from "../firebase";

// export default function Grid() {
//   const [photoUrls, setPhotoUrls] = useState([]);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const storageRef = storage.ref();
//         const photosRef = storageRef.child("photos");
//         const result = await photosRef.listAll();
//         const urls = await Promise.all(
//           result.items.map(async (photoRef) => {
//             return await photoRef.getDownloadURL();
//           })
//         );
//         setPhotoUrls(urls);
//       } catch (error) {
//         console.error("Error fetching photos:", error);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="photo-grid">
//           {photoUrls.map((url, index) => (
//             <div className="photo" key={index}>
//               <img src={url} alt={`Photo ${index}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// // import React, { useEffect, useState } from "react";
// // import "./style.css";
// // import { storage } from "../firebase";

// // export default function Grid() {
// //   const [photoUrls, setPhotoUrls] = useState([]);

// //   useEffect(() => {
// //     const fetchPhotos = async () => {
// //       try {
// //         const storageRef = storage.ref();
// //         const photosRef = storageRef.child("photos");
// //         const result = await photosRef.listAll();
// //         const urls = await Promise.all(
// //           result.items.map(async (photoRef) => {
// //             return await photoRef.getDownloadURL();
// //           })
// //         );
// //         setPhotoUrls(urls);
// //       } catch (error) {
// //         console.error("Error fetching photos:", error);
// //       }
// //     };

// //     fetchPhotos();
// //   }, []);

// //   return (
// //     <>
// //       <div className="container">
// //         <div className="photo-grid">
// //           {photoUrls.map((url, index) => (
// //             <div className="photo" key={index}>
// //               <img src={url} alt={`Photo ${index}`} />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
