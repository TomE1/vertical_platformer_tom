const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'grey';
c.fillRect(10, 10, canvas.width, canvas.height);

c.fillStyle = 'pink';
c.fillRect(100, 200, 100, 100);

c.fillStyle = 'blue';
c.fillRect(200, 100, 100, 100);
