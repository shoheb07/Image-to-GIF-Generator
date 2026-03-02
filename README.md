# Image-to-GIF-Generator
mage to GIF Generator is a lightweight web application that converts multiple images into an animated GIF directly in the browser.  Built using HTML, CSS, and JavaScript, this tool allows users to upload images, control frame delay, preview the animation, and download the generated GIF — all without requiring a server or backend.  


A simple and powerful web-based tool that converts multiple images into an animated GIF directly in your browser.

No backend required. No installation needed. Works completely offline after loading.

## 🚀 Features

- Upload multiple images
- Adjustable frame delay (animation speed control)
- Real-time GIF preview
- Download generated GIF
- Fully client-side processing
- Lightweight and fast
- Clean and responsive UI
## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- GIF.js (for GIF encoding)

## 📂 Project Structure
gif-generator/
│
├── index.html
├── style.css
└── script.js
## ▶️ How to Use

1. Open `index.html` in your browser.
2. Upload multiple images (PNG, JPG, etc.).
3. Set the frame delay in milliseconds.
4. Click **Generate GIF**.
5. Preview the generated GIF.
6. Click **Download GIF** to save it.
## ⚙️ How It Works

- The user uploads images.
- JavaScript reads image files using FileReader.
- GIF.js processes each image as a frame.
- The frames are combined into a single animated GIF.
- The GIF is rendered and made available for download.
All processing happens inside the browser.
## 📱 Browser Compatibility

Works in modern browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Brave
## 🔮 Future Improvements

- Drag and drop image upload
- Reorder frames before generating
- Resize images automatically
- Reverse animation option
- Add text watermark
- Progress loading bar
- Dark mode toggle
- Mobile optimization improvements
