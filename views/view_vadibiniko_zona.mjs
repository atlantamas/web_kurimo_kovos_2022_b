const view_vadibiniko_zona = function(param_arr_butai)
{

const butu_sarasa = ""

for(var i=0;i<param_arr_butai.length; i++)
{
    var butas = param_arr_butai[i]

    const div_butas = `<div>
    <span>area</span>
    <span>${butas.area}</span>
    <span>bathrooms</span>
    <span>${butas.bathrooms}</span>
    <span>bedrooms</span>
    <span>${butas.bedrooms}</span>
    <span>car_spaces</span>
    <span>${butas.car_spaces}</span>
    <span>date_seel_from</span>
    <span>${butas.date_seel_from}</span>
    <span>living_spaces</span>
    <span>${butas.living_spaces}</span>
    <span>location</span>
    <span>${butas.location}</span>
    <span>name</span>
    <span>${butas.name}</span>
    <span>price</span>
    <span>${butas.price}</span>

    </div>`

    butu_sarasa += div_butas
}
    
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
                background-color: rgb(150,100,100);
                display: grid;
                grid-template-columns: auto auto auto;
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
                background-color: rgb(100,150,100);
                
            }

            form{
                width: 100%;
                height: auto;
                padding: 0;
                border: 0;
                margin: 0;
                display: grid;
                grid-template-columns: auto ;
                grid-template-rows: auto;
                place-items: center center;
                place-content: center center;
            }
    
            footer {
                width: 100%;
                height: 2em;
                padding: 0;
                border: 0;
                margin: 0;
                background-color: rgb(100,100,150);
                display: grid;
                grid-template-columns: auto ;
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
        
        <span> 
        <header>
        <a>Pradinis puslapis</a>
        <a href="/apartments">Vadybininko zona</a>
        <a>Kliento zona</a>
    </header>

    <main>

        <form method="post" action="/apartments">

        <h1>Prideti buta<h1>

            <span>Pardavejo vardas</span>
            <input type="text" name="name">

            <span>Adresas</span>
            <input type="text" name="location">

            <span>Aukstas</span>
            <input type="text" name="floor">

            <span>Miegamuju sk.</span>
            <input type="text" name="bedrooms">

            <span>Parkavimo vietu sk.</span>
            <input type="text" name="car_spaces">

            <span>Vonios kambariu sk.</span>
            <input type="text" name="living_spaces">

            <span>Plotas</span>
            <input type="text" name="area">

            <span>Kaina</span>
            <input type="text" name="price">

            <span>Parduodama nuo kada</span>
            <input type="text" name="date_sell_from">

            </input>

        </form>
    </main>
    </span>
        </main>

        <div id="butu_sarasa">
        ${butu_sarasa}
    </div>
        <footer>
            <span>2023-02-07 Vardenis Pavardenis </span>
        </footer>
    </body>
    
    </html>`
}

export default view_vadibiniko_zona