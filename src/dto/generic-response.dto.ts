import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Meta } from './meta.dto';

export class GenericResponseDto<T> {
  @ApiPropertyOptional()
  message?: string;

  @ApiPropertyOptional()
  meta?: Meta;

  @ApiProperty()
  data: T;
}
