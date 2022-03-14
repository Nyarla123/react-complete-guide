import React from "react";
import ChartBar from "./ChartBar";
import '../../styles/Chart.css';

const Chart = ({dataPoints}) => {

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    console.log(dataPointValues);
    const totalMaximum = Math.max(...dataPointValues);
    console.log(totalMaximum);
    const renderChartBar = dataPoints.map((dataPoint) => {
        return (
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        )
    })

    return (
        <div className="chart">
            {renderChartBar}
            {/* {dataPoints.map(dataPoint => 
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
            />)} */}
        </div>
    )
};

export default Chart;