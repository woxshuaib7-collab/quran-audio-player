/**
 * Quran Audio Player - Vanilla JS
 * Fetches reciters from mp3quran.net API, displays surahs, plays audio via server + surah_number.mp3
 */

const API_RECITERS = 'https://mp3quran.net/api/v3/reciters?language=ar';

// Arabic names of the 114 Surahs (standard order)
const SURAH_NAMES_AR = [
  'الفاتحة', 'البقرة', 'آل عمران', 'النساء', 'المائدة', 'الأنعام', 'الأعراف', 'الأنفال', 'التوبة',
  'يونس', 'هود', 'يوسف', 'الرعد', 'إبراهيم', 'الحجر', 'النحل', 'الإسراء', 'الكهف', 'مريم', 'طه',
  'الأنبياء', 'الحج', 'المؤمنون', 'النور', 'الفرقان', 'الشعراء', 'النمل', 'القصص', 'العنكبوت', 'الروم',
  'لقمان', 'السجدة', 'الأحزاب', 'سبأ', 'فاطر', 'يس', 'الصافات', 'ص', 'الزمر', 'غافر',
  'فصلت', 'الشورى', 'الزخرف', 'الدخان', 'الجاثية', 'الأحقاف', 'محمد', 'الفتح', 'الحجرات', 'ق',
  'الذاريات', 'الطور', 'النجم', 'القمر', 'الرحمن', 'الواقعة', 'الحديد', 'المجادلة', 'الحشر', 'الممتحنة',
  'الصف', 'الجمعة', 'المنافقون', 'التغابن', 'الطلاق', 'التحريم', 'الملك', 'القلم', 'الحاقة', 'المعارج',
  'نوح', 'الجن', 'المزمل', 'المدثر', 'القيامة', 'الإنسان', 'المرسلات', 'النبأ', 'النازعات', 'عبس',
  'التكوير', 'الانفطار', 'المطففين', 'الانشقاق', 'البروج', 'الطارق', 'الأعلى', 'الغاشية', 'الفجر', 'البلد',
  'الشمس', 'الليل', 'الضحى', 'الشرح', 'التين', 'العلق', 'القدر', 'البينة', 'الزلزلة', 'العاديات',
  'القارعة', 'التكاثر', 'العصر', 'الهمزة', 'الفيل', 'قريش', 'الماعون', 'الكوثر', 'الكافرون', 'النصر',
  'المسد', 'الإخلاص', 'الفلق', 'الناس'
];

const recitersSection = document.getElementById('recitersSection');
const surahsSection = document.getElementById('surahsSection');
const recitersList = document.getElementById('recitersList');
const surahsList = document.getElementById('surahsList');
const recitersLoading = document.getElementById('recitersLoading');
const searchReciters = document.getElementById('searchReciters');
const backToReciters = document.getElementById('backToReciters');
const selectedReciterName = document.getElementById('selectedReciterName');
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const nowPlayingTitle = document.getElementById('nowPlayingTitle');
const playerFooter = document.getElementById('audioPlayer');
const progressTrack = document.getElementById('progressTrack');
const progressFill = document.getElementById('progressFill');

let allReciters = [];
let currentReciter = null;
let currentMoshaf = null;
let currentSurahElement = null;

// --- Fetch reciters ---
async function fetchReciters() {
  try {
    const res = await fetch(API_RECITERS);
    if (!res.ok) throw new Error('فشل تحميل القراء');
    const data = await res.json();
    allReciters = data.reciters || [];
    renderReciters(allReciters);
  } catch (err) {
    recitersList.innerHTML = `
      <div class="loading-state">
        <p>حدث خطأ: ${escapeHtml(err.message)}</p>
        <button type="button" class="back-btn btn-ripple" onclick="fetchReciters()">إعادة المحاولة</button>
      </div>
    `;
  } finally {
    if (recitersLoading && recitersLoading.parentNode) {
      recitersLoading.remove();
    }
  }
}

// --- Render reciters list (and filter by search) ---
function renderReciters(reciters) {
  if (!reciters.length) {
    recitersList.innerHTML = '<p class="loading-state" style="grid-column:1/-1;text-align:center;color:var(--text-secondary)">لا توجد نتائج</p>';
    return;
  }
  recitersList.innerHTML = reciters.map((r) => {
    const name = r.name || '';
    return `
      <div class="reciter-card" data-id="${r.id}" data-name="${escapeAttr(name)}">
        <span class="name">${escapeHtml(name)}</span>
      </div>
    `;
  }).join('');

  recitersList.querySelectorAll('.reciter-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      ripple(e, card);
      selectReciter(card.dataset.id, card.dataset.name);
    });
  });
}

// --- Ripple effect on click ---
function ripple(e, el) {
  const target = el && el.classList && el.classList.contains('btn-ripple') ? el : (el && el.closest && el.closest('.btn-ripple'));
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.cssText = `left:${x}px;top:${y}px;width:10px;height:10px;margin-left:-5px;margin-top:-5px;`;
  target.appendChild(span);
  setTimeout(() => span.remove(), 520);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, '&quot;');
}

// --- Layout refresh when switching between Reciters and Surahs ---
function refreshLayout() {
  window.scrollTo(0, 0);
  document.body.style.height = 'auto';
  document.documentElement.style.height = 'auto';
  // Force a minor layout reflow
  const height = document.documentElement.scrollHeight;
  console.log('Layout refreshed to height: ' + height);
}

