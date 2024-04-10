import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Classroom } from '../classrooms/entities/classroom.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<Student>,

    @InjectModel(Classroom.name)
    private readonly classroomModel: Model<Classroom>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    createStudentDto.identificationNumber =
      createStudentDto.identificationNumber.toUpperCase();

    const student = await this.studentModel.findOne({
      identificationNumber: createStudentDto.identificationNumber,
    });

    if (student)
      throw new BadRequestException(
        'Un etudiant avec le meme matricule existe déja',
      );

    const classroom = await this.classroomModel.findOneAndUpdate({
      _id: student.classroom,
    });

    if (!classroom)
      throw new BadRequestException("la classe specifiée n'existe pas");
    const createdStudent = await this.studentModel.create(createStudentDto);

    await this.classroomModel.findOneAndUpdate(
      { _id: createStudentDto.classroom },
      {
        $push: {
          students: createdStudent._id.toString('hex'),
        },
      },
    );
    return createdStudent;
  }

  findAll() {
    return this.studentModel.find();
  }

  findOne(id: string) {
    return this.studentModel.findOne({ _id: id });
  }

  async findByIdentificationNumber(identificationNumber: string) {
    return this.studentModel.findOne({
      identificationNumber: identificationNumber.toUpperCase(),
    });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.findOneAndUpdate(
      { _id: id },
      { ...updateStudentDto },
      { returnDocument: 'after' },
    );
  }

  async remove(id: string) {
    return this.studentModel.deleteOne(
      { _id: id },
      { returnDocument: 'after' },
    );
  }
}
