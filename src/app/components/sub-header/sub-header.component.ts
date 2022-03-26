import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {

  constructor() { }
  @Input() title = '';
  @Input() body = '';


  ngOnInit(): void {
  }

}
