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

  @Get('status')
  @ApiOperation({ summary: 'Get API status information' })
  getStatus() {
    return {
      status: 'ok',
      version: '1.0.0',
      random_number: Math.random(),
      timestamp: new Date().toISOString(),
    };
  }
}
