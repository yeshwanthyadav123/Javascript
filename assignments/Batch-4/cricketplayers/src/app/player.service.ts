import { Injectable } from '@angular/core';
import {player} from './player';
import {PLAYERS} from './mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }
  getplayers():player[]{
    return PLAYERS;
    1
  }
}
