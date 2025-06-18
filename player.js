// player.js

document.addEventListener('DOMContentLoaded', () => {

 const playlist = [
  { title: "나와 함께 가 볼까?", url: "https://akamd1.jw-cdn.org/sg2/p/53aeba/1/o/osg_KO_003.mp3" },
  { title: "어떻게 살아야 할까?", url: "https://akamd1.jw-cdn.org/sg2/p/70c49e/2/o/osg_KO_004.mp3" },
  { title: "난 포기 안 해", url: "https://cfp2.jw-cdn.org/a/343f89/1/o/osg_KO_005.mp3" },
  { title: "'내가 가진 가치 있는 것들로 여호와를 공경하리'", url: "https://akamd1.jw-cdn.org/sg2/p/666f30/1/o/osg_KO_006.mp3" },
  { title: "내 모든 걸 드려요", url: "https://akamd1.jw-cdn.org/sg2/p/8d3e96/1/o/osg_KO_007.mp3" },
  { title: "시험을 이겨 내서 행복해요", url: "https://akamd1.jw-cdn.org/sg2/p/c1ca188/1/o/osg_KO_008.mp3" },
  { title: "바로 지금", url: "https://akamd1.jw-cdn.org/sg2/p/1e14ff/1/o/osg_KO_009.mp3" },
  { title: "웃어요", url: "https://akamd1.jw-cdn.org/sg2/p/2ed0be9/1/o/osg_KO_010.mp3" },
  { title: "보물 찾기", url: "https://akamd1.jw-cdn.org/sg2/p/78b6906/1/o/osg_KO_011.mp3" },
  { title: "여호와의 품으로", url: "https://akamd1.jw-cdn.org/sg2/p/5e8745/1/o/osg_KO_012.mp3" },
  { title: "즐거운 대회", url: "https://akamd1.jw-cdn.org/sg2/p/3469d4/1/o/osg_KO_013.mp3" },
  { title: "가장 소중한 걸 드릴게요", url: "https://akamd1.jw-cdn.org/sg2/p/3dde88/1/o/osg_KO_014.mp3" },
  { title: "현명한 선택", url: "https://akamd1.jw-cdn.org/sg2/p/e0f2c8/1/o/osg_KO_015.mp3" },
  { title: "그날을 그려 보다", url: "https://akamd1.jw-cdn.org/sg2/p/ad6852a/1/o/osg_KO_016.mp3" },
  { title: "발걸음을 나란히", url: "https://akamd1.jw-cdn.org/sg2/p/761e98/1/o/osg_KO_017.mp3" },
  { title: "외국어를 배우면", url: "https://akamd1.jw-cdn.org/sg2/p/a90e6e/1/o/osg_KO_018.mp3" },
  { title: "서두르지 말아요", url: "https://akamd1.jw-cdn.org/sg2/p/fa520a/1/o/osg_KO_019.mp3" },
  { title: "“후대에 힘쓰십시오”", url: "https://akamd1.jw-cdn.org/sg2/p/3dc64f/1/o/osg_KO_020.mp3" },
  { title: "아버지께 감사합니다", url: "https://akamd1.jw-cdn.org/sg2/p/cf37fe/1/o/osg_KO_021.mp3" },
  { title: "내가 있어야 할 곳", url: "https://akamd1.jw-cdn.org/sg2/p/58be43/1/o/osg_KO_022.mp3" },
  { title: "나의 선택", url: "https://akamd1.jw-cdn.org/sg2/p/de85791/1/o/osg_KO_023.mp3" },
  { title: "서로를 용서해요", url: "https://akamd1.jw-cdn.org/sg2/p/e80b052/1/o/osg_KO_024.mp3" },
  { title: "그날은 우리 눈앞에", url: "https://akamd1.jw-cdn.org/sg2/p/8a6dc46/1/o/osg_KO_025.mp3" },
  { title: "공부하면 튼튼해져요", url: "https://akamd1.jw-cdn.org/sg2/p/5b765b8/1/o/osg_KO_026.mp3" },
  { title: "그 말씀은 영원해", url: "https://akamd1.jw-cdn.org/sg2/p/fb118d/1/o/osg_KO_027.mp3" },
  { title: "잠시 멈추어 기도해", url: "https://akamd1.jw-cdn.org/sg2/p/1e6e4f/1/o/osg_KO_028.mp3" },
  { title: "여호와와 함께 만들어 가는 나의 미래", url: "https://akamd1.jw-cdn.org/sg2/p/cfd502/1/o/osg_KO_029.mp3" },
  { title: "믿음이 있으면 할 수 있죠", url: "https://akamd1.jw-cdn.org/sg2/p/8fad5ef/1/o/osg_KO_030.mp3" },
  { title: "아버지의 말씀을 기억할게요", url: "https://akamd1.jw-cdn.org/sg2/p/f65fea/1/o/osg_KO_031.mp3" },
  { title: "다시 일어날게요", url: "https://akamd1.jw-cdn.org/sg2/p/0a5ae1/1/o/osg_KO_032.mp3" },
  { title: "한없이 놀라워", url: "https://akamd1.jw-cdn.org/sg2/p/6f9d51/1/o/osg_KO_033.mp3" },
  { title: "소중한 딸", url: "https://akamd1.jw-cdn.org/sg2/p/f732e1/1/o/osg_KO_034.mp3" },
  { title: "앞을 보며 나아가자", url: "https://akamd1.jw-cdn.org/sg2/p/e68962/1/o/osg_KO_035.mp3" },
  { title: "여길 봐", url: "https://akamd1.jw-cdn.org/sg2/p/2366de/1/o/osg_KO_036.mp3" },
  { title: "하느님의 놀라운 일들", url: "https://akamd1.jw-cdn.org/sg2/p/58e356/1/o/osg_KO_037.mp3" },
  { title: "중요한 것 앞자리에", url: "https://akamd1.jw-cdn.org/sg2/p/ffbcf2c/1/o/osg_KO_038.mp3" },
  { title: "난 그대만을", url: "https://akamd1.jw-cdn.org/sg2/p/a252d9f/1/o/osg_KO_039.mp3" },
  { title: "주를 찬양하는 이곳", url: "https://akamd1.jw-cdn.org/sg2/p/0752f8/1/o/osg_KO_040.mp3" },
  { title: "아버지를 신뢰합니다", url: "https://akamd1.jw-cdn.org/sg2/p/fde7bbb/1/o/osg_KO_041.mp3" },
  { title: "난 달라져 갈 거야", url: "https://akamd1.jw-cdn.org/sg2/p/b02bfa/1/o/osg_KO_042.mp3" },
  { title: "언제나 내 곁에", url: "https://akamd1.jw-cdn.org/sg2/p/cda6b3/1/o/osg_KO_043.mp3" },
  { title: "형제 사랑", url: "https://akamd1.jw-cdn.org/sg2/p/8b0abb/1/o/osg_KO_044.mp3" },
  { title: "두렵지 않아", url: "https://akamd1.jw-cdn.org/sg2/p/a0b49d/1/o/osg_KO_045.mp3" },
  { title: "진리를 찾아서", url: "https://akamd1.jw-cdn.org/sg2/p/f4370a/1/o/osg_KO_046.mp3" },
  { title: "진정한 친구", url: "https://akamd1.jw-cdn.org/sg2/p/0e62a72/1/o/osg_KO_047.mp3" },
  { title: "내가 있잖아", url: "https://akamd1.jw-cdn.org/sg2/p/2ab5107/1/o/osg_KO_048.mp3" },
  { title: "우리는 하나", url: "https://akamd1.jw-cdn.org/sg2/p/022b0a/1/o/osg_KO_049.mp3" },
  { title: "용기를 주소서", url: "https://akamd1.jw-cdn.org/sg2/p/a53107/1/o/osg_KO_050.mp3" },
  { title: "내 모든 정성", url: "https://akamd1.jw-cdn.org/sg2/p/29be1de/1/o/osg_KO_051.mp3" },
  { title: "내일 염려는 내일로", url: "https://akamd1.jw-cdn.org/sg2/p/1a429d/1/o/osg_KO_052.mp3" },
  { title: "오늘도 그분의 힘으로", url: "https://akamd1.jw-cdn.org/sg2/p/2881521/1/o/osg_KO_053.mp3" },
  { title: "난 정말 감사해", url: "https://akamd1.jw-cdn.org/sg2/p/941f765/1/o/osg_KO_054.mp3" },
  { title: "우리는 한가족이죠", url: "https://akamd1.jw-cdn.org/sg2/p/7fe9b8/1/o/osg_KO_055.mp3" },
  { title: "믿음의 싸움", url: "https://akamd1.jw-cdn.org/sg2/p/beafb5/1/o/osg_KO_056.mp3" },
  { title: "늘 우리 곁엔 여호와", url: "https://akamd1.jw-cdn.org/sg2/p/dc328a/1/o/osg_KO_057.mp3" },
  { title: "낙원을 그리며", url: "https://akamd1.jw-cdn.org/sg2/p/b71cc6/1/o/osg_KO_058.mp3" },
  { title: "당신께 드려요", url: "https://akamd1.jw-cdn.org/sg2/p/733abe/1/o/osg_KO_059.mp3" },
  { title: "결코 없어지지 않는 사랑", url: "https://akamd1.jw-cdn.org/sg2/p/d21f08/1/o/osg_KO_060.mp3" },
  { title: "여호와께 내맡겨 봐", url: "https://akamd1.jw-cdn.org/sg2/p/adccd6/1/o/osg_KO_061.mp3" },
  { title: "아이처럼", url: "https://akamd1.jw-cdn.org/sg2/p/e4f4906/1/o/osg_KO_062.mp3" },
  { title: "그 사랑을 확신해요", url: "https://akamd1.jw-cdn.org/sg2/p/52708d/1/o/osg_KO_063.mp3" },
  { title: "마음으로 용서하도록", url: "https://akamd1.jw-cdn.org/sg2/p/5791233/1/o/osg_KO_064.mp3" },
  { title: "힘차게 달리자", url: "https://akamd1.jw-cdn.org/sg2/p/b4bdea0/1/o/osg_KO_065.mp3" },
  { title: "계속 키워 갈 거야", url: "https://akamd1.jw-cdn.org/sg2/p/5cd1f80e/1/o/osg_KO_066.mp3" },
  { title: "단 한 사람", url: "https://akamd1.jw-cdn.org/sg2/p/803fd4c/1/o/osg_KO_067.mp3" },
  { title: "마음을 지킬게요", url: "https://akamd1.jw-cdn.org/sg2/p/9b94677/1/o/osg_KO_068.mp3" },
  { title: "‘항상 기뻐할래’", url: "https://akamd1.jw-cdn.org/sg2/p/c9ae440/1/o/osg_KO_069.mp3" },
  { title: "하나로 연합된 우리", url: "https://akamd1.jw-cdn.org/sg2/p/71a8b7/1/o/osg_KO_070.mp3" },
  { title: "네 젊음을 여호와 위해", url: "https://akamd1.jw-cdn.org/sg2/p/bd8af6/1/o/osg_KO_071.mp3" },
  { title: "이 기쁨 영원히", url: "https://akamd1.jw-cdn.org/sg2/p/43a1ef/1/o/osg_KO_072.mp3" },
  { title: "보게 될 거예요", url: "https://akamd1.jw-cdn.org/sg2/p/328e371/1/o/osg_KO_073.mp3" },
  { title: "시간을 낼 거야", url: "https://akamd1.jw-cdn.org/sg2/p/7074d5/1/o/osg_KO_074.mp3" },
  { title: "믿음의 눈으로", url: "https://akamd1.jw-cdn.org/sg2/p/0e5b7a0/1/o/osg_KO_075.mp3" },
  { title: "여호와의 가족", url: "https://akamd1.jw-cdn.org/sg2/p/713ec8/1/o/osg_KO_076.mp3" },
  { title: "함께해 강한 우리", url: "https://akamd1.jw-cdn.org/sg2/p/b206a7/1/o/osg_KO_077.mp3" },
  { title: "우리가 누구에게 가겠습니까?", url: "https://akamd1.jw-cdn.org/sg2/p/aab0a5/3/o/osg_KO_078.mp3" },
  { title: "여호와 늘 나와 함께", url: "https://akamd1.jw-cdn.org/sg2/p/1b59931/2/o/osg_KO_079.mp3" },
  { title: "그때처럼 우리 다시", url: "https://akamd1.jw-cdn.org/sg2/p/e9e7f2/2/o/osg_KO_080.mp3" },
  { title: "실수를 딛고서", url: "https://akamd1.jw-cdn.org/sg2/p/d217d6/1/o/osg_KO_081.mp3" },
  { title: "영원한 삶은 지금부터", url: "https://akamd1.jw-cdn.org/sg2/p/990b023/3/o/osg_KO_082.mp3" },
  { title: "마침내 평화! (2022 대회 노래)", url: "https://akamd1.jw-cdn.org/sg2/p/3a0ff53/1/o/osg_KO_083.mp3" },
  { title: "나에게 다가오렴", url: "https://akamd1.jw-cdn.org/sg2/p/4effaf/3/o/osg_KO_084.mp3" },
  { title: '"늦지 않으리!" (2023 대회 노래)', url: "https://akamd1.jw-cdn.org/sg2/p/923dda/1/o/osg_KO_085.mp3" },
  { title: "집으로", url: "https://akamd1.jw-cdn.org/sg2/p/f58288/1/o/osg_KO_086.mp3" },
  { title: '"작은 동전 두 닢"', url: "https://akamd1.jw-cdn.org/sg2/p/8771ed1/3/o/osg_KO_087.mp3" },
  { title: "여호와는 아시죠", url: "https://akamd1.jw-cdn.org/sg2/p/8c417c0/2/o/osg_KO_088.mp3" },
  { title: "한 믿음, 한 마음으로", url: "https://akamd1.jw-cdn.org/sg2/p/8ab4a4/2/o/osg_KO_089.mp3" },
  { title: "물러서지 않으리", url: "https://akamd1.jw-cdn.org/sg2/p/4dd0a3/2/o/osg_KO_090.mp3" },
  { title: "내 믿음이 될 때까지", url: "https://akamd1.jw-cdn.org/sg2/p/21f1a4d/1/o/osg_KO_091.mp3" },
  { title: "강처럼 흐르는 평화", url: "https://akamd1.jw-cdn.org/sg2/p/5deba7/1/o/osg_KO_092.mp3" },
  { title: "지금부터 시작이야", url: "https://akamd1.jw-cdn.org/sg2/p/a917be/1/o/osg_KO_093.mp3" },
  { title: "'좋은 소식!' (2024 대회 노래)", url: "https://akamd1.jw-cdn.org/sg2/p/65fdfc/1/o/osg_KO_094.mp3" },
  { title: "잠시 멈춰 느껴 봐", url: "https://akamd1.jw-cdn.org/sg2/p/7a0f22/2/o/osg_KO_095.mp3" },
  { title: "지금 딱 좋아", url: "https://akamd1.jw-cdn.org/sg2/p/2a6952/1/o/osg_KO_096.mp3" },
  { title: "그날은 늦지 않아", url: "https://akamd1.jw-cdn.org/sg2/p/18cc6b0/1/o/osg_KO_097.mp3" },
  { title: "오늘도 평화롭게", url: "https://akamd1.jw-cdn.org/sg2/p/99fc7e6/1/o/osg_KO_098.mp3" },
  { title: "난 날아오릅니다", url: "https://akamd1.jw-cdn.org/sg2/p/e3e0aa/1/o/osg_KO_099.mp3" },
  { title: "여호와께 영광을!", url: "https://akamd1.jw-cdn.org/sg2/p/0e03f6/1/o/osg_KO_100.mp3" },
  { title: "당신의 손에", url: "https://akamd1.jw-cdn.org/sg2/p/a69ea33/1/o/osg_KO_101.mp3" },
  { title: "사랑이죠", url: "https://akamd1.jw-cdn.org/sg2/p/86bd12/1/o/osg_KO_102.mp3" },
  { title: "당신의 뜻 행하리다 (2025 대회 노래)", url: "https://akamd1.jw-cdn.org/sg2/p/c8b20c7/2/o/osg_KO_103.mp3" },
  { title: "소중한 이 순간", url: "https://akamd1.jw-cdn.org/sg2/p/cbec915/1/o/osg_KO_104.mp3" },
  { title: "마침내 평화! (2022 대회 노래)", url: "https://akamd1.jw-cdn.org/sg2/p/f47911/1/o/osg_KO_583.mp3" },
  { title: '"늦지 않으리!" (2023 대회 노래)', url: "https://akamd1.jw-cdn.org/sg2/p/63f47bc/1/o/osg_KO_585.mp3" },
  { title: "'좋은 소식!' (2024 대회 노래)", url: "https://akamd1.jw-cdn.org/sg2/p/7e6674/1/o/osg_KO_594.mp3" },
  { title: "그날은 늦지 않아", url: "https://akamd1.jw-cdn.org/sg2/p/948ace/1/o/osg_KO_597.mp3" },
  { title: "여호와께 영광을!", url: "https://akamd1.jw-cdn.org/sg2/p/1f247de/1/o/osg_KO_600.mp3" },
  { title: "당신의 손에", url: "https://akamd1.jw-cdn.org/sg2/p/30ab2a/1/o/osg_KO_601.mp3" },
  { title: "사랑이죠", url: "https://akamd1.jw-cdn.org/sg2/p/1a19df/1/o/osg_KO_602.mp3" },
  { title: "소중한 이 순간", url: "https://akamd1.jw-cdn.org/sg2/p/9246cb/1/o/osg_KO_604.mp3" }
 ];

 let current = 0;
 let repeatMode = 0; // 0: no repeat, 1: repeat all, 2: repeat one
 let shuffle = false;
 const audio = document.getElementById('audio');
 const playBtn = document.getElementById('play');
 const nextBtn = document.getElementById('next');
 const prevBtn = document.getElementById('prev');
 const repeatBtn = document.getElementById('repeat');
 const shuffleBtn = document.getElementById('shuffle');
 const playlistEl = document.getElementById('playlist');
 const currentTitleEl = document.getElementById('current-title'); // 현재 곡 제목 요소를 가져옵니다.

 // 초기 로드 시 "재생 중인 곡 없음"을 설정합니다.
 currentTitleEl.textContent = "재생 중인 곡 없음";


 function load(index) {
  const song = playlist[index];
  audio.src = song.url;
  currentTitleEl.textContent = song.title; // 현재 곡 제목 업데이트
  document.querySelectorAll('.playlist li').forEach(li => li.classList.remove('active'));
  if (playlistEl.children[index]) {
    playlistEl.children[index].classList.add('active');
  }
 }

 function play() {
  audio.play();
  playBtn.textContent = '⏸️';
  // 재생 시작 시 현재 곡 제목으로 업데이트 (선택 버튼을 눌러 재생할 때)
  if (audio.src) { // audio.src가 비어있지 않다면 (즉, 곡이 로드되었다면)
      const currentSongIndex = playlist.findIndex(song => audio.src.includes(song.url));
      if (currentSongIndex !== -1) {
          currentTitleEl.textContent = playlist[currentSongIndex].title;
      }
  }
 }

 function pause() {
  audio.pause();
  playBtn.textContent = '▶️';
 }

 playBtn.onclick = () => {
  if (audio.paused) {
    // 오디오가 일시 정지 상태이고, 아직 아무 곡도 로드되지 않았다면 (초기 상태)
    if (!audio.src || audio.src === window.location.href) { // src가 비었거나 현재 페이지 URL일 경우
      load(current); // 첫 곡을 로드
    }
    play();
  }
  else {
    pause();
  }
 };

 nextBtn.onclick = () => {
  if (shuffle) current = Math.floor(Math.random() * playlist.length);
  else current = (current + 1) % playlist.length;
  load(current);
  play();
 };

 prevBtn.onclick = () => {
  if (shuffle) current = Math.floor(Math.random() * playlist.length);
  else current = (current - 1 + playlist.length) % playlist.length;
  load(current);
  play();
 };

 repeatBtn.onclick = () => {
  repeatMode = (repeatMode + 1) % 3;
  repeatBtn.textContent = ['🔁', '🔁 All', '🔂'][repeatMode];
 };

 shuffleBtn.onclick = () => {
  shuffle = !shuffle;
  shuffleBtn.style.opacity = shuffle ? '1' : '.5';
 };

 audio.onended = () => {
  if (repeatMode === 2) { // Repeat one
    load(current);
    play();
  } else if (shuffle) {
    current = Math.floor(Math.random() * playlist.length);
    load(current);
    play();
  } else if (repeatMode === 1 || current < playlist.length - 1) { // Repeat all or not last song
    current = (current + 1) % playlist.length;
    load(current);
    play();
  }
  else { // No repeat, last song ended - 제목을 "재생 중인 곡 없음"으로 되돌립니다.
    pause();
    currentTitleEl.textContent = "재생 중인 곡 없음";
    // 활성 클래스도 제거하여 선택된 곡이 없음을 표시
    document.querySelectorAll('.playlist li').forEach(li => li.classList.remove('active'));
  }
 };

 playlist.forEach((song, i) => {
  const li = document.createElement('li');
  li.textContent = song.title;
  li.onclick = () => {
   current = i;
   load(current); // 클릭 시 곡 로드 및 제목 업데이트
   play();
  };
  playlistEl.appendChild(li);
 });

 // 초기 로드 시 어떤 곡도 자동 재생하지 않고, "재생 중인 곡 없음" 상태를 유지합니다.
 // load(current); // 이 줄은 제거하거나 주석 처리해야 합니다.

}); // DOMContentLoaded 닫는 부분
