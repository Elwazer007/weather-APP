const request = require('request')
/*const forecast = forecast(latitude, longitude , callback =>{
	const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' +latitude + '&lon=' + longitude+'&appid=271d1234d3f497eed5b1d80a07b3fcd1'
request({url : url , json : true} , (error , response) =>{
	
	if(error){
		callback('Unable to connect to weather service' , undefined) 

	}
	else{
		const countryName = response.body.sys.country 
		const region = response.body.timezone.name 
		const temp = response.body.main.temp
		callback(undefined , 'It is currently ' + temp + 'at ' + region + ' ,' + countryName)
	}

})

}
*/
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&lat=' +latitude + '&lon=' + longitude+'&appid=271d1234d3f497eed5b1d80a07b3fcd1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }  else {
         const countryName = response.body.sys.country 
         const description = response.body.weather[0].description
		const region = response.body.name 
		const temp = response.body.main.temp
            callback(undefined,  description + ', And It is currently ' + temp + ' at ' + region + ' , ' + countryName)
        }
    })
}

module.exports = forecast 
