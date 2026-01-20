const categories = document.querySelector('#categories'); 
const items = categories.querySelectorAll('li.item');
console.log('Number of categories:', items.length);

items.forEach((item) => {
const title = item.querySelector('h2').textContent; 
const elCount  = item.querySelectorAll('ul li').length; 

    console.log('Category:', title);
    console.log('Elements:', elCount); 
});
