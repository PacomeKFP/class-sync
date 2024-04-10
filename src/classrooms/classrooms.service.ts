import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from '../teachers/entities/teacher.entity';
import { TeachersService } from '../teachers/teachers.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomsService {
  constructor(
    @InjectModel(Classroom.name)
    private readonly classroomModel: Model<Classroom>,
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<Teacher>,
  ) {}

  async create(createClassroomDto: CreateClassroomDto) {
    const holder = await this.teacherModel.findOne({
      _id: createClassroomDto.holder,
    });
    if (!holder)
      throw new NotFoundException(
        "L'enseignant titulaire spécifié n'existe pas !",
      );
    return this.classroomModel.create(createClassroomDto);
  }

  findAll() {
    return this.classroomModel.find();
  }

  findOne(id: string) {
    return this.classroomModel.findOne({ _id: id });
  }

  update(id: string, updateClassroomDto: UpdateClassroomDto) {
    return this.classroomModel.findOneAndUpdate(
      { _id: id },
      { ...updateClassroomDto },
    );
  }

  remove(id: string) {
    return this.classroomModel.findOneAndDelete({ _id: id });
  }
}
