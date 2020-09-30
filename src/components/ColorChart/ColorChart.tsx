import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import getWordPosition from "@/api/chart/get_word_position";

const ColorChart: React.FC = () => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [wordPositionInfo, setWordPositionInfo] = useState(null);
    const chartConfig = {
        type: "scatter",
        data: {
            datasets: [
                {
                    data: [
                        { x: 1.8, y: 6.6 },
                        { x: 7.5, y: 3.4 },
                        { x: 1.6, y: 8.4 },
                        { x: 5.4, y: 7.4 },
                        { x: 1.2, y: 3.3 },
                        { x: 4.9, y: 9 },
                        { x: 4.2, y: 1.9 },
                        { x: 7.9, y: 8.4 },
                        { x: 5.9, y: 5.6 },
                        { x: 8.6, y: 5 },
                        { x: 5, y: 2.7 },
                        { x: 3.3, y: 4.9 },
                    ],
                },
            ],
        },
        options: {
            scales: {
                xAxes: [
                    {
                        type: "linear",
                        position: "bottom",
                    },
                ],
            },
            showLine: false,
            legend: {
                display: false,
            },
        },
    };

    useEffect(() => {
        getWordPosition().then((data) => {
            setWordPositionInfo(Object.values(data));
        });
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(
                chartContainer.current,
                chartConfig
            );
            setChartInstance(newChartInstance);
        }
    }, [chartContainer]);

    return <canvas ref={chartContainer} />;
};

export default ColorChart;
