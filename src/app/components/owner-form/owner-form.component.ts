import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/domain/owner';
import { CardatabaseService } from 'src/app/services/cardatabase.service';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {

  constructor(private carService : CardatabaseService, private router: Router) { }

  ngOnInit() {
  }
   
  public owner: Owner = new Owner();

  onSubmit(){
    this.carService.addOwner(this.owner).subscribe(
      () => {
      console.log("The POST observable is now completed.");
    }
    );
    this.owner = new Owner();
    this.router.navigate(['/owners']);
  }

}
