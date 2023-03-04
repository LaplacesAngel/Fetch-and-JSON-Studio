window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(response);
            //json.sort( function (a, b) {
              //  return b.hoursInSpace - a.hoursInSpace;
            //});
            json.sort((a, b) => (b.hoursInSpace - a.hoursInSpace)); //sort by increasing number of hours
            let container = document.getElementById("container");
            let counter = document.getElementById("count")
            let astronauts = '';
            let count = 0
            ;
            let skills = null;
            for (let astronaut of json) {
                count += 1;
                skills = astronaut.skills.join(', ')
                astronauts += `<div class="astronaut">
                <div class="bio">
                   <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                   <ul>
                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
                      <li>Active: ${astronaut.active}</li>
                      <li>Skills: ${skills}</li>
                   </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
             </div>`;
            };
            container.innerHTML = astronauts;
            counter.innerHTML = `Astro count: ${count}`;
        });
    });
});