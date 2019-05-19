import {Component, OnInit} from '@angular/core';
import * as CanvasJS from 'assets/lib/canvasjs.min.js';
import {HttpService} from '../../../../services/http/http.service';
import {DataPoint} from '../../../../model/DataPoint.model';

@Component({
  selector: 'app-chart-home',
  templateUrl: './chart-home.component.html',
  styleUrls: ['./chart-home.component.css']
})
export class ChartHomeComponent implements OnInit {

  private dataColumnChart: any;
  private dataCircleChart: any;
  private columnChart;
  private circleChart;

  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.getColumnChart().subscribe((data: any) => {
      const lstDataPoints = [];
      for (let i = 0; i < data.length; i++) {
        const dataPoint = {
          y: '',
          label: ''
        };
        dataPoint.y = data[i].valueChart;
        dataPoint.label = data[i].nameChart;
        lstDataPoints.push(dataPoint);
      }
      // console.log(lstDataPoints);
      this.columnChart = new CanvasJS.Chart('columnChartContainer', {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: 'Column Chart Product'
        },
        data: [{
          type: 'column',
          dataPoints: lstDataPoints
        }]
      });
      this.columnChart.render();
    });
    this.http.getCircleChart().subscribe((data: any) => {
      const lstDataPoints = [];
      for (let i = 0; i < data.length; i++) {
        const dataPoint = {
          y: 0,
          name: ''
        };
        dataPoint.y = data[i].valueChart;
        switch (data[i].nameChart) {
          case 'FOLLOW':
            dataPoint.name = 'Subscribed Company';
            break;
          case 'RATE':
            dataPoint.name = 'Rate Product';
            break;
          case 'REVIEW':
            dataPoint.name = 'Review Company';
            break;
          case 'COMMENT':
            dataPoint.name = 'Comment Product';
            break;
          case 'UNFOLLOW':
            dataPoint.name = 'Unsubscribed Company';
            break;
          case 'AVA':
            dataPoint.name = 'Update Avatar';
            break;
          case 'PANEL':
            dataPoint.name = 'Update Panel';
            break;
        }

        lstDataPoints.push(dataPoint);
      }
      // console.log(lstDataPoints);
      this.circleChart = new CanvasJS.Chart('circleChartContainer', {
        theme: 'light2',
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: 'Behavior User'
        },
        data: [{
          type: 'pie',
          showInLegend: true,
          toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
          indexLabel: '{name} - #percent%',
          dataPoints: lstDataPoints
        }]
      });
      this.circleChart.render();
    });

  }

}
