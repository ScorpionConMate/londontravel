import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-step-one-cn',
  templateUrl: './step-one-cn.component.html',
  styleUrls: ['./step-one-cn.component.css'],
})
export class StepOneCnComponent implements OnInit {
  code: string;
  school: any;

  constructor(
    private readonly apiService: ApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.school = {};
    this.code = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getSchoolData();
  }

  getSchoolData(): void {
    this.apiService.get(`/reservations/${this.code}/get-rooms`).subscribe({
      next: (response) => {
        console.log(response);
        if (response) {
          this.school = response.school;
        }
      },
    });
  }
}
