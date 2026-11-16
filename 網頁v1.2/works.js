const works = [
    { img: "./png/work-1.png", title: "廣澤尊王", size: "高三十九公分" },
    { img: "./png/work-2.png", title: "龍吟木潤・既濟乾坤", size: "高三十公分" },
    { img: "./png/work-3.png", title: "瓷-蒜頭瓶", size: "高十八公分" },
    { img: "./png/work-4.png", title: "圓柱", size: "高二十公分" },
    { img: "./png/work-5.png", title: "瓷茶倉", size: "高十六公分" },
    { img: "./png/work-6.png", title: "灑金漆線雕瓷壺", size: "高十六公分" },
];

const workPhoto = document.getElementById("workPhoto");
const workImg = document.getElementById("workImg");
const workCaption = document.getElementById("workCaption");
const dots = document.querySelectorAll("#workDots .dot");

if (workImg && workCaption && dots.length) {

    let current = 0;

    function showWork(index) {

        current = index;

        workPhoto.classList.remove("no-image");
        workImg.src = works[index].img;
        workImg.alt = works[index].title;
        workCaption.innerHTML =
            `<span class="work-title">${works[index].title}</span>` +
            `<span class="work-size">${works[index].size}</span>`;

        dots.forEach(dot => {
            dot.classList.toggle("active", Number(dot.dataset.index) === index);
        });

    }

    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            showWork(Number(dot.dataset.index));
        });
    });

    workImg.addEventListener("click", () => {
        showWork((current + 1) % works.length);
    });

}
