
function getArticles(){
  let articlesList = document.getElementById("articles");
  let content = "";
  fetch("articles.json")
  .then(res => res.json())
  .then(json => {
    json.data.articles.forEach(article => {
      content += `
        <a href="/detailarticle.html?id=${article.id}" class="list-group-item list-group-item-action">
          <div class="d-flex justify-content-between align-items-center">
            <h5>${article.title}</h5>
            <small class="mb-1">${article.date}</small>
          </div>
          <p>${article.short_desc}</p>
          <small>In ${article.topic}</small>
        </a>
      `;
    });
    articlesList.innerHTML = content;
  })
  .catch(err => console.log(err));
}

getArticles();