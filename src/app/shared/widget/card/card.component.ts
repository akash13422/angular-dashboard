import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

@Input() label:string;
@Input() total:string;
@Input() percentage:string;

  Highcharts =Highcharts;
  chartoptions = {}

@Input() data =[];
  constructor() { }

  ngOnInit() {
    this.chartoptions = {
      chart: {
          type: 'area',
          backgroundcolor:null,
          margin:[2,2,2,2],
          borderwidth:0,
          height:60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },

      tooltip: {
         split: true,
         outside:true
      },
      legend:{
        enabled:false
      },
      credits:{
           enabled:false
      },

      exporting:{
       enabled:false
      },

      xAxis:{
         labels:{
           enabled:false,
         },
         title:{
           text:null
         },
         startOnTick:false,
         endOnTick:false,
         tickOptions:[]
      },

      yAxis:{
        labels:{
          enabled:false,
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[]
      },

      series: [{
        data:this.data
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(new Event('resize'))
    },300);



  }

}
