const request = require("request");

const geocode = (address, callback) => {
    const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic3RlZmFuY2luY2EiLCJhIjoiY2tjZDB5ZHdtMDVnODJybzNyNWI5eTNjaCJ9.gjqZdw515lcKF4au_vgFtQ&limit=1";
    request({url, json: true}, (error, {body}) =>{
        if (error){
            callback("Can't reach the location", undefined);
        }
        if (body.features.length === 0){
            callback("The location is not correct", undefined);
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name,
            });
        }
    })
    };

module.exports = geocode;