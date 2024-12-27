const toggleButton = document.getElementById('toggleButton');
const topBar = document.getElementById('topBar');
const languageSwitcher = document.getElementById('languageSwitcher');
const languageSelect = document.getElementById('languageSelect');

// メニュー表示/非表示切り替え
toggleButton.addEventListener('click', () => {
    if (topBar.style.display === 'block') {
        topBar.style.display = 'none';
        languageSwitcher.style.display = 'none'; // 言語切り替えも非表示
    } else {
        topBar.style.display = 'block';
        languageSwitcher.style.display = 'block'; // 言語切り替えも表示
    }
});

// 言語切り替えとページ遷移
languageSelect.addEventListener('change', (event) => {
    const lang = event.target.value;

    if (lang === 'ja') {
        window.location.href = 'index-ja.html'; // 日本語ページ
    } else if (lang === 'en') {
        window.location.href = 'index.html'; // 英語ページ
    }
});
