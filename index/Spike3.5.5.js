 
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const table = document.querySelector('.table');
        const holes = document.querySelectorAll('.hole');
        const draggable = document.getElementById('draggable');

        const tableWidthInput = document.getElementById('table-width');
        const tableWidthValue = document.getElementById('table-width-value');
        const tableHeightInput = document.getElementById('table-height');
        const tableHeightValue = document.getElementById('table-height-value');
        const holeRadiusInput = document.getElementById('hole-radius');
        const holeRadiusValue = document.getElementById('hole-radius-value');

        function updateTableSize() {
            const width = tableWidthInput.value;
            const height = tableHeightInput.value;
            tableWidthValue.textContent = width;
            tableHeightValue.textContent = height;
            table.style.width = width + 'px';
            table.style.height = height + 'px';
            canvas.width = width;
            canvas.height = height;
            updateFixedPoints();
            drawDots();
        }

        function updateHoleSize() {
            const radius = holeRadiusInput.value;
            holeRadiusValue.textContent = radius;
            holes.forEach(hole => {
                hole.style.width = (2 * radius) + 'px';
                hole.style.height = (2 * radius) + 'px';
                hole.style.borderRadius = radius + 'px';
            });
            updateFixedPoints();
            drawDots();
        }

        function updateFixedPoints() {
            fixedPoints[0] = { x: parseInt(holes[0].style.width) / 2, y: parseInt(holes[0].style.height) / 2 };
            fixedPoints[1] = { x: canvas.width - parseInt(holes[2].style.width) / 2, y: parseInt(holes[1].style.height) / 2 };
            fixedPoints[2] = { x: canvas.width / 2, y: parseInt(holes[1].style.height) / 2 };
            fixedPoints[3] = { x: parseInt(holes[3].style.width) / 2, y: canvas.height - parseInt(holes[3].style.height) / 2 };
            fixedPoints[4] = { x: canvas.width - parseInt(holes[4].style.width) / 2, y: canvas.height - parseInt(holes[4].style.height) / 2 };
            fixedPoints[5] = { x: canvas.width / 2, y: canvas.height - parseInt(holes[5].style.height) / 2 };
        }

        tableWidthInput.addEventListener('input', updateTableSize);
        tableHeightInput.addEventListener('input', updateTableSize);
        holeRadiusInput.addEventListener('input', updateHoleSize);

        const fixedPoints = [
            { x: parseInt(holes[0].style.width) / 2, y: parseInt(holes[0].style.height) / 2 },
            { x: canvas.width - parseInt(holes[2].style.width) / 2, y: parseInt(holes[1].style.height) / 2 },
            { x: canvas.width / 2, y: parseInt(holes[1].style.height) / 2 },
            { x: parseInt(holes[3].style.width) / 2, y: canvas.height - parseInt(holes[3].style.height) / 2 },
            { x: canvas.width - parseInt(holes[4].style.width) / 2, y: canvas.height - parseInt(holes[4].style.height) / 2 },
            { x: canvas.width / 2, y: canvas.height - parseInt(holes[5].style.height) / 2 }
        ];

        const img = new Image();
        img.src = 'https://cdn.jsdelivr.net/gh/tiptipios/ios@main/tiptip.jpg';

        let randomPoint = { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
        let movingPoint = { x: canvas.width / 2, y: canvas.height / 2 };
        let isDragging = false;
        let isDraggableDragging = false;

        const imageSize = 30;

        function drawDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'black';
            fixedPoints.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.drawImage(img, movingPoint.x - imageSize / 2, movingPoint.y - imageSize / 2, imageSize, imageSize);

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            fixedPoints.forEach(point => {
                ctx.beginPath();
                ctx.moveTo(point.x, point.y);
                ctx.lineTo(movingPoint.x, movingPoint.y);
                ctx.stroke();
            });

            // Draw line from image to draggable point
            ctx.strokeStyle = 'blue';
            ctx.beginPath();
            ctx.moveTo(movingPoint.x, movingPoint.y);
            ctx.lineTo(draggable.offsetLeft + draggable.offsetWidth / 2, draggable.offsetTop + draggable.offsetHeight / 2);
            ctx.stroke();

            drawReflections();
        }

        function drawReflections() {
            const startX = draggable.offsetLeft + draggable.offsetWidth / 2;
            const startY = draggable.offsetTop + draggable.offsetHeight / 2;
        
            // Clear previous reflections
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 2;
        
            // Calculate the angle of the incoming ray
            const angle = Math.atan2(startY - movingPoint.y, startX - movingPoint.x);
        
            // Draw reflections for each side of the canvas
            const reflections = [
                { x: 0, y: 0, angle: angle }, // Left edge
                { x: canvas.width, y: 0, angle: angle }, // Right edge
                { x: 0, y: canvas.height, angle: angle }, // Bottom edge
                { x: canvas.width, y: canvas.height, angle: angle } // Top edge
            ];
        
            reflections.forEach(reflection => {
                let reflectedAngle = angle;
        
                if (reflection.x === 0) { 
                    reflectedAngle = Math.PI - angle; // Invert the angle horizontally
                }
                // Adjust angle for reflection at the right edge
                else if (reflection.x === canvas.width) { // Right edge
                    reflectedAngle = -angle; // Invert the angle horizontally
                }
                // Adjust angle for reflection at the top edge
                else if (reflection.y === 0) { // Top edge
                    reflectedAngle = -angle; // Invert the angle vertically
                }
                // Adjust angle for reflection at the bottom edge
                else if (reflection.y === canvas.height) { // Bottom edge
                    reflectedAngle = Math.PI - angle; // Invert the angle vertically
                }
                
                const length = canvas.width * 2;
                const endXReflection = startX + length * Math.cos(reflectedAngle);
                const endYReflection = startY + length * Math.sin(reflectedAngle);
                
                ctx.beginPath();
                ctx.moveTo(startX, startY); // Start from the draggable point
                ctx.lineTo(endXReflection, endYReflection); // Draw reflection
                ctx.stroke();
            });
        }
            

        
        function onTouchStart(e) {
            const rect = canvas.getBoundingClientRect();
            const x = e.touches[0].clientX - rect.left;
            const y = e.touches[0].clientY - rect.top;
            
            if (x >= draggable.offsetLeft && x <= draggable.offsetLeft + draggable.offsetWidth &&
                y >= draggable.offsetTop && y <= draggable.offsetTop + draggable.offsetHeight) {
                isDraggableDragging = true;
            } else {
                isDragging = true;
                movingPoint = { x, y };
            }
        }
        
        function onTouchMove(e) {
            if (isDragging) {
                const rect = canvas.getBoundingClientRect();
                movingPoint = {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
                drawDots();
            }
        
            if (isDraggableDragging) {
                const rect = canvas.getBoundingClientRect();
                const tableRect = table.getBoundingClientRect();
                let newLeft = e.touches[0].clientX - rect.left - draggable.offsetWidth / 2;
                let newTop = e.touches[0].clientY - rect.top - draggable.offsetHeight / 2;
        
                // Giới hạn di chuyển trong phần tử table
                newLeft = Math.max(0, Math.min(newLeft, tableRect.width - draggable.offsetWidth));
                newTop = Math.max(0, Math.min(newTop, tableRect.height - draggable.offsetHeight));
        
                draggable.style.left = newLeft + 'px';
                draggable.style.top = newTop + 'px';
                drawDots();
            }
        }
        
        function onTouchEnd() {
            isDragging = false;
            isDraggableDragging = false;
        }
        
        // Thêm các sự kiện chạm cho điện thoại
        canvas.addEventListener('touchstart', onTouchStart);
        canvas.addEventListener('touchmove', onTouchMove);
        canvas.addEventListener('touchend', onTouchEnd);
        updateTableSize();
        updateHoleSize();
  
        document.getElementById('toggle-table').addEventListener('click', function() {
            const table = document.getElementById('table');
            if (table.style.display === 'none') {
                table.style.display = 'block';
                this.textContent = 'Ẩn Bảng';
            } else {
                table.style.display = 'none';
                this.textContent = 'Hiện Bảng';
            }
        });
