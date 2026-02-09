// --- Data: 114 surahs (names only; you can extend with extra metadata) ---
const SURAH_LIST = [
  { number: 1, nameAr: "الفاتحة", nameEn: "Al-Fatihah" },
  { number: 2, nameAr: "البقرة", nameEn: "Al-Baqarah" },
  { number: 3, nameAr: "آل عمران", nameEn: "Ali 'Imran" },
  { number: 4, nameAr: "النساء", nameEn: "An-Nisa" },
  { number: 5, nameAr: "المائدة", nameEn: "Al-Ma'idah" },
  { number: 6, nameAr: "الأنعام", nameEn: "Al-An'am" },
  { number: 7, nameAr: "الأعراف", nameEn: "Al-A'raf" },
  { number: 8, nameAr: "الأنفال", nameEn: "Al-Anfal" },
  { number: 9, nameAr: "التوبة", nameEn: "At-Tawbah" },
  { number: 10, nameAr: "يونس", nameEn: "Yunus" },
  { number: 11, nameAr: "هود", nameEn: "Hud" },
  { number: 12, nameAr: "يوسف", nameEn: "Yusuf" },
  { number: 13, nameAr: "الرعد", nameEn: "Ar-Ra'd" },
  { number: 14, nameAr: "إبراهيم", nameEn: "Ibrahim" },
  { number: 15, nameAr: "الحجر", nameEn: "Al-Hijr" },
  { number: 16, nameAr: "النحل", nameEn: "An-Nahl" },
  { number: 17, nameAr: "الإسراء", nameEn: "Al-Isra" },
  { number: 18, nameAr: "الكهف", nameEn: "Al-Kahf" },
  { number: 19, nameAr: "مريم", nameEn: "Maryam" },
  { number: 20, nameAr: "طه", nameEn: "Ta-Ha" },
  { number: 21, nameAr: "الأنبياء", nameEn: "Al-Anbiya" },
  { number: 22, nameAr: "الحج", nameEn: "Al-Hajj" },
  { number: 23, nameAr: "المؤمنون", nameEn: "Al-Mu'minun" },
  { number: 24, nameAr: "النور", nameEn: "An-Nur" },
  { number: 25, nameAr: "الفرقان", nameEn: "Al-Furqan" },
  { number: 26, nameAr: "الشعراء", nameEn: "Ash-Shu'ara" },
  { number: 27, nameAr: "النمل", nameEn: "An-Naml" },
  { number: 28, nameAr: "القصص", nameEn: "Al-Qasas" },
  { number: 29, nameAr: "العنكبوت", nameEn: "Al-'Ankabut" },
  { number: 30, nameAr: "الروم", nameEn: "Ar-Rum" },
  { number: 31, nameAr: "لقمان", nameEn: "Luqman" },
  { number: 32, nameAr: "السجدة", nameEn: "As-Sajdah" },
  { number: 33, nameAr: "الأحزاب", nameEn: "Al-Ahzab" },
  { number: 34, nameAr: "سبإ", nameEn: "Saba" },
  { number: 35, nameAr: "فاطر", nameEn: "Fatir" },
  { number: 36, nameAr: "يس", nameEn: "Ya-Sin" },
  { number: 37, nameAr: "الصافات", nameEn: "As-Saffat" },
  { number: 38, nameAr: "ص", nameEn: "Sad" },
  { number: 39, nameAr: "الزمر", nameEn: "Az-Zumar" },
  { number: 40, nameAr: "غافر", nameEn: "Ghafir" },
  { number: 41, nameAr: "فصلت", nameEn: "Fussilat" },
  { number: 42, nameAr: "الشورى", nameEn: "Ash-Shura" },
  { number: 43, nameAr: "الزخرف", nameEn: "Az-Zukhruf" },
  { number: 44, nameAr: "الدخان", nameEn: "Ad-Dukhan" },
  { number: 45, nameAr: "الجاثية", nameEn: "Al-Jathiyah" },
  { number: 46, nameAr: "الأحقاف", nameEn: "Al-Ahqaf" },
  { number: 47, nameAr: "محمد", nameEn: "Muhammad" },
  { number: 48, nameAr: "الفتح", nameEn: "Al-Fath" },
  { number: 49, nameAr: "الحجرات", nameEn: "Al-Hujurat" },
  { number: 50, nameAr: "ق", nameEn: "Qaf" },
  { number: 51, nameAr: "الذاريات", nameEn: "Adh-Dhariyat" },
  { number: 52, nameAr: "الطور", nameEn: "At-Tur" },
  { number: 53, nameAr: "النجم", nameEn: "An-Najm" },
  { number: 54, nameAr: "القمر", nameEn: "Al-Qamar" },
  { number: 55, nameAr: "الرحمن", nameEn: "Ar-Rahman" },
  { number: 56, nameAr: "الواقعة", nameEn: "Al-Waqi'ah" },
  { number: 57, nameAr: "الحديد", nameEn: "Al-Hadid" },
  { number: 58, nameAr: "المجادلة", nameEn: "Al-Mujadila" },
  { number: 59, nameAr: "الحشر", nameEn: "Al-Hashr" },
  { number: 60, nameAr: "الممتحنة", nameEn: "Al-Mumtahanah" },
  { number: 61, nameAr: "الصف", nameEn: "As-Saff" },
  { number: 62, nameAr: "الجمعة", nameEn: "Al-Jumu'ah" },
  { number: 63, nameAr: "المنافقون", nameEn: "Al-Munafiqun" },
  { number: 64, nameAr: "التغابن", nameEn: "At-Taghabun" },
  { number: 65, nameAr: "الطلاق", nameEn: "At-Talaq" },
  { number: 66, nameAr: "التحريم", nameEn: "At-Tahrim" },
  { number: 67, nameAr: "الملك", nameEn: "Al-Mulk" },
  { number: 68, nameAr: "القلم", nameEn: "Al-Qalam" },
  { number: 69, nameAr: "الحاقة", nameEn: "Al-Haqqah" },
  { number: 70, nameAr: "المعارج", nameEn: "Al-Ma'arij" },
  { number: 71, nameAr: "نوح", nameEn: "Nuh" },
  { number: 72, nameAr: "الجن", nameEn: "Al-Jinn" },
  { number: 73, nameAr: "المزمل", nameEn: "Al-Muzzammil" },
  { number: 74, nameAr: "المدثر", nameEn: "Al-Muddaththir" },
  { number: 75, nameAr: "القيامة", nameEn: "Al-Qiyamah" },
  { number: 76, nameAr: "الإنسان", nameEn: "Al-Insan" },
  { number: 77, nameAr: "المرسلات", nameEn: "Al-Mursalat" },
  { number: 78, nameAr: "النبأ", nameEn: "An-Naba" },
  { number: 79, nameAr: "النازعات", nameEn: "An-Nazi'at" },
  { number: 80, nameAr: "عبس", nameEn: "'Abasa" },
  { number: 81, nameAr: "التكوير", nameEn: "At-Takwir" },
  { number: 82, nameAr: "الانفطار", nameEn: "Al-Infitar" },
  { number: 83, nameAr: "المطففين", nameEn: "Al-Mutaffifin" },
  { number: 84, nameAr: "الانشقاق", nameEn: "Al-Inshiqaq" },
  { number: 85, nameAr: "البروج", nameEn: "Al-Buruj" },
  { number: 86, nameAr: "الطارق", nameEn: "At-Tariq" },
  { number: 87, nameAr: "الأعلى", nameEn: "Al-A'la" },
  { number: 88, nameAr: "الغاشية", nameEn: "Al-Ghashiyah" },
  { number: 89, nameAr: "الفجر", nameEn: "Al-Fajr" },
  { number: 90, nameAr: "البلد", nameEn: "Al-Balad" },
  { number: 91, nameAr: "الشمس", nameEn: "Ash-Shams" },
  { number: 92, nameAr: "الليل", nameEn: "Al-Layl" },
  { number: 93, nameAr: "الضحى", nameEn: "Ad-Duha" },
  { number: 94, nameAr: "الشرح", nameEn: "Ash-Sharh" },
  { number: 95, nameAr: "التين", nameEn: "At-Tin" },
  { number: 96, nameAr: "العلق", nameEn: "Al-'Alaq" },
  { number: 97, nameAr: "القدر", nameEn: "Al-Qadr" },
  { number: 98, nameAr: "البينة", nameEn: "Al-Bayyinah" },
  { number: 99, nameAr: "الزلزلة", nameEn: "Az-Zalzalah" },
  { number: 100, nameAr: "العاديات", nameEn: "Al-'Adiyat" },
  { number: 101, nameAr: "القارعة", nameEn: "Al-Qari'ah" },
  { number: 102, nameAr: "التكاثر", nameEn: "At-Takathur" },
  { number: 103, nameAr: "العصر", nameEn: "Al-'Asr" },
  { number: 104, nameAr: "الهمزة", nameEn: "Al-Humazah" },
  { number: 105, nameAr: "الفيل", nameEn: "Al-Fil" },
  { number: 106, nameAr: "قريش", nameEn: "Quraysh" },
  { number: 107, nameAr: "الماعون", nameEn: "Al-Ma'un" },
  { number: 108, nameAr: "الكوثر", nameEn: "Al-Kawthar" },
  { number: 109, nameAr: "الكافرون", nameEn: "Al-Kafirun" },
  { number: 110, nameAr: "النصر", nameEn: "An-Nasr" },
  { number: 111, nameAr: "المسد", nameEn: "Al-Masad" },
  { number: 112, nameAr: "الإخلاص", nameEn: "Al-Ikhlas" },
  { number: 113, nameAr: "الفلق", nameEn: "Al-Falaq" },
  { number: 114, nameAr: "الناس", nameEn: "An-Nas" }
];

