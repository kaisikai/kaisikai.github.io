const wheel = document.getElementById("wheelNav");

document.querySelectorAll(".nav-item").forEach(item=>{

    item.onclick=()=>{

        location.href=item.dataset.page;

    }

})

let hideTimer = null;

// 滑鼠接近底部時展開
document.addEventListener("mousemove", (e) => {

    if (e.clientY > window.innerHeight - 50) {

        clearTimeout(hideTimer);
        wheel.classList.add("show");

    } else {

        // 如果滑鼠不在輪盤上，延遲收回
        if (!wheel.matches(":hover")) {

            clearTimeout(hideTimer);

            hideTimer = setTimeout(() => {
                wheel.classList.remove("show");
            }, 100);

        }

    }

});

// 滑鼠進入輪盤
wheel.addEventListener("mouseenter", () => {

    clearTimeout(hideTimer);
    wheel.classList.add("show");

});

// 滑鼠離開輪盤
wheel.addEventListener("mouseleave", () => {

    hideTimer = setTimeout(() => {
        wheel.classList.remove("show");
    }, 400);

});

const article = document.querySelector(".article");
const sections = article.querySelectorAll("section");
const navLinks = document.querySelectorAll(".side-links a");

article.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        if(article.scrollTop>=section.offsetTop-120){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.toggle(
            "active",
            link.getAttribute("href")==="#"+current
        );

    });

});


navLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(
            link.getAttribute("href")
        );

        article.scrollTo({

            top:target.offsetTop,

            behavior:"smooth"

        });

    });

});



const fadeObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        entry.target.classList.toggle(
            "show",
            entry.isIntersecting
        );

    });

},{
    root:article,
    threshold:0.25
});

sections.forEach(section=>{

    fadeObserver.observe(section);

});