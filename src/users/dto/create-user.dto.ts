import { Transform } from 'class-transformer';
import {
  IsEmail,
  Matches,
  MinLength,
  IsOptional,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @MinLength(3, {
    message: 'First name must contain at least 3 characters.',
  })
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, {
    message: 'First name can only include letters and spaces.',
  })
  @Transform(({ value }) => value?.trim())
  readonly firstName: string;

  @IsOptional()
  @MinLength(3, {
    message: 'Last name must contain at least 3 characters.',
  })
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, {
    message: 'Last name can only include letters and spaces.',
  })
  @Transform(({ value }) => value?.trim())
  readonly lastName?: string;

  @IsEmail()
  readonly email: string;

  @IsStrongPassword({ minLength: 6 })
  readonly password: string;
}
