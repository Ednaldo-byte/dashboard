import { ApexOptions } from "apexcharts";

export const series = [{
  name: 'Share Custumer',
  data: [2.3, 3.1, 4.0, 0.8, 0.5, 0.2, 2.3, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4,3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
},
{
  name: 'Share Hour',
  data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 0.5, 0.2, 2.3, 3.1, 1.4, 0.8, 0.5, 0.2]
}]

export const options: ApexOptions = {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      dataLabels: {
        position: 'top',
        orientation: "vertical"
      },
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: any) {
      return val + "%";
    },
    offsetY: 10,
    style: {
      fontSize: '12px',
      colors: ["#304758"],
      fontWeight: '400/500'
    }
  },
  
  xaxis: {
    categories: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: '',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: '#444'
    }
  },
  legend:{
    show: true,
    position: 'left',
    fontSize: '14px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 400,
    markers:{
      radius: 20
    }
  }
}