// Example Quran text data (demo). Replace with your existing Quran dataset.
const SAMPLE_AYAT_BY_SURAH = {
  1: [
    "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    "الرَّحْمَٰنِ الرَّحِيمِ",
    "مَالِكِ يَوْمِ الدِّينِ",
    "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
  ]
  // Add other surahs as needed using your full Quran source
};

// LocalStorage keys
const LAST_READ_KEY = "quran:last-read"; // stores { surahNumber, ayahIndex }

// Simple Mp3Quran-like URL builder (adjust to your actual API)
const AUDIO_BASE_URL = "https://server8.mp3quran.net/afs/"; // example server
function buildSurahAudioUrl(surahNumber) {
  const padded = surahNumber.toString().padStart(3, "0");
  // Change "afs" to your selected reciter folder as per Mp3Quran docs
  return `${AUDIO_BASE_URL}${padded}.mp3`;
}

// DOM references
const headerSurahName = document.getElementById("headerSurahName");
const headerSubtitle = document.getElementById("headerSubtitle");

const tabViews = {
  quran: document.getElementById("tab-quran"),
  radio: document.getElementById("tab-radio"),
  favorites: document.getElementById("tab-favorites"),
  settings: document.getElementById("tab-settings")
};

const bottomNavItems = document.querySelectorAll(".bottom-nav-item");

