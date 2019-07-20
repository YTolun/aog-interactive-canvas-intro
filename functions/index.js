'use strict';

const {dialogflow, HtmlResponse} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', (conv) => {
    conv.ask(`Welcome, you can pick an animal and change it's color. Give it a try!`);
    conv.ask(new HtmlResponse({
        url: 'YOUR_URL_HERE',
    }));
});

app.intent('change_animal_color', (conv, {animal, color}) => {
    conv.ask(new HtmlResponse({
        data: {
            animal: animal,
            color: color
        },
    }));
    conv.ask(`Alright, I've changed the color of the ${animal} into ${color}. Do you want to make any other changes?`);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);