import mongodb from 'mongodb'
import config from '../config.mjs'

const model_prideti_buta = async function (
    param_area,
    param_bathrooms,
    param_bedrooms,
    param_car_spaces,
    param_date_seel_from,
    param_floor,
    param_living_spaces,
    param_location,
    param_name,
    param_price)
{
    const obj_butas = {
        "area": param_area,
        "bathrooms": param_bathrooms,
        "bedrooms": param_bedrooms,
        "car_spaces": param_car_spaces,
        "date_seel_from": param_date_seel_from,
        "floor": param_floor,
        "living_spaces": param_living_spaces,
        "location": param_location,
        "name": param_name,
        "price": param_price
    }

    const mongodb_client_1 = new mongodb.MongoClient(config.butai_prisijungimas_prie_mongodb_uri)

    var result_of_innerOne

    try
    {
        result_of_innerOne = await mongodb_client_1
            .db(config.butai_duomenu_bazes_vardas)
            .collection(config.butai_kolekcijos_vardas)
            .insertOne(obj_butas)

        mongodb_client_1.close()
    }
    catch (err)
    {
        return false
    }

    if(result_of_innerOne.acknowledged !== true || 
        result_of_innerOne.insertedId === undefined)
    {
        return false
    }

    //

    return true
}

export default model_prideti_buta