import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public listLocation: any[] = [];

  constructor(
    private _locationService: LocationService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.consultarListado();
  }

  consultarListado() {
    this._locationService.listLocation().subscribe((response: any) => {
      this.listLocation = response;
    });
  }

  nuevo() {
    this.router.navigateByUrl('create-location');
  }

}
