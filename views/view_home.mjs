const view_home = function()
{
    return`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <style>
            html {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
    
            }
    
            body {
                width: 100%;
                height: 100%;
                padding: 0;
                border: 0;
                margin: 0;
            }
    
            header {
                width: 100%;
                height: 5em;
                padding: 0;
                border: 0;
                margin: 0;
                background-color: darkred;
                display: grid;
                grid-template-colums: auto auto auto;
                grid-template-rows: auto;
                place-items: center center;
                place-content: center center;


                gap: 1em;
            }
    
            main {
                width: 100%;
                height: auto;
                padding: 0;
                border: 0;
                margin: 0;
                background-color: darkblue;
            }
    
    
            footer {
                width: 100%;
                height: 2em;
                padding: 0;
                border: 0;
                margin: 0;
                background-color: darkgreen;
                display: grid;
                grid-template-colums: auto ;
                grid-template-rows: auto;
                place-items: center center;
                place-content: center center;

            }
        </style>
    
    </head>
    
    <body>
        <header>
            <a>Pradinis puslapis</a>
            <a href="/apartments">Vadybininko zona</a>
            <a>Kliento zona</a>
        </header>
    
        <main>
        <span>labas</span>
        </main>
    
        <footer>
            <span>2023-02-07 Vardenis Pavardenis </span>
        </footer>
    </body>
    
    </html>`
}

export default view_home