// script.js

const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const wrapper = document.querySelector(".wrapper");
const body = document.body;
const backgroundVideo = document.getElementById("background-video");
const backgroundAudio = document.getElementById("background-audio");

// Optional: Audio Toggle Button (if added)
const audioToggleBtn = document.createElement("button");
audioToggleBtn.id = "audio-toggle-btn";
audioToggleBtn.className = "audio-toggle-btn";
audioToggleBtn.textContent = "Mute";
document.body.appendChild(audioToggleBtn);

// Array of image paths
const images = [
  "loverbl.JPEG",
  "MRbl.JPEG",
  "myrbl.JPEG",
  "rbl.JPG",
  "Mrbl.JPG",
  "IMG_1861.JPG",
  "IMG_2327.JPEG",
  "IMG_0283.JPEG",
  "IMG_0287.JPEG",
  "IMG_0292.JPEG"
];

// Show Slick Slider and Background Video & Audio on Yes click
yesBtn.addEventListener("click", () => {
    // Update question text
    question.innerHTML = "NHBEEEEEEEEEEEEEEEEEK 😘 barshaaaaaaa ye rouhy enty";

    // Hide the initial GIF and buttons
    document.querySelector(".gif").style.display = "none";
    document.querySelector(".btn-group").style.display = "none";

    // Show the slider container
    const sliderContainer = document.querySelector(".slider-container");
    sliderContainer.style.display = "block";

    const slickSlider = document.querySelector(".slick-slider");

    // Clear existing slides to prevent duplicates
    slickSlider.innerHTML = "";

    // Append images to the Slick Slider
    images.forEach(img => {
        const imgDiv = document.createElement("div"); // Slick expects divs as slides
        const image = document.createElement("img");
        image.src = img;
        image.alt = "Image Slide";
        image.loading = "lazy"; // Enable lazy loading
        imgDiv.appendChild(image);
        slickSlider.appendChild(imgDiv);
    });

    // Initialize Slick Slider if not already initialized
    if (!$(slickSlider).hasClass('slick-initialized')) {
        $(slickSlider).slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3, // Number of images to show per slide
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            lazyLoad: 'ondemand', // Enable lazy loading
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    // Display the background video
    backgroundVideo.style.display = "block";

    // Ensure the video is muted
    backgroundVideo.muted = true;

    // Ensure the video does not loop
    backgroundVideo.loop = false;

    // Remove any background image
    body.style.background = "none";

    // Play the video (optional, as autoplay is set)
    backgroundVideo.play();

    // Play the background audio
    // Set muted to false to play with sound
    backgroundAudio.muted = false; // Set to true to mute
    backgroundAudio.style.display = "none"; // Keep it hidden
    backgroundAudio.play().catch(error => {
        console.error("Audio playback failed:", error);
    });
});

// Audio Toggle Functionality
audioToggleBtn.addEventListener("click", () => {
    if (backgroundAudio.muted) {
        backgroundAudio.muted = false;
        audioToggleBtn.textContent = "Mute";
    } else {
        backgroundAudio.muted = true;
        audioToggleBtn.textContent = "Unmute";
    }
});

// Move the No button randomly
noBtn.addEventListener("mouseover", () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
