  // Get elements
  const canvas = document.getElementById('drawing-canvas');
  const ctx = canvas.getContext('2d');
  const colorPicker = document.getElementById('color-picker');
  const brushSize = document.getElementById('brush-size');
  const clearBtn = document.getElementById('clear-btn');
  
  // Set canvas size
  canvas.width = 600;
  canvas.height = 400;
  
  // Drawing variables
  let isDrawing = false;
  let currentColor = '#000000';
  let currentSize = 5;
  
  // Set initial brush color and size
  colorPicker.value = currentColor;
  brushSize.value = currentSize;
  
  // Event Listeners
  colorPicker.addEventListener('input', (e) => {
      currentColor = e.target.value;
  });
  
  brushSize.addEventListener('input', (e) => {
      currentSize = e.target.value;
  });
  
  clearBtn.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  
  // Drawing functions
  canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
  });
  
  canvas.addEventListener('mousemove', (e) => {
      if (isDrawing) {
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.strokeStyle = currentColor;
          ctx.lineWidth = currentSize;
          ctx.lineCap = 'round';
          ctx.stroke();
      }
  });
  
  canvas.addEventListener('mouseup', () => {
      isDrawing = false;
      ctx.closePath();
  });
  
  canvas.addEventListener('mouseout', () => {
      isDrawing = false;
      ctx.closePath();
  });
   