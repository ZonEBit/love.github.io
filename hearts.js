function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';

  const size = Math.random() * 20 + 10; // 10px ~ 30px
  heart.style.fontSize = size + 'px';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '-30px';
  heart.style.color = getRandomColor();
  heart.style.opacity = Math.random() * 0.6 + 0.4;

  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

function getRandomColor() {
  const colors = ['#FF69B4', '#FF1493', '#DC143C', '#FF4500', '#FF8C00', '#FF00FF', '#FFB6C1', '#FFD700', '#FF6347'];
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createHeart, 120);
