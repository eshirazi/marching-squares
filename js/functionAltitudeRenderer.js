function functionAltitudeRenderer(canvas, ctx, f, axisStepSize) {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;

  for (let x = 0; x < 1; x += axisStepSize) {
    for (let y = 0; y < 1; y += axisStepSize) {
      const channel = Math.floor(f.calc(new THREE.Vector2(x, y)) * 130);
      ctx.fillStyle = `rgb(${channel}, ${channel}, ${channel})`;
      ctx.fillRect(
        x * w,
        y * h,
        (x + axisStepSize) * w,
        (y + axisStepSize) * h
      );
    }
  }
}
