const RENDER_BOUNDARY = 1.4;

function marchingSquaresRenderer(canvas, ctx, f, axisStepSize) {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;

  ctx.clearRect(0, 0, w, h);

  const cutoffPlane = new THREE.Plane(
    new THREE.Vector3(0, 0, -1),
    RENDER_BOUNDARY
  );

  let target = new THREE.Vector3();

  for (let x = 0; x < 1; x += axisStepSize) {
    for (let y = 0; y < 1; y += axisStepSize) {
      const positions = [
        new THREE.Vector3(x, y, 0),
        new THREE.Vector3(x + axisStepSize, y, 0),
        new THREE.Vector3(x + axisStepSize, y + axisStepSize, 0),
        new THREE.Vector3(x, y + axisStepSize, 0)
      ];

      for (let position of positions) {
        position.z = f.calc(position);
      }

      const polygons = [
        [positions[0], positions[1], positions[2]],
        [positions[2], positions[3], positions[0]]
      ];

      for (let polygon of polygons) {
        let intersections = [];

        for (let i = 0; i < 3; i++) {
          const line = new THREE.Line3(polygon[i], polygon[(i + 1) % 3]);
          let res = cutoffPlane.intersectLine(line, target);

          if (res !== undefined) {
            intersections.push(res.clone());
          }
        }

        if (intersections.length === 2) {
          ctx.beginPath();
          ctx.moveTo(intersections[0].x * w, intersections[0].y * h);
          ctx.lineTo(intersections[1].x * w, intersections[1].y * h);
          ctx.stroke();
        }
      }
    }
  }
}
