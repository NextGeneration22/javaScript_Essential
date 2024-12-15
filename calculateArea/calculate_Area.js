function calculateArea(){
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let area = width*length;
     document.getElementById('result').innerHTML = `The area of the rectangle is: ${area}`;
}
