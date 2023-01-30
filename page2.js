const video = document.createElement('video');
const canvas = document.createElement('canvas');
const img = document.createElement('img');
const takePhotoBtn = document.getElementById('take-photo-btn');
const downloadBtn = document.getElementById('download-btn');
const webcamContainer = document.getElementById('webcam-container');
const photoDisplay = document.getElementById('photo-display');

// Set up video stream
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
.then((stream) => {
    video.srcObject = stream;
    video.play();
    webcamContainer.appendChild(video);
    
    // Set up canvas and image for displaying photos
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    img.width = video.offsetWidth;
    img.height = video.offsetHeight;
})
.catch((err) => {
    console.error(err);
});

// Set up canvas and image for displaying photos
video.addEventListener('loadedmetadata', () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    img.width = video.videoWidth;
    img.height = video.videoHeight;
});
// Set up event listener for "Take Photo" button
takePhotoBtn.addEventListener('click', () =>  {
console.log('Take Photo button clicked');
const ctx = canvas.getContext('2d');
// Draw current frame from video stream onto canvas
ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
// Set image src to dataURL of canvas
img.src = canvas.toDataURL('image/png');
// Display image
photoDisplay.appendChild(img);
// Show download button
downloadBtn.style.display= 'contents block' ;
});

// Set up event listener for "Download Photo" button
downloadBtn.addEventListener('click', () => {
// Create a link element
const link = document.createElement('a');
// Set link href to dataURL of canvas (as PNG image)
link.href =img.src;
// Set link download attribute to file name
link.download = 'photo.png';
// Click link
link.click();
});