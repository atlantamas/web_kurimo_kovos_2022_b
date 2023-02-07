import view_vadibiniko_zona from "../views/view_vadibiniko_zona.mjs"

const controller_show_view_vadybininko_zona = function (req, res)
{
    const html = view_vadibiniko_zona()

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_vadybininko_zona