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

function getProjects(){
  let projectsList = document.getElementById("projects");
  let content = "";
  fetch("projects.json")
  .then(res => res.json())
  .then(json => {
    json.data.projects.forEach(project => {
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

getProjects();