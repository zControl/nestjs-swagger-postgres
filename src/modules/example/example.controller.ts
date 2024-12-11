import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { Example } from 'src/modules/example/entities/example.entity';
import { ExampleService } from './example.service';

@ApiTags('example')
@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Post()
  @ApiProperty()
  @ApiBody({
    type: Example,
    description: 'Create a new row in the example table.',
    examples: {
      example1: {
        summary: 'Example 1',
        value: {
          name: 'Sample Name',
          description: 'This is a sample description',
        },
      },
    },
  })
  create(@Body() example: Example): Promise<Example> {
    return this.exampleService.create(example);
  }

  @Get()
  @ApiProperty()
  findAll(): Promise<Example[]> {
    return this.exampleService.findAll();
  }

  @Get(':id')
  @ApiProperty()
  findOne(@Param('id') id: string): Promise<Example> {
    return this.exampleService.findOne(+id);
  }

  @Put(':id')
  @ApiProperty()
  update(
    @Param('id') id: string,
    @Body() example: Partial<Example>,
  ): Promise<Example> {
    return this.exampleService.update(+id, example);
  }

  @Delete(':id')
  @ApiProperty()
  remove(@Param('id') id: string): Promise<void> {
    return this.exampleService.remove(+id);
  }
}
