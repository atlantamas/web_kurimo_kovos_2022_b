import model_gauti_visus_butus from "../models/model_gauti_visus_butus.mjs"
import view_vadibiniko_zona from "../views/view_vadibiniko_zona.mjs"

const controller_show_view_vadybininko_zona = async function (req, res)
{
const result_of_model_gauti_visus_butus =await model_gauti_visus_butus()

if(result_of_model_gauti_visus_butus===false)
{
    const html = view_pranesimas("nepavyko gauti butu saraso", "/apartments")
    res.statusCode = 500
    res.write(html)
    res.end()
    return
}

    const html = view_vadibiniko_zona()

    res.statusCode = 200
    res.write(html)
    res.end()
}

export default controller_show_view_vadybininko_zona