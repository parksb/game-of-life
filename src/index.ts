const cvs = document.createElement('canvas');
cvs.width = 300;
cvs.height = 300;

const ctx = cvs.getContext('2d')!;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

document.body.appendChild(cvs);
