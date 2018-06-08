/* 
  Copyright 2018 Cristi Tomoiaga

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

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