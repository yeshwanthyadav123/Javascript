import { Component, OnInit } from '@angular/core';
import {player} from '../player';
import {PLAYERS} from '../mock-players';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players=PLAYERS;
  selectedplayer:player;
  Players:player[];
  
  


  constructor(private playerService: PlayerService) { }
 

  ngOnInit() {
    this.getPlayers;
  }
  onSelect(player: player): void {
    this.selectedplayer = player;
  }
  getPlayers():void{
    this.Players=this.playerService.getplayers();
  }

}