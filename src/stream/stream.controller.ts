import { Controller, Get, Sse } from '@nestjs/common';
import { StreamService } from './stream.service';
import { interval, map } from 'rxjs';

@Controller('stream')
export class StreamController {
  constructor(private readonly streamService: StreamService) {}

//   @Get()
//   getNextPlay() {
//     return this.streamService.getNextPlay();
//   }

  @Sse()
  stream(): any {
    return interval(1000).pipe( // emits once per second
      map(() => ({
        data: this.streamService.getNextPlay(),
      })),
    );
  }
}
