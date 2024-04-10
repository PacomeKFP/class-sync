import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '../teachers/entities/teacher.entity';
import { ClassroomsService } from './classrooms.service';
import { ClassroomsController } from './classrooms.controller';
import { Classroom, ClassroomSchema } from './entities/classroom.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Classroom.name,
        schema: ClassroomSchema,
      },
      {
        name: Teacher.name,
        schema: TeacherSchema,
      },
    ]),
  ],
  controllers: [ClassroomsController],
  providers: [ClassroomsService],
})
export class ClassroomsModule {}
