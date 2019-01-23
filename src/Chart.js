import React from 'react'
import { Line } from 'react-chartjs-2'

function getTime(time){
    const date = new Date(time)
    const hours = addZero(date.getHours().toString())
    const minutes = addZero(date.getMinutes().toString())
    return hours + ":" + minutes
}
function addZero(time){
    if(time < 10){
        return 0 + time
    }
    return time
}

function Chart({ locationInfo }) {
    const times = []
    const temperatures = []
    const snowdepths = []
    const precipitations = []

    if(locationInfo !== undefined){
        for (let temp of locationInfo.data.t.timeValuePairs) {
            temperatures.push(temp.value);
            times.push(getTime(temp.time));
        }

        for (let snowdepth of locationInfo.data.snowdepth.timeValuePairs) {
            snowdepths.push(snowdepth.value)
        }

        for (let precipitation of locationInfo.data.r_1h.timeValuePairs) {
            precipitations.push(precipitation.value)
        }
    }

    const tempData = {
        labels: times,
        datasets: [{
            label: 'temperatures, °C',
            data: temperatures,
            borderColor: "rgba(204,0,0,0.7)",
            borderWidth: "2",
            backgroundColor: "rgba(204,0,0,0.7)",
            pointBorderColor: "rgba(0,0,0,0)",
            fill: false
        },
        ]
    }

    const snowData = {
        labels: times, 
        datasets: [{
            label: 'snowdepth, cm',
            data: snowdepths, 
            borderColor: "rgba(0,102,51,0.7)",
            borderWidth: "2",
            backgroundColor: "rgba(0,102,51,0.7)",
            pointBorderColor: "rgba(0,0,0,0)",
        }, 
        ]
    }

    const precipitationData = {
        labels: times, 
        datasets: [{
            label: 'precipitation, mm',
            data: snowdepths, 
            borderColor: "rgba(0,102,204,0.7)",
            borderWidth: "2",
            backgroundColor: "rgba(0,102,204,0.7)",
            pointBorderColor: "rgba(0,0,0,0)",
        }, 
        ]
    }

    return (
        <div id="myChart">
            {/* {console.log(temperatures)} */}
            <Line
                data={tempData}
                options={{ maintainAspectRatio: false, responsive: true }}
            />
            <Line 
                data={snowData}
                options={{ maintainAspectRatio: false, responsive: true }}
            />
            <Line 
                data={precipitationData}
                options={{ maintainAspectRatio: false, responsive: true }}
            />
        </div>
    )
}

export default Chart
