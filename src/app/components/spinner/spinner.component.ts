import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  spinner: string = 'display:block';
  ngOnInit(): void {
    this.loading();
  }
  constructor(private router: Router) {}
  loading() {
    setTimeout(() => {
      this.spinner = 'display:none';
      this.router.navigate(['inicio']);
    }, 2000);
  }
}
