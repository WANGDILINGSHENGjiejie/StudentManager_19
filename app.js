let express =require('express');

let svgCaptcha=require('svg-captcha');

let path =require('path');

let app=express();

app.use(express.static('static'));

app.get()