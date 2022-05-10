import { ApexOptions } from 'apexcharts'

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let array = [];
for (let i = 0 ; i < 25 ; i++){
array.push(getRandom(0,100));
}

export const series = [
{
  name: 'R$ 3.514',
  data: [0,33,0,17,11,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
},
{
  name: 'R$ 3.533',
  data: [67,11,20,17,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
},
{
  name: 'R$ 3.599',
  data: [0,11,20,33,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
},
{
  name: 'R$ 3.669',
  data: [33,33,20,17,11,20,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
},
{
  name: 'R$ 3.999',
  data: [0,11,40,17,56,60,0,0,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
},
]


export const options: ApexOptions = {
  chart: {
    type: 'heatmap',
    fontFamily: 'Poppins, sans-serif'
  },
  plotOptions: {
    heatmap:{
      colorScale: {
        ranges: [{
          from: 0,
          to: 24,
          name: '0% - 24%',
          color: '#8BB3F2'
        },
        {
          from: 25,
          to: 49,
          name: '25% - 49%',
          color: '#5F97EC'
        },
        {
          from: 50,
          to: 74,
          name: '50% - 74%',
          color: '#397BE8'
        },
        {
          from: 75,
          to: 100,
          name: '75% - 100%',
          color: '#0254E2'
        }]
      }
    }
  },
  colors:['#8BB3F2', '#5F97EC', '#397BE8', '#0254E2'],
  xaxis:{
    position: 'top',
    type: 'category',
    categories: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    labels: {
      show: true,
      style: {
        fontSize: '13px'
      }
    }
  },
  yaxis: {
    labels:{
      style:{
        fontSize: '12px'
      }
    }
  },
  dataLabels:{
    enabled: true,
    style:{
      colors: ['#212519'],
      fontWeight: 300/500,
      fontFamily: 'Poppins, sans-serif',
      fontSize: '12px'
    },
    formatter: function (val) {
      return val+'%'
    }
  },
  legend:{
    position: 'left'
  }
}
