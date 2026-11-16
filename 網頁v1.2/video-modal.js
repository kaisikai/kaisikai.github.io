const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const videoFrames = videoModal.querySelectorAll("iframe");

function openVideoModal(){

    // 打開時才載入影片
    videoFrames.forEach(frame=>{
        frame.src = frame.dataset.src;
    });

    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden","false");

}

function closeVideoModal(){

    videoModal.classList.remove("open");
    videoModal.setAttribute("aria-hidden","true");

    // 關閉時清掉 src，讓影片停止播放
    videoFrames.forEach(frame=>{
        frame.src = "about:blank";
    });

    videoBtn.focus();

}

videoBtn.addEventListener("click", openVideoModal);

videoModal.querySelector(".video-modal-close").addEventListener("click", closeVideoModal);

// 點彈窗外的暗色背景也可以關閉
videoModal.addEventListener("click",(e)=>{

    if(e.target === videoModal){
        closeVideoModal();
    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape" && videoModal.classList.contains("open")){
        closeVideoModal();
    }

});
