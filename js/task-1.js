const categories = document.querySelectorAll("#categories h2");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {

  const elements = category.nextElementSibling.querySelectorAll('li');

  console.log(`Category: ${category.textContent}`);  
  console.log(`Elements: ${elements.length}`);
});

categories.forEach(category => {

  const elements = category.nextElementSibling.querySelectorAll('li');

  console.log(`Category: ${category.textContent}`);  
  console.log(`Elements: ${elements.length}`);
});