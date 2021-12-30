var canvas = document.getElementById('text_canvas');

document.addEventListener("DOMContentLoaded", () => {
    drawTshirt();
});

function drawTshirt() {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var canvas_bg = "img/t-shirt.png";

    var background = new Image();

    background.onload = function(){
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        drawText(ctx);
    }
    background.src = canvas_bg;
}

function drawText(ctx) {
    var font = document.getElementById("select_font").value;
    var text = document.getElementById('input_text').value;
    var colour1 = document.getElementById('input_col1').value;
    var colour2 = document.getElementById('input_col2').value;
    
    var textWidth = ctx.measureText(text).width;
    var gradient=ctx.createLinearGradient(0,0,textWidth,0);
    gradient.addColorStop("0",colour1);
    gradient.addColorStop("1",colour2);

    ctx.fillStyle=gradient;
    ctx.font = "30pt "+String(font);
    ctx.fillText(text, 20, 50);
}
