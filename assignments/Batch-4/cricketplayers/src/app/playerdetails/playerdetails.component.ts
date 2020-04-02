import { Component, OnInit ,Input} from '@angular/core';
import {player} from '../player';


@Component({
  selector: 'app-playerdetails',
  templateUrl: './playerdetails.component.html',
  styleUrls: ['./playerdetails.component.css']
})
export class PlayerdetailsComponent implements OnInit {

  constructor() { }
  @Input() player: player;

  ngOnInit(): void {
  }

}
