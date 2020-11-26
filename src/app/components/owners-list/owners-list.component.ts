import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/domain/owner';
import { CardatabaseService } from 'src/app/services/cardatabase.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {

  constructor(private carService: CardatabaseService) { }

  owners : any = [];

  ngOnInit() {
    this.owners = this.carService.getOwners().subscribe(
      (data)=> {this.owners = data;
      })
  }

}
