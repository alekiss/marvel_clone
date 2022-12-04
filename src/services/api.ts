import md5 from "md5";
import axios from "axios";

const publicKey = "3afec509121689514b4810188785e674";
const privateKey = "6d867dd0eda0cd22c2db96ffd5fab4ea97c704ba";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    }
})

export default api