import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({
    summary: 'Sanity check to make sure the API can serve an endpoint',
    description: 'Returns "OK',
    operationId: 'getHealth',
    tags: ['health'],
  })
  getHealth(): string {
    return 'OK';
  }
}
