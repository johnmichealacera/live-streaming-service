import { Controller, Get, Post, Res, Sse } from '@nestjs/common';
import { StreamService } from './stream.service';
import { interval, map, Observable } from 'rxjs';

@Controller('stream')
export class StreamController {
  constructor(private readonly streamService: StreamService) {}

  @Get('start')
  getNextPlay() {
    this.streamService.start();
    return { message: 'Stream started' };
  }

  @Sse()
  streamGame(@Res() res) {

    return new Observable(observer => {
      const intervalId = setInterval(() => {
        if (!this.streamService.isActive()) {
          clearInterval(intervalId);
          observer.complete();
          return;
        }

        const play = this.streamService.getNextPlay();
          observer.next({ data: play });
      }, 4000);
    });
  }

  @Post('stop')
  stopGame() {
    this.streamService.stop();
    return { message: 'Stream stopped' };
  }
}
