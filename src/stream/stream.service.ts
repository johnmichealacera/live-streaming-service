import { Injectable } from '@nestjs/common';
import { mockPlays } from './mock-data';

@Injectable()
export class StreamService {
  private index = 0;

  getNextPlay() {
    const play = mockPlays[this.index];
    this.index = (this.index + 1) % mockPlays.length;
    return play;
  }
}
