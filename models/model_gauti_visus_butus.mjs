import mongodb from 'mongodb'
import config from '../config.mjs'

const model_gauti_visus_butus = async function ()
    
{

    const mongodb_client_1 = new mongodb.MongoClient(config.butai_prisijungimas_prie_mongodb_uri)

    var result_of_toArray
    
    try
    {
        result_of_toArray = await mongodb_client_1
            .db(config.butai_duomenu_bazes_vardas)
            .collection(config.butai_kolekcijos_vardas)
            .find({})
            .toArray()

        mongodb_client_1.close()
    }
    catch (err)
    {
        return false
    }

    //

    return result_of_toArray
}

export default model_gauti_visus_butus