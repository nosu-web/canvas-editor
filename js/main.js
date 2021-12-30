function draw_text() {
    var canvas = document.getElementById('text_canvas');
    var ctx = canvas.getContext('2d')
    var font = document.getElementById("select_font").value;
    var text = document.getElementById('input_text').value
    var colour1 = document.getElementById('input_col1').value
    var colour2 = document.getElementById('input_col2').value
    console.log(text, ' ', colour1, ' ', colour2, ' ', font)
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var textWidth = ctx.measureText(text).width
    var gradient=ctx.createLinearGradient(0,0,textWidth,0);
    gradient.addColorStop("0",colour1);
    gradient.addColorStop("1",colour2);

    ctx.fillStyle=gradient;
    ctx.font = "30pt "+String(font);
    ctx.fillText(text, 20, 50)
}
