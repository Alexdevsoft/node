const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json([ "API1", "API2", "API3"])
});

app.post("/courses", (request, response) => {
    return response.json([ "API1", "API2", "API3", "API4"])
});

app.put("/courses/:id", (request, response) => {
    return response.json([ "API6", "API2", "API3", "API4"])
});

app.patch("/courses/:id", (request, response) => {
    return response.json([ "API6", "API7", "API3", "API4"])
});

app.delete("/courses/:id", (request, response) => {
    return response.json([ "API1", "API2", "API3"])
});

app.listen(3333)