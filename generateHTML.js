const generateTeam = (team) => {
    console.log(team);
    //empty array to push html elements and loop team data
    const html = [];
    //make functions for each employee type

    const generateManager = (manager) => {
    console.log(manager);
    let managerHTML = `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div> `;
        html.push(managerHTML);
}

const generateEngineer = (engineer) => {
    console.log(engineer);
    let engineerHTML = `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fas fa-mug-hot"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.username}">${engineer.username}</a></li>
            </ul>
        </div>`;
        html.push(engineerHTML);
}
const generateIntern = (intern) => {
    console.log(intern);
    let internHTML = `
    <div class="card" style="width: 18rem;">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-mug-hot"></i>Engineer</div>
           <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>`;
        html.push(internHTML);
}
//loop through the employees 
for (let i=0; i<team.length;i++) {
    if(team[i].getRole() === "Manager") {
        generateManager(team[i]);
    }
    if(team[i].getRole() === "Engineer") {
        generateEngineer(team[i]);
    }
    if(team[i].getRole() === "Intern") {
        generateIntern(team[i]);
    }
}

return html.join('');
}

//export to make the whole page 
module.exports = team => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
            <h1>My Team</h1>
            </header>
    
            <main> ${generateTeam(team)} </main>
        
        </body>
        </html>`;
    }








//const generateHTML = (answers) => {
  //  return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.">
//         <title>Team Profile Generator</title>
//     </head>
//     <body>
//         <header>
//         <h1>My Team</h1>
//         </header>

//         <main> ${generateHTML(team)} </main>
    
//     </body>
//     </html>`
// }