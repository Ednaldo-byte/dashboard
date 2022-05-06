import { ApexOptions } from "apexcharts"

export const series = [{
    name: 'VAR',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'RRP',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }, {
    name: 'Mode',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }, {
    name: 'Max',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }, {
    name: 'Min',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }]

export const options: ApexOptions = {
  chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: [0, 4, 4, 4, 4]
  },
  title: {
    text: ''
  },
  legend: {
    position: "left"
  },
  colors: ['#335898', '#75788D', '#8FB2EC', '#256EE7', '#F2B44C'],
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
  xaxis: {
    type: 'category'
  },
  yaxis: [{
    show: false,
  }, {
    opposite: false
  },{
    min:0,
    max: 4000
  }],
}