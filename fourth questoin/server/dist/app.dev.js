"use strict";

var express = require('express');

var app = express();

var hotelList = require('./Hotel.json');

var cors = function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
};

app.use(cors);
app.get("/showHotels", function (req, res) {
  res.status(200).send(hotelList);
});
app.get('/showByCity', function (req, res) {
  var author = req.query.city;
  var newHotelList = [];
  bookList.forEach(function (hotel) {
    if (hotel.city == author) {
      newBookList.push(hotel);
    }
  });
  res.status(200).send(newHotelList);
});
app.listen('3000', function () {
  console.log('server listening to port 3000');
});