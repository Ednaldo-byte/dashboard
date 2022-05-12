import { ApexOptions } from "apexcharts"

export const series = [{
    name: 'VAR',
    type: 'column',
    data: [41, 41, 33, 40, 33, 33, 41, 0, 41, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
    name: 'RRP',
    type: 'line',
    data: [5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999, 5999]
  }, {
    name: 'Mode',
    type: 'line',
    data: [3533, 3514, 3999, 3599, 3999, 3999, 3573, 0, 3512, 2533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
    name: 'Max',
    type: 'line',
    data: [4100, 5999, 4598, 5999, 5999, 5999, 4377, 0, 4599, 2533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }, {
    name: 'Min',
    type: 'line',
    data: [3533, 3430, 3533, 3599, 3513, 3430, 3513, 0, 3512, 2533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }]

export const options: ApexOptions = {
  chart: {
    type: 'bar',
  },
  stroke: {
    width: [0, 2, 2, 2, 2]
  },
  fill:{
    pattern: {
      width: 10
    }
  },
  title: {
    text: ''
  },
  legend: {
    position: "left"
  },
  colors: ['#335898', '#75788D', '#8FB2EC', '#256EE7', '#F2B44C'],
  plotOptions:{
    bar: {
      columnWidth: '50%'
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [0, 1, 2, 3, 4],
    // formatter: function (value, { seriesIndex } ) {
    //     return value + '%'
    // },
    offsetY: -8,
    background: {
      enabled: false,
      dropShadow: {
        enabled: false,
      }
    },
    style: {
      colors: ['#828282'],
      fontWeight: '100/500'
    }
  },
  labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
  xaxis: {
    type: 'category'
  },
  yaxis: [
    {
      show: false,
      seriesName: 'VAR',
      opposite: true,
      min: 0,
      max: 100,
    },
    {
      show: false,
      seriesName: 'RRP',
      opposite: true,
      min: 0,
      max: 5999
    },
    {
      show: false,
      seriesName: ' Mode',
      opposite: true,
      min: 0,
      max: 5999
    },
    {
      show: false,
      seriesName: 'Min',
      opposite: true,
      min: 0,
      max: 5999
    },
    {
      show: false,
      seriesName: 'Max',
      opposite: true,
      min: 0,
      max: 5999
    },
  ]
}