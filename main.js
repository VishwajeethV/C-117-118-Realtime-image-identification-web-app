function setup() {
  canvas = createCanvas(350,280);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  }

  function draw() {
      image(video,0,0,350,280);
  }