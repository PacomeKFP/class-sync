import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  Student,
  StudentDocument,
} from '../../students/entities/student.entity';
import {
  Teacher,
  TeacherDocument,
} from '../../teachers/entities/teacher.entity';
import { Timetable } from './timetable.entity';

export type ClassroomDocument = HydratedDocument<Classroom>;

@Schema({ timestamps: true })
export class Classroom {
  @Prop({ required: true, type: String, unique: true })
  @ApiProperty({ type: String })
  name: string;

  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: Teacher.name })
  @ApiProperty({ type: String })
  holder: TeacherDocument | string;

  @Prop({
    required: true,
    default: [],
    type: [mongoose.Types.ObjectId],
    ref: Student.name,
  })
  @ApiProperty({ type: [String] })
  students: StudentDocument[] | string[];

  @Prop({ required: true, type: Timetable, ref: Timetable.name })
  @ApiProperty({ type: Timetable })
  timeTable: Timetable;
}

export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
