import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import InstrCard from "../components/InstrCard";
import Instruction from "../data/Instructions";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [successUpload, setSuccessUpload] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Processing your report...");

  useEffect(() => {
    if (loading) {
      const messages = [
        "Analyzing handwriting...",
        "Extracting key features...",
        "Generating insights...",
        "Working on a readable report...",
        "Almost done...",
      ];
      let index = 0;
      const interval = setInterval(() => {
        setLoadingText(messages[index]);
        index = (index + 1) % messages.length;
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  // Handles file selection (without uploading)
  function handleFileChange(e) {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    if (!uploadedFile.type.startsWith("image/")) {
      alert("Kindly upload images in specified format only *(.jpg/.jpeg/.png");
      setFile(null);
      setPreviewURL(null);
      e.target.value = "";
      return;
    }

    setFile(uploadedFile);
    setFileName(uploadedFile.name);
    setShowModal(true);
    setPreviewURL(URL.createObjectURL(uploadedFile));
    setFileError("");
    setSuccessUpload("");
  }

  // Handles form submission
  async function handleUpload(e) {
    e.preventDefault();
    if (!file) {
      alert("Select a file!");
      return;
    }

    setLoading(true); // Show loading animation

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", "User");

    try {
      const res = await axios.post("http://127.0.0.1:5000/", formData);
      if (res.data.pdf_url) {
        setTimeout(() => {
          const downloadUrl = `http://127.0.0.1:5000${res.data.pdf_url}`;
          window.open(downloadUrl, "_blank"); // Open in new tab
          setLoading(false); // Hide loader after download
          setSuccessUpload("Report downloaded successfully!"); // Show success message
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setFileError("Upload failed. Please try again.");
    }
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-textColor tracking-wider font-Koulen md:text-3xl text-lg">
        Get Started
      </h1>
      <p className="font-Outfit text-lg text-PrimaryBG md:text-xl">
        <b>Capture Your Essence in an Image</b>
      </p>

      {/* Instructions Section */}
      <div className="flex flex-col items-center">
        {Instruction.map((elem, idx) => (
          <InstrCard
            key={idx}
            title={elem.title}
            titleNo={elem.titleNo}
            titlePara={elem.titlePara}
          />
        ))}
      </div>

      {/* File Upload Section */}
      <form
        onSubmit={handleUpload}
        className="flex md:flex-row flex-col items-center gap-4"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="fileUpload"
        />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer py-2 px-3 text-xl font-Koulen bg-textColor text-SecondaryBG rounded-full hover:bg-SecondaryBG hover:text-textColor transition duration-300"
        >
          Choose File
        </label>

        {fileName && <p className="text-gray-700 mt-2">Selected: {fileName}</p>}

        {fileError && <p className="text-red-500">{fileError}</p>}

        <button
          type="submit"
          className="p-3 px-4 text-xl font-Koulen bg-SecondaryBG text-textColor rounded-full hover:bg-textColor hover:text-SecondaryBG transition duration-300"
          disabled={loading}
        >
          {loading ? "Processing..." : "Upload Image"}
        </button>
      </form>

      {successUpload && <p className="text-green-300">{successUpload}</p>}

      {loading && (
        <div className="flex flex-col items-center mt-4">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-textColor rounded-full animate-spin"></div>
          <p className="mt-2 text-sm text-gray-600">{loadingText}</p>
        </div>
      )}

      <AnimatePresence>
        {file && showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.4 } }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
              >
                ✕
              </button>
              <motion.img
                src={previewURL}
                alt="Preview"
                className="w-full h-auto rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.4 } }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Upload;