const surahListEl = document.getElementById("surahList");
const surahSearchEl = document.getElementById("surahSearch");
const readingSurahNameEl = document.getElementById("readingSurahName");
const readingContentEl = document.getElementById("readingContent");
const fontSizeSliderEl = document.getElementById("fontSizeSlider");

const miniPlayerTitleEl = document.getElementById("miniPlayerTitle");
const miniPlayerSubtitleEl = document.getElementById("miniPlayerSubtitle");
const btnPlayPause = document.getElementById("btnPlayPause");
const playPauseIcon = document.getElementById("playPauseIcon");
const audioElement = document.getElementById("audioElement");

// State
let currentSurahNumber = 1;
let isPlaying = false;
let wakeLock = null;

// --------- Navigation Logic ---------

bottomNavItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.getAttribute("data-tab");
    switchTab(tabId);
  });
});

function switchTab(tabId) {
  // Update nav active state
  bottomNavItems.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  // Update views
  Object.keys(tabViews).forEach((key) => {
    tabViews[key].classList.toggle("active", key === tabId);
  });

  // Update header
  if (tabId === "quran") {
    headerSurahName.textContent = "القرآن الكريم";
    headerSubtitle.textContent = "اختر سورة للقراءة والاستماع";
  } else if (tabId === "radio") {
    headerSurahName.textContent = "إذاعات القرآن";
    headerSubtitle.textContent = "استمع للبث المباشر من محطات متعددة";
  } else if (tabId === "favorites") {
    headerSurahName.textContent = "المفضلة";
    headerSubtitle.textContent = "السور والآيات المفضلة لديك";
  } else if (tabId === "settings") {
    headerSurahName.textContent = "الإعدادات";
    headerSubtitle.textContent = "قم بتخصيص تجربة قراءة القرآن";
  }
}

