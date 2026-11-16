// 工藝製作頁：右側進度條
const craftScroll = document.querySelector(".craft-scroll");
const progressFill = document.querySelector(".progress-fill");
const progressNodes = document.querySelector(".progress-nodes");

if (craftScroll && progressFill && progressNodes) {

    const slides = [...craftScroll.querySelectorAll(".craft-slide")];

    // 依 section 數量產生節點
    const nodes = slides.map((slide, i) => {

        const node = document.createElement("button");
        node.className = "progress-node";
        node.type = "button";
        node.innerHTML = `<span class="node-label">${slide.dataset.label || i + 1}</span>`;
        node.setAttribute("aria-label", slide.dataset.label || `第 ${i + 1} 頁`);

        node.addEventListener("click", () => {
            slide.scrollIntoView({ behavior: "smooth", block: "center" });
        });

        progressNodes.appendChild(node);
        return node;

    });

    function updateProgress() {

        const max = craftScroll.scrollHeight - craftScroll.clientHeight;
        const ratio = max > 0 ? craftScroll.scrollTop / max : 0;

        progressFill.style.height = `${ratio * 100}%`;

        // 目前在哪一頁：取中心最接近畫面中心的 section
        const center = craftScroll.scrollTop + craftScroll.clientHeight / 2;
        let current = 0;
        let best = Infinity;

        slides.forEach((slide, i) => {
            const d = Math.abs(slide.offsetTop + slide.offsetHeight / 2 - center);
            if (d < best) { best = d; current = i; }
        });

        nodes.forEach((node, i) => {
            node.classList.toggle("passed", i <= current);
            node.classList.toggle("active", i === current);
        });

    }

    craftScroll.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.addEventListener("load", updateProgress);
    updateProgress();

}
