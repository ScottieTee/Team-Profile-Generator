const generateHTML = (answers) => {
    return `<!DOCTYPE html>
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

        <main> ${generateHTML(team)} </main>
    
    </body>
    </html>`
}