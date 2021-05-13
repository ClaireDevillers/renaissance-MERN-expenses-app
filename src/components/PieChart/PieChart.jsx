import './PieChart.css'
import React from 'react'
import { PieChart as Pie } from 'react-minimal-pie-chart'

function PieChart(props) {

    return (
        <div className="Pie" >
            <h1>SUMMARY</h1>
            <div className="PieChart-top">
                <Pie data={[
                    {title: "One", value: 10, color: "#E38627"},
                    {title: "Two", value: 15, color: "#C13C37"},
                    {title: "Three", value: 20, color: "#6A2135"}
                ]} animate label={()=>{return "label"}}
                />
            </div>
            <div className="PieChart-buttons">
                <button className="btn btn-warning">View List</button>
                <button className="btn btn-warning">Categories</button>
            </div>

        </div>
    );
}

export default PieChart