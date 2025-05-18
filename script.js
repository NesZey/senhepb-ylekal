// Slaytlar
const imageList = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg','foto4.jpg','foto5.jpg','foto6.jpg','foto7.jpg','foto8.jpg','foto9.jpg','foto10.jpg','foto1.jpg','foto1.jpg',]; // 'images/' klasöründe olmalı
let currentImage = 0;

function changeImage() {
  const img = document.getElementById('slideImage');
  currentImage = (currentImage + 1) % imageList.length;
  img.src = 'images/' + imageList[currentImage];
}
setInterval(changeImage, 5000);

// Müzik
const tracks = ['music1.mp3', 'music2.mp3']; // 'music/' klasöründe
let currentTrack = 0;
let audio = new Audio('music/' + tracks[currentTrack]);
audio.autoplay = true;
audio.loop = false;
audio.play();

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = 'music/' + tracks[currentTrack];
  audio.play();
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  audio.src = 'music/' + tracks[currentTrack];
  audio.play();
}

function toggleMusicPanel() {
  const panel = document.getElementById('musicControls');
  panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
}

// Uçan Kalpler
const loveWords = [
  'Seni düşündüğüm her an kalbim hızla atıyor.',
  'Seninle hayat daha güzel.',
  'Biricik',
  'Kalbim',
  'Hayatım',
  'Kalbim sadece senin için atıyor.',
  'Sen benim en değerli hazinemsin.',
  'Her gün seni daha çok seviyorum.',
  'Seninle olmak hayatın en güzel anı.',
  'Senin gülüşün dünyamı aydınlatıyor.',
  'Aşkın büyüsüyle her şey mümkün.',
  'Kalbim sana ait, sonsuza kadar.',
  'Sen benim hayatımdaki en özel insansın.',
  'Sevgi paylaştıkça çoğalır.',
  'Sen benim en güzel hayalimsin.',
  'Birlikteyken her şey tamam.',
  'Gözlerin bana umut veriyor.',
  'Seni düşünmek bile mutluluk veriyor.',
  'Seninle hayat bir masal gibi.',
  'Kalbim hep seninle atıyor.',
  'Aşkımız hiç bitmesin.',
  'Senin yanında huzur buluyorum.',
  'Seninle her an bir mucize.',
  'Sen benim hayat ışığımsın.',
  'Sevgiyle dolu bir dünya hayal ediyorum seninle.',
  'Seninle her gün yeniden doğuyorum.',
  'Kalbimde sadece sen varsın.',
  'Sen benim en değerli varlığımsın.'
];
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 1000);


function createHeart(message) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = message;

  // Ekran genişliği ve yüksekliği
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Rastgele left (yatay) - 0 ile ekran genişliği arasında
  const left = Math.random() * screenWidth;

  // Başlangıç top'u ekran yüksekliğinin biraz altına koy
  const top = screenHeight + 20; // 20px ekran dışında başlar

  heart.style.left = `${left}px`;
  heart.style.top = `${top}px`;

  document.body.appendChild(heart);

  // 6 saniye sonra kaldır (floatUp animasyon süresi ile aynı)
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Örnek olarak her 500ms'de rastgele bir kalp oluştur
setInterval(() => {
  createHeart('Sen her şeysin.💖');
   createHeart('Seni çok seviyorum.💖'); 
createHeart('Seni seviyorum. 💖');
createHeart('İyi ki varsın. 💖');
createHeart('Canımsın. 💖');
createHeart('Aşkım. 💖');
createHeart('Kalbim seninle. 💖');
createHeart('Bir tanemsin. 💖');
createHeart('Seninleyim. 💖');
createHeart('Hep sen. 💖');
createHeart('Gülüşün yetiyor. 💖');
createHeart('Yanımda kal. 💖');
createHeart('Sen benimsin. 💖');
createHeart('Senin için. 💖');
createHeart('Sensiz olmaz. 💖');
createHeart('Aşksın sen. 💖');
createHeart('En güzelim. 💖');
createHeart('Rüyamsın. 💖');
createHeart('Bitanem. 💖');
createHeart('İçimdesin. 💖');
createHeart('Kalbim senin. 💖');
createHeart('Dünyam sensin. 💖');
}, 4000);



//takvim
function generateCalendar() {
  const calendar = document.getElementById('calendar');
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  const header = `<div class="calendar-header">${monthNames[month]} ${year}</div>`;

  let grid = '<div class="calendar-grid">';
  const weekDays = ['P', 'S', 'Ç', 'P', 'C', 'C', 'P'];
  weekDays.forEach(d => grid += `<div><strong>${d}</strong></div>`);

  for (let i = 0; i < firstDay; i++) grid += '<div></div>';

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = now.getDate() === day;
    const isSixteenth = day === 16;
    const isMay16 = (day === 16 && month === 4); // Mayıs = 4 (0-indexli)
    let classes = 'day';

    if (isToday) classes += ' today';
    if (isSixteenth) classes += ' sixteenth';
    if (isMay16) classes += ' may-16-special';

    grid += `<div class="${classes}">${day}</div>`;
  }

  grid += '</div>';
  calendar.innerHTML = header + grid;
}

generateCalendar();



// Şifreli Mesaj
function showPasswordPrompt() {
  document.getElementById('passwordPrompt').style.display = 'block';
}

function checkPassword() {
  const input = document.getElementById('passwordInput').value;
  if (input === '1605') {
    document.getElementById('secretMessage').style.display = 'block';
  }
}

function hideSecret() {
  document.getElementById('secretMessage').style.display = 'none';
}


