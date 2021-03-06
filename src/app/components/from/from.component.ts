import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from './../../Location';
import { LocationService } from 'src/app/services/location.service';

@Component({
	selector: 'app-from',
	templateUrl: './from.component.html',
	styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

	public frmLocation: FormGroup;
	public id: number = null;
	private location: any;
	public locations: Location[] = [];
	public nameButton: string =  "Agregar";


	constructor( private router: Router,
		private _router: ActivatedRoute,
		private _locationService: LocationService) {
		this.id = parseInt(this._router.snapshot.params.id);
		this.frmLocation = new FormGroup({
		name: new FormControl(null, Validators.required),
		area: new FormControl(null, Validators.required),
		padre: new FormControl(null ),
		});
	}

	ngOnInit(): void {
		this.nameButton = (this.id) ? "Modificar" : "Agregar";
		this.showData();
	}

	showData() {
		if( this.id ) {
		this._locationService.listId( this.id ).subscribe((response: Location) => {
			this.location = response;
			this.montarData();
		});
		}

		this._locationService.listLocation().subscribe((response: Location[]) => {
		this.locations = response;
		})


	}

  	montarData() {
		this.frmLocation.patchValue({
			name: this.location.name,
			area: this.location.area_m2,
			padre: (this.location.location) ? this.location.location.id : null
		});
  	}

	cancelar() {
		this.router.navigateByUrl('Location');
	}

	guardar() {
		if ( !this.frmLocation.valid ) {
				return false;
		}

		let padre = this.frmLocation.get('padre').value;

		let data: Location = {
			id: this.id,
			name: (this.frmLocation.get('name').value).toUpperCase(),
			area_m2: parseInt(this.frmLocation.get('area').value),
			location: ( padre ) ? { id: padre } : null,
		};

		this._locationService.guardar( data, this.id ).subscribe((response: any ) => {
			this.router.navigateByUrl('Location');
		});
	}

}
