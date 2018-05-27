
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