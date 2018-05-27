// Cod principal

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
}

getData();