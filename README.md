# Tilted 3D Carousel - React Image Rotator

A visually appealing, rotating 3D carousel built using **React.js** and **Tailwind CSS**, featuring dynamic image scaling and responsiveness across devices. Perfect for image galleries, fantasy artwork, or portfolio showcases!

## Screenshot

![Marvel_comic_carousel_Demo](https://github.com/harshitarr/-Tilted-3D-Carousel/blob/main/public/screenshot.png?raw=true)


## Demo Recording

[Marvel_comic_carousel_Demo](https://drive.google.com/file/d/1zfVUnQT7JxxZkSn9x2_R-az2A85D0Jp-/view?usp=sharing)



## Features

- Fully responsive carousel with smooth animations  
- Dynamic adjustment of image size and layout based on screen width  
- 3D tilt & rotation animation using CSS `transform-style: preserve-3d`  
- Perfect for fantasy/dragon-themed galleries or other rotating visual displays  
- Infinite smooth spinning with `requestAnimationFrame`



## Technologies Used

- **React.js**  
- **Tailwind CSS**  
- **CSS 3D Transforms**  
- **Responsive design with dynamic JavaScript resizing**



##  Folder Structure
```bash
your-project/
│
├── public/
│   ├── bg.png             # Background image
│   ├── bgin.png           # Center overlay image
│   ├── dragon_1.jpg       # Carousel images
│   └── ... up to dragon_10.jpg
│
├── components/
│   └── BannerSlider.jsx   # Main 3D carousel component
│
├── pages/ or app/         # Your Next.js page setup (if applicable)
│
├── styles/                # Tailwind and global styles (if any)
│
├── README.md
└── package.json
```

## Installation
```bash
git clone https://github.com/your-harshitarr/-Tilted-3D-Carousel.git
cd -Tilted-3D-Carousel
npm install
npm run dev
```
Place your image assets (bg.png, bgin.png, dragon_*.jpg) inside the public/ directory.


## Customization
- Replace images[] in BannerSlider.jsx with your own paths
- Adjust radius/image size in the setDimensions() logic
- Modify animation speed in the angleRef.current -= 0.2 line
