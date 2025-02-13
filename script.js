document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const pages = document.querySelectorAll(".page");
    pages[0].classList.add("active", "fade-in");

    document.querySelector(".yes").addEventListener("click", function () {
        nextPage(2);
    });

    document.querySelectorAll(".next").forEach(button => {
        button.addEventListener("click", function () {
            let nextPageIndex = parseInt(this.getAttribute("onclick").match(/\d+/)[0]);
            nextPage(nextPageIndex);
        });
    });

    function nextPage(pageNumber) {
        pages.forEach(page => {
            page.classList.remove("active", "fade-in");
        });
        
        pages[pageNumber - 1].classList.add("active", "fade-in");
        pages[pageNumber - 1].style.opacity = 0;
        pages[pageNumber - 1].style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
        pages[pageNumber - 1].style.transform = "translateY(20px)";
        
        setTimeout(() => {
            pages[pageNumber - 1].style.opacity = 1;
            pages[pageNumber - 1].style.transform = "translateY(0)";
        }, 100);
    }
    function createHearts() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        document.body.appendChild(heart);
    
        const size = Math.random() * 20 + 10;
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.fontSize = size + "px";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
    
    // Jalankan efek hati secara berkala
    setInterval(createHearts, 500);

    document.getElementById("noBtn").addEventListener("mouseover", function () {
        let randomX = Math.floor(Math.random() * window.innerWidth * 0.5);
        let randomY = Math.floor(Math.random() * window.innerHeight * 0.5);
        this.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    // Add animations for "The Reason I Love You"
    const reasonsContainer = document.querySelector(".reasons-container");
    const reasons = [
        "You always support me no matter what.",
        "Your smile makes my day brighter.",
        "You understand me better than anyone else.",
        "Every moment with you feels special.",
        "I love you just the way you are."
    ];

    reasons.forEach((text, index) => {
        let reasonItem = document.createElement("div");
        reasonItem.classList.add("reason-box");
        reasonItem.innerText = text;
        reasonsContainer.appendChild(reasonItem);

        setTimeout(() => {
            reasonItem.style.opacity = 1;
            reasonItem.style.transform = "translateY(0)";
        }, index * 500);
    });

    // Add hover animation for photos
    document.querySelectorAll(".photo-frame img").forEach(photo => {
        photo.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out";
        photo.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1) rotate(3deg)";
            this.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.2)";
        });
        photo.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1) rotate(0deg)";
            this.style.boxShadow = "none";
        });
    });

    // Ensure "The Reason I Love You" text appears
    setTimeout(() => {
        reasonsContainer.style.opacity = 1;
        reasonsContainer.style.transform = "translateY(0)";
    }, 500);
});
