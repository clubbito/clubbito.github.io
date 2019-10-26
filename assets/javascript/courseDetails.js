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

function getCourseDetails(){
  let courseNavTitle = document.getElementById('courseDetailNavTitle');
  let courseBody = document.getElementById('courseDetailBody');
  let courseLinks = document.getElementById('courseDetailLinks');
  let courseTitle = document.getElementById('courseDetailTitle');
  fetch('/assets/data/lista.json')
  .then((res) => res.json())
  .then((json) => {
    let params = new URLSearchParams(window.location.search);
    let courseId = params.get('id');
    let course = json.data.find((el) => el.id == courseId);
    let linkuri = '';
    if(course != undefined){
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
      courseNavTitle.innerHTML = `
        <img src="/assets/images/logo_thumbnail.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Detalii curs: ${course.title}
      `;
      courseBody.innerHTML = `${course.desc}`;
      if(course.urls.length != 0){
        course.urls.forEach(url => {
          linkuri += `
            <a href="${url.link}" class="list-group-item list-group-item-action">${url.name}</a>
          `;
        });
        courseLinks.innerHTML = linkuri;
      } else courseLinks.innerHTML = 'Nu exista descarcari disponibile pentru acest curs'
      courseTitle.innerHTML = `
        <span class="h6">${course.title} - ${course.date}</span>
        <span class="badge badge-${color} badge-pill">${topics}</span> 
      `;
      hljs.initHighlightingOnLoad();
    } else {
      window.location.replace("/404.html");
    }
  })
  .catch((err) => console.log(err));
}

getCourseDetails();