function uploadImage() {
    const imageInput = document.getElementById('image');
    const result = document.getElementById('result');
  
    if (imageInput.files.length > 0) {
      const file = imageInput.files[0];
      const reader = new FileReader();
  
      reader.addEventListener('load', () => {
        const base64 = reader.result.split(',')[1];
        result.textContent = `Base64-encoded string: ${base64}`;
      });
  
      reader.readAsDataURL(file);
    } else {
      result.textContent = 'Please select an image';
    }
  }
  
function toText(){
    const text = document.getElementById('base64');
    const base64 = text.value 
    const img = document.createElement('img');
    img.src = `data:image/png;base64,${base64}`;
    const imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(img);

}