// --- Search filter (real-time) ---
searchReciters.addEventListener('input', () => {
  const q = searchReciters.value.trim().toLowerCase();
  if (!q) {
    renderReciters(allReciters);
    return;
  }
  const filtered = allReciters.filter((r) =>
    (r.name || '').toLowerCase().includes(q)
  );
  renderReciters(filtered);
});

// --- Select reciter: pick best moshaf (114 surahs, prefer Hafs) ---
function selectReciter(reciterId, reciterName) {
  const reciter = allReciters.find((r) => String(r.id) === String(reciterId));
  if (!reciter || !reciter.moshaf || !reciter.moshaf.length) return;

  const moshaf = getBestMoshaf(reciter.moshaf);
  if (!moshaf) return;

  currentReciter = reciter;
  currentMoshaf = moshaf;
  const server = moshaf.server.replace(/\/?$/, '/');
  const surahList = (moshaf.surah_list || '')
    .split(',')
    .map((n) => n.trim())
    .filter(Boolean);
  const surahSet = new Set(surahList.map((n) => String(parseInt(n, 10))));

  recitersSection.classList.add('hidden');
  surahsSection.classList.remove('hidden');
  selectedReciterName.textContent = reciterName || reciter.name || 'السور';

  window.scrollTo({ top: 0, behavior: 'instant' });
  document.body.style.height = 'auto';

  surahsList.innerHTML = '';
  for (let i = 1; i <= 114; i++) {
    const num = String(i);
    const padded = num.padStart(3, '0');
    const nameAr = SURAH_NAMES_AR[i - 1] || `سورة ${i}`;
    const available = surahSet.has(num);
    const card = document.createElement('div');
    card.className = 'surah-card' + (available ? '' : ' disabled');
    card.dataset.surah = padded;
    card.dataset.available = available ? '1' : '0';
    card.innerHTML = `
      <span class="playing-indicator" aria-hidden="true"><span class="playing-bars"><span></span><span></span><span></span><span></span></span></span>
      <span class="number-circle">${padded}</span>
      <span class="name">${escapeHtml(nameAr)}</span>
    `;
    if (available) {
      card.addEventListener('click', (e) => {
        playSurah(server, padded, nameAr, card);
      });
    }
    surahsList.appendChild(card);
  }

  // Force browser to recalculate scrollable height after DOM update
  setTimeout(() => {
    refreshLayout();
  }, 100);
}

function getBestMoshaf(moshafArray) {
  const full = moshafArray.filter((m) => (m.surah_total || 0) >= 114);
  const hafs = full.filter((m) => m.moshaf_type === 11);
  return (hafs[0] || full[0] || moshafArray[0]) || null;
}

// --- Play surah: server + surah_number.mp3 ---
function playSurah(server, surahPadded, nameAr, cardEl) {
  const url = `${server}${surahPadded}.mp3`;
  if (currentSurahElement) currentSurahElement.classList.remove('playing');
  currentSurahElement = cardEl;
  cardEl.classList.add('playing');

  audio.src = url;
  audio.load();
  audio.volume = volumeSlider.value / 100;
  nowPlayingTitle.textContent = `سورة ${nameAr} (${surahPadded})`;
  playPauseBtn.disabled = false;
  playerFooter.classList.add('playing');
  audio.play().catch((e) => {
    console.warn('Play failed:', e);
    nowPlayingTitle.textContent = 'تعذر تشغيل السورة';
  });
}

// --- Progress bar: sync and seek ---
function updateProgress() {
  if (!audio.duration || !isFinite(audio.duration)) return;
  const pct = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = pct + '%';
}

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', updateProgress);
audio.addEventListener('ended', () => { progressFill.style.width = '0%'; });

progressTrack.addEventListener('click', (e) => {
  if (!audio.src || !audio.duration) return;
  const rect = progressTrack.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = Math.max(0, Math.min(1, x / rect.width));
  audio.currentTime = percent * audio.duration;
  progressFill.style.width = (percent * 100) + '%';
});

// --- Play / Pause ---
playPauseBtn.addEventListener('click', (e) => {
  ripple(e, playPauseBtn);
  if (audio.paused) {
    audio.play();
    playerFooter.classList.add('playing');
  } else {
    audio.pause();
    playerFooter.classList.remove('playing');
  }
});

audio.addEventListener('play', () => playerFooter.classList.add('playing'));
audio.addEventListener('pause', () => playerFooter.classList.remove('playing'));

// --- Ripple on volume ---
volumeBtn.addEventListener('click', (e) => ripple(e, volumeBtn));

// --- Volume ---
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value / 100;
});

volumeBtn.addEventListener('click', () => {
  if (volumeSlider.value === '0') {
    volumeSlider.value = 80;
    audio.volume = 0.8;
  } else {
    volumeSlider.value = 0;
    audio.volume = 0;
  }
});

// --- Back to reciters ---
backToReciters.addEventListener('click', (e) => {
  ripple(e, backToReciters);
  surahsSection.classList.add('hidden');
  recitersSection.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'instant' });
  document.body.style.height = 'auto';

  currentReciter = null;
  currentMoshaf = null;
  if (currentSurahElement) {
    currentSurahElement.classList.remove('playing');
    currentSurahElement = null;
  }
  // Force browser to recalculate scrollable height after hidden section removed from layout
  setTimeout(() => {
    refreshLayout();
  }, 100);
});

// --- Init ---
fetchReciters();
