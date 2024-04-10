import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true, unique: true, type: String, immutable: true })
  @ApiProperty({ type: String, required: true })
  identificationNumber: string;

  @Prop({ required: true, type: String })
  @ApiProperty({ type: String, required: true })
  name: string;

  @Prop({ required: true, type: String })
  @ApiProperty({ type: String, required: true })
  surname: string;

  @Prop({ required: true, type: Date })
  @ApiProperty({ type: Date, required: true })
  birthday: Date;

  @Prop({ required: true, type: Boolean })
  @ApiProperty({
    type: Boolean,
    required: true,
    description: '0 pour homme et 1 pour femme',
  })
  gender: boolean; // 0 --> Male & 1--> Female

  @Prop({ required: true, type: String })
  @ApiProperty()
  photo: string;

  @Prop({ required: true, type: String })
  @ApiProperty()
  classroom: string;

}

export const StudentSchema = SchemaFactory.createForClass(Student);
