import { Component, OnInit } from '@angular/core';
import {faArrowLeft, faCircleQuestion} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faArrowLeft = faArrowLeft
  faCircleQuestion = faCircleQuestion;
  constructor() { }

  ngOnInit(): void {
  }

}
