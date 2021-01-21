const request = require('request')
const geocode = (address , callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+ '.json?access_token=pk.eyJ1IjoiZWx3YXplciIsImEiOiJja2p2bHpmdXAwYTRtMm9xdWZxZ2V3czIxIn0.vX46ecCbheG80p4ICb_yQA'
    request( {url : url , json : true} , (error , response) =>{
	if(error){
		callback('unable to connect to location service' , undefined)
	}
	else if(response.body.features.length === 0){
		callback('Unable to find loaction , try another search' , undefined)
	}
	else{
		callback(undefined , {
			latitude : response.body.features[0].center[1] ,
			longitude : response.body.features[0].center[0]  , 
			name : response.body.features[0].place_name
		})

	}
	})
}

module.exports = geocode 