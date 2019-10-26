/* 
  Copyright 2019 Cristi Tomoiaga

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

function getProjectDetails(){
  let projectNavTitle = document.getElementById('projectDetailNavTitle');
  let projectBody = document.getElementById('projectDetailBody');
  let projectImages = document.getElementById('projectDetailImages');
  let projectTitle = document.getElementById('projectDetailTitle');
  fetch('/assets/data/projects.json')
  .then((res) => res.json())
  .then((json) => {
    let params = new URLSearchParams(window.location.search);
    let projectId = params.get('id');
    let project = json.data.projects.find((el) => el.id == projectId);
    let images = "";
    if(project != undefined){
      projectNavTitle.innerHTML = `
        <img src="/logo_thumbnail.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Detalii Proiect: ${project.title}
      `;
      projectTitle.innerHTML = `
        <span class="h6">${project.title} - ${project.date}</span>
      `;
      projectBody.innerHTML = project.desc;
      if(project.images.length != 0){
        images += `
          <div class="carousel-item active">
            <img class="d-block w-100" src="${project.thumbnail_src}">
          </div>
        `;
        project.images.forEach(image => {
          images += `
            <div class="carousel-item">
              <img class="d-block w-100" src="${image.src}">
            </div>
          `;
        });
        projectImages.innerHTML = `
          <div id="carouselProject" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              ${images}
            </div>
            <a class="carousel-control-prev" href="#carouselProject" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselProject" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        `;
      } else projectImages.innerHTML = 'Nu exista imagini disponibile pentru acest proiect';
      hljs.initHighlightingOnLoad();
    } else {
      window.location.replace("/404.html");
    }
  })
  .catch((err) => console.log(err));
}

getProjectDetails();