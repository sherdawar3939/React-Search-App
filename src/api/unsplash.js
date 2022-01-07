import axios from "axios";

   export default axios.create({
        baseURL:'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID uvZBJLSC747nfwKcyCHSq1Ht89-BIaA2eZViTquNitg'
        }
    });
