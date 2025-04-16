import { Injectable } from '@nestjs/common';
import { mockGameData, mockPlays } from './mock-data';

@Injectable()
export class StreamService {
  private index = 0;
  private active = false;

  start() {
    this.active = true;
    this.index = 0;
  }

  stop() {
    this.active = false;
  }

  isActive() {
    return this.active;
  }

  getNextPlay() {
    if (!this.active || this.index >= mockPlays.length) return null;

    const play = mockPlays[this.index];
    this.index++;

    if (play.status === 'decided') {
      this.stop();
    }

    return {
      play,
      game: mockGameData,
    };
  }
}
