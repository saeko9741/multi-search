function ButtonClick() {
  var searched_text = document.getElementById("search_text").value;

  if (searched_text === '' || searched_text.length < 2){
    return false;
  }else {
    window.open(`https://ejje.weblio.jp/content/${searched_text}`);
    window.open(`https://www.google.com/search?q=${searched_text} 語源`);
    window.open(`https://www.google.com/search?q=${searched_text}&tbm=isch`); 
    window.open(`https://dictionary.cambridge.org/ja/dictionary/english/${searched_text}`);  
  };
};
