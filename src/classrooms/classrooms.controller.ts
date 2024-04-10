import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { ClassroomsService } from "./classrooms.service";
import { CreateClassroomDto } from "./dto/create-classroom.dto";
import { UpdateClassroomDto } from "./dto/update-classroom.dto";

@Controller("classrooms")
@ApiTags("Classrooms")
export class ClassroomsController {
  constructor(private readonly classroomsService: ClassroomsService) {
  }

  @Post()
  @ApiBody({ type: CreateClassroomDto })
  create(@Body() createClassroomDto: CreateClassroomDto) {
    return this.classroomsService.create(createClassroomDto);
  }

  @Get()
  async findAll() {
    return this.classroomsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.classroomsService.findOne(id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateClassroomDto: UpdateClassroomDto
  ) {
    return this.classroomsService.update(id, updateClassroomDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string) {
    return this.classroomsService.remove(id);
  }
}
