import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GenericResponseDto<T> {
  @ApiPropertyOptional()
  message?: string;

  @ApiProperty()
  data: T;
}
