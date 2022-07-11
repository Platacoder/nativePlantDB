import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/services/plant.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private plantService: PlantService) { }

  ngOnInit() {
  }
  
  //Place holder for now, need to build sign if functionality.
  isSignedIn(){
    return false;
  }
  

}
