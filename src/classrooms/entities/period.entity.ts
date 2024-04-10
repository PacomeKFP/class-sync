import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";
import {
  Teacher,
  TeacherDocument
} from "../../teachers/entities/teacher.entity";
import { Unit } from "./unit.entity";

@Schema({ timestamps: true })
export class Period {
  @ApiProperty({ type: Unit })
  unit: Unit;

  @ApiProperty({ type: String })
  @Prop({ type: mongoose.Types.ObjectId, ref: Teacher.name })
  teacher: TeacherDocument | string;
}
