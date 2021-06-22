import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = () => {
  const axios = require("axios").default;

  // * Endpoint to AWS Lambda functions that will fetch pre-signed URLs
  const url = ""; // TODO: Create image URL
  const contentType = "image/*";

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = async (files) => {
    // We limit uploads to only 1
    const f = files[0];
    console.log(f["file"]);

    console.log("Uploading to S3...");
    const response = await axios({
      method: "GET",
      url: url,
    });

    // * Using the returned URL, make a PUT request to upload media to S3 bucket
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
      },
      body: f["file"], // ! WATCH OUT !
    });

    console.log("Result: ", result);
    alert("File uploaded successfully!");
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept={contentType}
      maxFiles={1}
      multiple={false}
      submitButtonDisabled={(files) => files.length > 1}
      inputContent="Drop 1 Image File"
    />
  );
};

export default Uploader;
