import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-step-two-cn',
  templateUrl: './step-two-cn.component.html',
  styleUrls: ['./step-two-cn.component.css'],
})
export class StepTwoCnComponent implements OnInit {
  room: any;
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.getData();
  }

  ngOnInit() {

  }

  getData(){
    this.apiService.get('/reservations/get-room/' + this.route.snapshot.paramMap.get('roomId')).subscribe({
      next: (data) => {
        this.room = data;
        this.isLoading = false;
      }
    })
  }
}

