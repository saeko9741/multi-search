function onButtonClick() {
  var searched_text = document.getElementById("search_text").value;
  
  window.open(`https://www.google.com/search?q=${searched_text} 意味`);
  window.open(`https://www.google.com/search?q=${searched_text} 語源`);
  window.open(`https://www.google.com/search?q=${searched_text}`); 
};