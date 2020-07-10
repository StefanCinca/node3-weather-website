const request = require("request");


const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8747227391d5fe41213fdbf8fbb605a5" +
    "&query=" +
    longitude +
    "," +
    latitude;
    console.log(url);
  request(
    {
      url,
      json: true,
    },
    (error, {body}) => {
        if (error){
            callback("Couldn't access forecast API", undefined);
        }
        else if (body.error){
            callback("Couldn't acces the location", undefined);
        }
        else{
            console.log(body.current);
            callback(undefined, body.current);
        }
    }
  );
};

module.exports = forecast;