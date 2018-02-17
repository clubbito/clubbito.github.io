//Detalii

function getCourseDetails(){
  let title = document.getElementById('pageTitle');
  let content = document.getElementById('content');
  let links = document.getElementById('links');
  let info = document.getElementById('info');
  fetch('lista.json')
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
      title.innerHTML = `
        <img src="logo.png" width="50px" class="d-inline-block">
        Detalii curs: ${course.title}
      `;
      content.innerHTML = `${course.desc}`;
      if(course.urls.length != 0){
        course.urls.forEach(url => {
          linkuri += `
            <a href="${url.link}" class="list-group-item list-group-item-action">${url.name}</a>
          `;
        });
        links.innerHTML = linkuri;
      } else links.innerHTML = 'Nu exista descarcari disponibile pentru acest curs'
      info.innerHTML = `
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