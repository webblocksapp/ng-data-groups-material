import { IsNotEmpty } from '@webblocksapp/class-validator';

export class ExampleDto {
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  thoughts: string;

  @IsNotEmpty()
  opinions: string;
}
