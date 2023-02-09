import model_prideti_buta from "../models/model_prideti_buta.mjs"
import view_pranesimas from "../views/view_pranesimas.mjs"

const controller_handle_prideti_buta = async function (req, res)
{

    const regexp_area = /^[1-9][0-9]{0,3}$/
    const regexp_bathrooms = /^[1-9][0-9]{0,1}$/
    const regexp_bedrooms = /^[1-9][0-9]{0,1}$/
    const regexp_car_spaces = /^[1-9][0-9]{0,1}$/
    const regexp_date_seel_from = /^(202[3-9])-(0[1-9][1[0-2]|)-(0[1-9]|[1-2][0-9]|3[0-1])$/
    const regexp_floor = /^[1-9][0-9]{0,1}$/
    const regexp_living_spaces = /^[1-9][0-9]{0,1}$/
    const regexp_location = /^[a-zA-Z0-9][a-zA-Z0-9 ,.-]{1,253}[a-zA-Z0-9]$/
    const regexp_name = /^[a-zA-Z0-9][a-zA-Z0-9 ]{1,253}[a-zA-Z0-9]$/
    const regexp_price = /^[1-9][0-9]{0,7}$/


    if (regexp_area.test(req.body.area) !== true)
    {
        const html = view_pranesimas("regexp_area", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    if (regexp_bathrooms.test(req.body.bathrooms) !== true)
    {
        const html = view_pranesimas("regexp_bathrooms", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    if (regexp_bedrooms.test(req.body.bedrooms) !== true)
    {
        const html = view_pranesimas("regexp_bedrooms", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    if (regexp_car_spaces.test(req.body.car_spaces) !== true)
    {
        const html = view_pranesimas("regexp_car_spaces", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    if (regexp_date_seel_from.test(req.body.date_seel_from) !== true)
    {
        const html = view_pranesimas("regexp_date_seel_from", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    if (regexp_floor.test(req.body.floor) !== true)
    {
        const html = view_pranesimas("regexp_floor", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }


    if (regexp_living_spaces.test(req.body.living_spaces) !== true)
    {
        const html = view_pranesimas("regexp_living_spaces", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    if (regexp_location.test(req.body.location) !== true)
    {
        const html = view_pranesimas("regexp_location", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    if (regexp_name.test(req.body.name) !== true)
    {
        const html = view_pranesimas("regexp_name", "/apartments")
        res.statusCode = 400
        res.write(html)
        res.end()
        return
    }

    
    //

   const result_of_model_prideti_buta = await model_prideti_buta(
        req.body.area,
        req.body.bathrooms,
        req.body.bedrooms,
        req.body.car_spaces,
        req.body.date_seel_from,
        req.body.floor,
        req.body.living_spaces,
        req.body.location,
        req.body.name,
        req.body.price
    )

    if(result_of_model_prideti_buta !== true)
    {
        if (regexp_price.test(req.body.price) !== true)
    {
        const html = view_pranesimas("Serverio klaida", "/apartments")
        res.statusCode = 500
        res.write(html)
        res.end()
        
    }
    }

    if (regexp_price.test(req.body.price) !== true)
    {
        const html = view_pranesimas("Butas pridetas", "/apartments")
        res.statusCode = 200
        res.write(html)
        res.end()
        return
    }

}
export default controller_handle_prideti_buta