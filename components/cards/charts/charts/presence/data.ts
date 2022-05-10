import { ApexOptions } from "apexcharts";

export const series = [{
  name: 'Share Custumer',
  data: [25, 55, 44, 63, 63, 44, 13, 0, 0, 25, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
},
{
  name: 'Share Hour',
  data: [100, 100, 100, 100, 100, 100, 100, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}]

export const options: ApexOptions = {
  chart: {
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
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    min: 0,
    max: 100,
    labels: {
      show: true,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  title: {
    text: '',
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
  },
  colors: ['#F2B66D', '#2467BF']
}