const view_pranesimas = function (param_pranesimo_tekstas, param_uri)
{
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>view_pranesimas</title>

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
            display: grid;
            place-items: center center;
            place-content: center center;
        }

        form {
            width: 25em;
            height: auto;
            padding: 0;
            border: 0;
            margin: 0;
            background-color: rgb(200, 200, 200);
            display: grid;
            grid-template-columns: auto;
            place-items: center center;
            place-content: center center;
            gap: 1em;
        }
    </style>

</head>

<body>

    <form method="get" action="${param_uri}">
        <span>${param_pranesimo_tekstas}</span>
        <input type="submit" value="Gerai">
    </form>

</body>

</html>
`
}
export default view_pranesimas