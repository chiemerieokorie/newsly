import axios from "axios";

const API_KEY: string = "bb91ea304b55479293619f2e62f8100d";

export default axios.create({
    baseURL : `https://newsapi.org/v2/everything?q=Security&apiKey=${API_KEY}&sortBy=publishedAt&pageSize=99`,
});