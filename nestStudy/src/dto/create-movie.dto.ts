import { IsString, IsNumber, IsOptional } from 'class-validator';
/*
dto를 쓰는 이유
1. 코드 간결성
2. 유효성 검사에 유용함.
*/

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];
}
