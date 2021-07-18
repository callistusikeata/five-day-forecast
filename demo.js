// let city = 'Toronto'

// let apiKey = '1df1ed4eff2fa8babda43ff81fe61bcc'

// let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

// d3.json(url).then(function(data){
//     console.log(data)
// })

function handleSubmit() {
    var city = d3.select('#cityInput').node().value;

    buildPlot(city);
}

function buildPlot(city){
    
    let apiKey = '1df1ed4eff2fa8babda43ff81fe61bcc'

    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

    d3.json(url).then(function(data){
        console.log(data);

        var times = data.list.map(obj => obj.dt_txt);
        var temps = data.list.map(obj => obj.main.temp);

        var trace = {
            x: times,
            y: temps,
            type: 'scatter',
            mode: 'lines+markers',
        }

        var data = [trace];

        Plotly.newPlot('plot', data)
    })

}

d3.select('#submit').on('click', handleSubmit);