import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema({ timestamps: true })
export class Teacher {
  @Prop({ required: true, type: String })
  @ApiProperty({ type: String, required: true })
  name: string;

  @Prop({ type: String, default: 'Dr. ' })
  @ApiProperty({ type: String, required: true })
  title: string;

  @Prop({ type: String, default: 'Mathematics' })
  @ApiProperty({ type: String, required: true })
  field: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
