import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Classroom } from '../classrooms/entities/classroom.entity';
import { Timetable } from '../classrooms/entities/timetable.entity';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<Teacher>,
    @InjectModel(Classroom.name)
    private readonly classroomModel: Model<Classroom>,
  ) {}

  create(createTeacherDto: CreateTeacherDto) {
    return this.teacherModel.create(createTeacherDto);
  }

  findAll() {
    return this.teacherModel.find();
  }

  findOne(id: string) {
    return this.teacherModel.findOne({ _id: id });
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherModel.findOneAndUpdate(
      { _id: id },
      { ...updateTeacherDto },
      { returnDocument: 'after' },
    );
  }

  remove(id: string) {
    return this.teacherModel.findOneAndDelete(
      { _id: id },
      { returnDocument: 'after' },
    );
  }

  async getTimetable(id: string) {
    const teacher = await this.teacherModel.findOne({ _id: id });
    if (!teacher)
      throw new NotFoundException(`Cet enseignant est inconnu du systeme`);
    // TODO: ecrire l'algorithme pour reconstituer l'emploi de temps d'un enseignant à partir de son id

    const timetable = new Timetable();

    // reccuperer les emploie de temps des salles dans lesquels il enseigne
    this.classroomModel.aggregate([
      // Déplier les jours de la semaine
      {
        $project: {
          timetable: { $objectToArray: '$timeTable' },
        },
      },
      // Déplier les cours pour chaque jour de la semaine
      { $unwind: '$timetable' },
      { $unwind: '$timetable.v' },
      // Filtrer les cours donnés par un enseignant spécifique
      { $match: { 'timetable.v.teacher': id } },
      // Sélectionner les informations pertinentes
      {
        $project: {
          day: '$timetable.k',
          unit: '$timetable.v.unit',
        },
      },
    ]);

    return timetable;
  }
}