// --------- Surah List Rendering + Search ---------

function renderSurahList(filterText = "") {
  surahListEl.innerHTML = "";
  const normalized = filterText.trim().toLowerCase();

  const list = SURAH_LIST.filter((s) => {
    if (!normalized) return true;
    return (
      s.nameAr.includes(filterText) ||
      s.nameEn.toLowerCase().includes(normalized) ||
      s.number.toString() === normalized
    );
  });

  list.forEach((surah) => {
    const li = document.createElement("li");
    li.className = "surah-item";

    const meta = document.createElement("div");
    meta.className = "surah-meta";

    const nameAr = document.createElement("div");
    nameAr.className = "surah-name-ar";
    nameAr.textContent = surah.nameAr;

    const nameEn = document.createElement("div");
    nameEn.className = "surah-name-en";
    nameEn.textContent = `${surah.number}. ${surah.nameEn}`;

    meta.appendChild(nameAr);
    meta.appendChild(nameEn);

    const actions = document.createElement("div");
    actions.className = "surah-actions";

    const readBtn = document.createElement("button");
    readBtn.className = "surah-btn primary";
    readBtn.textContent = "قراءة";
    readBtn.addEventListener("click", () => openSurahForReading(surah.number));

    const playBtn = document.createElement("button");
    playBtn.className = "surah-btn";
    playBtn.textContent = "استماع";
    playBtn.addEventListener("click", () => playSurahAudio(surah.number));

    actions.appendChild(readBtn);
    actions.appendChild(playBtn);

    const numPill = document.createElement("div");
    numPill.className = "surah-number-pill";
    numPill.textContent = surah.number;

    li.appendChild(meta);
    li.appendChild(actions);
    li.appendChild(numPill);

    surahListEl.appendChild(li);
  });
}

surahSearchEl.addEventListener("input", (e) => {
  renderSurahList(e.target.value);
});

// --------- Reading Mode ---------

function openSurahForReading(surahNumber) {
  currentSurahNumber = surahNumber;
  const surahInfo = SURAH_LIST.find((s) => s.number === surahNumber);

  readingSurahNameEl.textContent = `سورة ${surahInfo?.nameAr || ""}`;
  headerSurahName.textContent = `سورة ${surahInfo?.nameAr || ""}`;
  headerSubtitle.textContent = "وضع القراءة مع تمرير مستمر";

  populateReadingContent(surahNumber);

  // Switch to Quran tab if not already
  switchTab("quran");

  // Restore last read position for this surah
  restoreLastReadForCurrentSurah();
}

function populateReadingContent(surahNumber) {
  readingContentEl.innerHTML = "";

  const ayat =
    SAMPLE_AYAT_BY_SURAH[surahNumber] ||
    [
      // Fallback text if that surah hasn't been populated yet
      "نموذج للآيات في هذه السورة. قم بربط التطبيق بقاعدة بيانات القرآن الخاصة بك هنا."
    ];

  // Optional Bismillah (for demo, we show if surah 1)
  if (surahNumber === 1) {
    const bism = document.createElement("div");
    bism.className = "reading-bismillah";
    bism.textContent = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
    readingContentEl.appendChild(bism);
  }

  ayat.forEach((text, idx) => {
    const wrapper = document.createElement("span");
    wrapper.className = "ayah-wrapper";
    wrapper.dataset.index = idx.toString();

    const ayahEl = document.createElement("span");
    ayahEl.className = "ayah";
    ayahEl.textContent = text + " ";

    const numEl = document.createElement("span");
    numEl.className = "ayah-number";
    numEl.textContent = idx + 1;

    wrapper.appendChild(ayahEl);
    wrapper.appendChild(numEl);

    // Click on ayah to mark last read
    wrapper.addEventListener("click", () => {
      setLastRead(currentSurahNumber, idx);
      highlightLastRead(currentSurahNumber, idx);
    });

    readingContentEl.appendChild(wrapper);
    readingContentEl.appendChild(document.createTextNode(" "));
  });
}

