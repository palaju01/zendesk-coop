var express = require("express");
const axios = require('axios');
var cors = require('cors')
var app = express();
app.use(cors())

const instance = axios.create({
    baseURL: 'https://zccgabrielpalacios.zendesk.com/api/v2',
    auth: {
        username: 'palaju01@luther.edu/token',
        password: 'Pwrqq2FE6O6YKYlVvpbQfPqrWxoHmls6LDDAAJcN'
    }
});

app.get("/tickets", async (request, response, next) => {
    var size = request.query.size
    var before = request.query.before
    var after = request.query.after

    console.log("Request received from: " + request.protocol + '://' + request.get('host') + request.originalUrl)

    instance.get("/tickets.json",
        {
            params: {
                'page[size]': size,
                'page[before]': before,
                'page[after]': after,
            }
        }
    ).then(function (res) {
        // handle success
        response.status(200).json(
            {
                "tickets": res.data.tickets,
                "meta": res.data.meta
            }
        )
    }).catch(function (error) {
        // handle errors
        console.log(error);
        response.status(500).send('Sorry, there was an issue retriving the tickets!')
    })
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});