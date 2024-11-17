import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'The root endpoint that returns a hello world message.',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
