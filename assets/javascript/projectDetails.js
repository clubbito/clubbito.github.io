
function getProjectDetails(){
  let projectNavTitle = document.getElementById('projectDetailNavTitle');
  let projectBody = document.getElementById('projectDetailBody');
  let projectImages = document.getElementById('projectDetailImages');
  let projectTitle = document.getElementById('projectDetailTitle');
  fetch('projects.json')
  .then((res) => res.json())
  .then((json) => {
    let params = new URLSearchParams(window.location.search);
    let projectId = params.get('id');
    let project = json.data.projects.find((el) => el.id == projectId);
    let images = "";
    if(project != undefined){
      projectNavTitle.innerHTML = `
        <img src="logo.png" width="50px" class="d-inline-block">
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
            ${images}
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