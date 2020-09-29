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
                    data: wordPositionInfo,
                },
            ],
        },
    };

    useEffect(() => {
        getWordPosition().then((data) => {
            setWordPositionInfo(Object.values(data));
        });
    }, [chartContainer]);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(
                chartContainer.current,
                chartConfig
            );
            setChartInstance(newChartInstance);
        }
    }, [wordPositionInfo]);

    return <canvas ref={chartContainer} className="w-full" />;
};

export default ColorChart;
