import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function GalleryHome() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="motherdivgalleryhome"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="homegallery py-10 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="public/370437565_138083426023893_2388634994713518328_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="431946070_18392579269078691_1116422623929486316_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="396314341_180883701743865_5099227960204058975_n.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="445359299_18404994271078691_1589283172037968775_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="447594800_18406132345078691_8101545124749734870_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="379586008_151535684678667_2712028302445206015_n.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="454743678_351398634692370_7735284383617932701_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="392885009_168487586316810_4619776564053201971_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="452551449_18414693244078691_6256823589942776058_n.jpg"
                alt=""
              />
            </motion.div>
          </div>
          <div className="grid gap-4">
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="449655951_18410921017078691_3306497815736442749_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="428027090_18384784174078691_6688384726961890193_n.jpg"
                alt=""
              />
            </motion.div>
            <motion.div variants={imageVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src="370391783_138219832676919_470360915604256862_n.jpg"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GalleryHome;

// import React, { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// function GalleryHome({ isAdmin }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [images, setImages] = useState([
//     "public/370437565_138083426023893_2388634994713518328_n.jpg",
//     "public/431946070_18392579269078691_1116422623929486316_n.jpg",
//     "public/396314341_180883701743865_5099227960204058975_n.jpg",
//     "public/445359299_18404994271078691_1589283172037968775_n.jpg",
//     "public/447594800_18406132345078691_8101545124749734870_n.jpg",
//     "public/379586008_151535684678667_2712028302445206015_n.jpg",
//     "public/454743678_351398634692370_7735284383617932701_n.jpg",
//     "public/392885009_168487586316810_4619776564053201971_n.jpg",
//     "public/452551449_18414693244078691_6256823589942776058_n.jpg",
//     "public/449655951_18410921017078691_3306497815736442749_n.jpg",
//     "public/428027090_18384784174078691_6688384726961890193_n.jpg",
//     "public/370391783_138219832676919_470360915604256862_n.jpg",
//   ]);

//   const handleImageChange = (index, event) => {
//     const newImages = [...images];
//     newImages[index] = URL.createObjectURL(event.target.files[0]);
//     setImages(newImages);
//     // Optionally, you can send the file to the server here
//   };

//   return (
//     <motion.div
//       className="motherdivgalleryhome"
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={containerVariants}
//     >
//       <div className="homegallery py-10 px-5">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="grid gap-4">
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[0]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(0, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[1]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(1, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[2]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(2, event)}
//                 />
//               )}
//             </motion.div>
//           </div>
//           <div className="grid gap-4">
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[3]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(3, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[4]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(4, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[5]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(5, event)}
//                 />
//               )}
//             </motion.div>
//           </div>
//           <div className="grid gap-4">
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[6]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(6, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[7]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(7, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[8]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(8, event)}
//                 />
//               )}
//             </motion.div>
//           </div>
//           <div className="grid gap-4">
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[9]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(9, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[10]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(10, event)}
//                 />
//               )}
//             </motion.div>
//             <motion.div variants={imageVariants}>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src={images[11]}
//                 alt=""
//               />
//               {isAdmin && (
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => handleImageChange(11, event)}
//                 />
//               )}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default GalleryHome;
