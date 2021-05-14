import './PieChart.css'
import React from 'react'
import { PieChart as Pie } from 'react-minimal-pie-chart'



function PieChart(props) {
    let data = props.calculateCategoryValues(props.list)
    return (
        <div>
            <div className="PieChart-top">
                <Pie data={data} animate label={item => item.dataEntry.title }
                />
            </div>
        </div>
    );
}

export default PieChart