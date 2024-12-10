import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({
    summary: 'The root endpoint that returns a hello world message.',
  })
  getHello(): string {
    return 'Hello World';
  }

  @Get('version')
  @ApiOperation({ summary: 'Get API version information' })
  getStatus() {
    return {
      version: '1.0.0',
    };
  }
}
