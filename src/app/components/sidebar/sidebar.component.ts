import { Component, OnInit } from '@angular/core';
import {faHomeAlt, faDollarSign, faArrowRightArrowLeft , faCircle, faPeopleGroup, faGlobeAfrica, faGear, faAngleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faHomeAlt = faHomeAlt;
  faDollarSign = faDollarSign;
  faArrowRightArrowLeft = faArrowRightArrowLeft;
  faCircle = faCircle; 
  faPeopleGroup = faPeopleGroup;
  faGlobeAfrica = faGlobeAfrica;
  faGear = faGear;
  faAngleDown = faAngleDown;
  
  constructor() { }

  ngOnInit(): void {
  }

}
