import { match } from './match_item';

export class Profile {
  user_id: string;
  roll: string;
  matches_played: number;
  win_percent: number;
  draw_percent: number;
  matches: match[]
  ratings:{
  	fide: number;
  	insti: number;
  	blah: number;
  }
}