const categories = document.querySelectorAll('categories');

const items = categoriesList.querySelectorAll('.item');

console.log(`Кількість категорій: ${items.length}`);


console.log(`Кількість категорій: ${items.length}`);


items.forEach(item => {
  
  const title = item.querySelector('h2').textContent;
  
  
  const elementsCount = item.querySelectorAll('ul > li').length;
  
  
  console.log(`Категорія: ${title}, Кількість елементів: ${elementsCount}`);
});