// 周邊商品：點擊圖片放大

const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="關閉">&times;</button>
    <figure>
        <img alt="">
        <figcaption></figcaption>
    </figure>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');

document.querySelectorAll('.product-item').forEach(item => {

    item.addEventListener('click', () => {

        const img = item.querySelector('img');

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = item.querySelector('figcaption').textContent;

        lightbox.classList.add('open');

    });

});

function closeLightbox(){
    lightbox.classList.remove('open');
}

// 點背景或 × 關閉，點圖片本身不關
lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) closeLightbox();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
});