// Font size slider
fontSizeSliderEl.addEventListener("input", (e) => {
  const size = Number(e.target.value) || 26;
  readingContentEl.style.fontSize = `${size}px`;
});

// --------- Last Read Tracking (LocalStorage) ---------

function getLastRead() {
  try {
    const raw = localStorage.getItem(LAST_READ_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setLastRead(surahNumber, ayahIndex) {
  const payload = { surahNumber, ayahIndex, updatedAt: Date.now() };
  localStorage.setItem(LAST_READ_KEY, JSON.stringify(payload));
}

function highlightLastRead(surahNumber, ayahIndex) {
  // Clear previous
  readingContentEl
    .querySelectorAll(".ayah-wrapper")
    .forEach((el) => el.classList.remove("last-read"));

  if (surahNumber !== currentSurahNumber) return;

  const target = readingContentEl.querySelector(
    `.ayah-wrapper[data-index="${ayahIndex}"]`
  );
  if (target) {
    target.classList.add("last-read");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function restoreLastReadForCurrentSurah() {
  const last = getLastRead();
  if (!last || last.surahNumber !== currentSurahNumber) return;
  highlightLastRead(last.surahNumber, last.ayahIndex);
}

// --------- Audio Mini Player / Mp3Quran Integration ---------

function playSurahAudio(surahNumber) {
  const surahInfo = SURAH_LIST.find((s) => s.number === surahNumber);
  if (!surahInfo) return;

  const url = buildSurahAudioUrl(surahNumber);
  audioElement.src = url;
  audioElement.play().then(() => {
    isPlaying = true;
    updatePlayPauseIcon();
    miniPlayerTitleEl.textContent = `سورة ${surahInfo.nameAr}`;
    miniPlayerSubtitleEl.textContent = surahInfo.nameEn;
    // Optional: move to Quran tab to show surah if desired
    // openSurahForReading(surahNumber);
  }).catch((err) => {
    console.error("Audio play failed:", err);
  });
}

btnPlayPause.addEventListener("click", () => {
  if (!audioElement.src) return;
  if (isPlaying) {
    audioElement.pause();
  } else {
    audioElement.play().catch((err) =>
      console.error("Play failed from mini player:", err)
    );
  }
});

audioElement.addEventListener("play", () => {
  isPlaying = true;
  updatePlayPauseIcon();
});
audioElement.addEventListener("pause", () => {
  isPlaying = false;
  updatePlayPauseIcon();
});
audioElement.addEventListener("ended", () => {
  isPlaying = false;
  updatePlayPauseIcon();
});

function updatePlayPauseIcon() {
  playPauseIcon.textContent = isPlaying ? "⏸" : "▶";
}

// --------- Prevent Sleep (Wake Lock) ---------

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
      wakeLock.addEventListener("release", () => {
        console.log("Screen Wake Lock released");
      });
      console.log("Screen Wake Lock acquired");
    } else {
      // In Capacitor, you can instead use a plugin like @capacitor-community/keep-awake
      console.log("Wake Lock API not available in this environment.");
    }
  } catch (err) {
    console.error("Wake Lock error:", err);
  }
}

function setupWakeLockListeners() {
  // Re-acquire on visibility change
  document.addEventListener("visibilitychange", () => {
    if (wakeLock !== null && document.visibilityState === "visible") {
      requestWakeLock();
    }
  });
}

// Example: enable wake lock whenever the user starts reading/scrolling
readingContentEl.addEventListener(
  "scroll",
  () => {
    if (!wakeLock) {
      requestWakeLock();
    }
  },
  { passive: true }
);

// --------- Init ---------

function init() {
  renderSurahList();
  populateReadingContent(currentSurahNumber);
  restoreLastReadForCurrentSurah();
  setupWakeLockListeners();
}

document.addEventListener("DOMContentLoaded", init);

