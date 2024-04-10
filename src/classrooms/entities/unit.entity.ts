//@Schema({ timestamps: true })
import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Unit {
  @Prop({ required: true, type: String })
  @ApiProperty({ type: String })
  name: string;

  @Prop({ required: true, type: String, unique: true })
  @ApiProperty({ type: String })
  code: string;

  @Prop({
    required: true,
    type: Number,
    unique: true,
    default: 1,
    min: [
      0,
      "Le nombre de credits d'une unité doit être un entier strictement positif",
    ],
  })
  @ApiProperty({ type: Number })
  credits: number;
}
