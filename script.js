const videoElem = document.getElementById("video");
const buttonElem = document.getElementById("button");

// Prompt the user to select a media stream
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElem.srcObject = mediaStream;
    videoElem.onloadedmetadata = () => {
      videoElem.play();
    };
  } catch (error) {
    swal.fire({
      icon: "error",
      title: "Oops...Something went wrong!",
      text: error,
    });
  }
}

buttonElem.addEventListener("click", async () => {
  // Disable button
  buttonElem.disabled = true;
  // Start pic-in-pic
  await videoElem.requestPictureInPicture();
  // Reset button
  buttonElem.disabled = false;
});

// OnLoad
selectMediaStream();
