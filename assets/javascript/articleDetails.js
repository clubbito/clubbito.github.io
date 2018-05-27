
function getArticleDetails(){
  let articleNavTitle = document.getElementById('articleDetailNavTitle');
  let articleBody = document.getElementById('articleDetailBody');
  let articleLinks = document.getElementById('articleDetailLinks');
  let articleTitle = document.getElementById('articleDetailTitle');
  fetch('articles.json')
  .then((res) => res.json())
  .then((json) => {
    let params = new URLSearchParams(window.location.search);
    let articleId = params.get('id');
    let article = json.data.articles.find((el) => el.id == articleId);
    let links = "";
    if(article != undefined){
      articleNavTitle.innerHTML = `
        <img src="logo.png" width="50px" class="d-inline-block">
        Detalii Articol: ${article.title}
      `;
      if(article.urls.length != 0){
        article.urls.forEach(url => {
          links += `
            <a href="${url.link}" class="list-group-item list-group-item-action">${url.name}</a>
          `;
        });
        articleLinks.innerHTML = links;
      } else articleLinks.innerHTML = 'Nu exista descarcari disponibile pentru acest articol';
      articleTitle.innerHTML = `
        <span class="h6">${article.title} - ${article.date}</span>
      `;
      articleBody.innerHTML = article.desc;
      hljs.initHighlightingOnLoad();
    } else {
      window.location.replace("/404.html");
    }
  })
  .catch((err) => console.log(err));
}

getArticleDetails();