let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');
let product = document.querySelector('.product-container .product');





function display()
{
  let name = product.getAttribute('data-name');
  let target =  previewBox.getAttribute('data-target');

alert(target);
}

previewBox.forEach(close =>
{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});