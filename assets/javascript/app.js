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

function getData(){
  let listCourses = document.getElementById('listCourses');
  let content = "";
  fetch("lista.json")
  .then((res) => res.json())
  .then((json) => {
    json.data.forEach(course => {
      let color = '';
      let topics = '';
      if(course.topic == "P"){
         color = 'primary';
         topics = 'Programare'
      } else if(course.topic == "E"){
         color = 'success';
         topics = 'Electronica';
      } else {
         color = 'secondary';
         topics = 'Mixt';
      }
      content += `
        <a href="/detailcourse.html?id=${course.id}" class="list-group-item list-group-item-action">
          <div class="d-flex justify-content-between align-items-center">
            <h5>${course.title}</h5>
            <span class="badge badge-${color} badge-pill">${topics}</span>
          </div>
          <small class="mb-1">${course.date}</small>
        </a>     
      `;
    });
    listCourses.innerHTML = content;
  })
  .catch((err) => console.log(err));

  getArticlesMainPage();
  getProjectsMainPage();
}

function getArticlesMainPage(){
  let articlesList = document.getElementById("listArticles");
  let content = "";
  let articleArray = [];
  fetch("articles.json")
  .then(res => res.json())
  .then(json => {
    if(json.data.last_id < 3) articleArray = json.data.articles;
    else articleArray = json.data.articles.filter(article => article.id > json.data.last_id - 3);
    articleArray.forEach(article => {
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

function getProjectsMainPage(){
  let projectsList = document.getElementById("listProjects");
  let content = "";
  let projectArray = [];
  fetch("projects.json")
  .then(res => res.json())
  .then(json => {
    if(json.data.last_id < 3) projectArray = json.data.projects;
    else projectArray = json.data.projects.filter(project => project.id > json.data.last_id - 3);
    projectArray.forEach(project => {
      content += `
        <a href="/detailproject.html?id=${project.id}" class="list-group-item list-group-item-action">
          <div class="d-flex justify-content-between align-items-center">
            <h5>${project.title}</h5>
            <small class="mb-1">${project.date}</small>
          </div>
          <p>${project.short_desc}</p>
        </a>
      `;
    });
    projectsList.innerHTML = content;
  })
  .catch(err => console.log(err));
}

getData();