const myChart = document.getElementById("myChart").getContext("2d");

let barChart = new Chart(myChart, {
    type: "bar",
    data: {
        labels: [
            "20",
            " ",
            "25",
            " ",
            "30",
            " ",
            "35",
            "",
            "40",
            "",
            "60",
            "",
            "65",
        ],
        datasets: [

            {

                label: 'Employer:K 73,500',
                backgroundColor: '#0800a3',
                data: [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
            }, {
                label: 'Employee:K 52,500',
                backgroundColor: '#4935ff',
                data: [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]
            }, {
                label: 'Total Interest:K 224,313',
                backgroundColor: '#85afff',
                data: [35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90, 95, 100]

            }
        ],
    },
    options: {

        responsive: true,
        legend: {
            position: "top",
            labels: {
                fontColor: "#333",
                usePointStyle: true,
            }

        },
        scales: {
            xAxes: [{
                barThickness: 16,
                stacked: true,
                gridLines: {
                    display: false,
                }
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    callback: function(value, index, values) {
                        return "$" + value;
                    },


                    max: 300,
                    min: 0,
                    stepSize: 100,
                },
                gridLines: {
                    display: false,
                }


            }, ],
        },


    },
});

// $(function(){
//     $('.chart').easyPieChart({

//     })
// })
const radius = 11;
$(function() {
    $('.chart').easyPieChart({
        size: 3.14 * 2 * radius,
        barColor: "#22d6aa",
        scaleLength: 0,
        lineWidth: 8,
        trackColor: "#d3f7ee",
        lineCap: "square",
        animate: 2000,
    });
});