document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('toggleLanguage');
    const contentFr = document.getElementById('content-fr');
    const contentEn = document.getElementById('content-en');

    let isEnglish = contentEn.classList.contains('active');

    btn.addEventListener('click', () => {
        isEnglish = !isEnglish;
        
        if (isEnglish) {
            contentFr.style.display = "none";
            contentEn.style.display = "block";
            btn.textContent = "Passer en français";
        } else {
            contentEn.style.display = "none";
            contentFr.style.display = "block";
            btn.textContent = "Switch to English";
        }
    });
});
