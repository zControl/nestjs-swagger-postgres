import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Example } from 'src/modules/example/entities/example.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExampleService {
  constructor(
    @InjectRepository(Example)
    private exampleRepository: Repository<Example>,
  ) {}

  create(example: Example): Promise<Example> {
    return this.exampleRepository.save(example);
  }

  findAll(): Promise<Example[]> {
    return this.exampleRepository.find();
  }

  findOne(id: number): Promise<Example> {
    return this.exampleRepository.findOneBy({ id });
  }

  async update(id: number, updatedExample: Partial<Example>): Promise<Example> {
    await this.exampleRepository.update(id, updatedExample);
    return this.exampleRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.exampleRepository.delete(id);
  }
}
