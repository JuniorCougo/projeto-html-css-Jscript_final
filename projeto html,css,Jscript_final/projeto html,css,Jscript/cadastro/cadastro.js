
document.getElementById('photo').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('preview-photo').setAttribute('src', event.target.result);
            document.getElementById('preview-photo').style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});
