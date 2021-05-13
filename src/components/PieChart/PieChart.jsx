import './PieChart.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart as Pie } from 'react-minimal-pie-chart'

function PieChart(props) {

    return (
        <div>
            <div className="PieChart-top">
                <Pie data={[
                    { title: "food", value: 10, color: "#EC7063" },
                    { title: "home", value: 15, color: "#85C1E9 " },
                    { title: "restaurant", value: 20, color: "#F7DC6F" },
                    { title: "pet", value: 20, color: "#58D68D" },
                 
                ]} animate label={() => { return "label" }}
                />
            </div>
        </div>
    );
}

export default PieChart