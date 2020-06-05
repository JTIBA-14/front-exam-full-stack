import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  public frmLocation: FormGroup;
  private id: number = null;
  private location: any;
  public nameButton: string =  "Agregar";


  constructor( private router: Router,
    private _router: ActivatedRoute,
    private _locationService: LocationService ) {
    this.id = this._router.snapshot.params.id;
    this.frmLocation = new FormGroup({
      name: new FormControl(null, Validators.required),
      area: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.nameButton = (this.id) ? "Modificar" : "Agregar";
    this.showData();
  }

  showData() {
    if( this.id ) {
      this._locationService.listId( this.id ).subscribe((response) => {
        this.location = response;
        this.montarData();
      });
    }
  }

  montarData() {
    this.frmLocation.patchValue({
      name: this.location.name,
      area: this.location.area_m2
    });
  }

  cancelar() {
    this.router.navigateByUrl('Location');
  }

  guardar() {}

}
