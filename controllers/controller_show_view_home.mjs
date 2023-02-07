import view_home from "../views/view_home.mjs"

const controller_show_view_home = function (req, res)
{
    const html = view_home()

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_home