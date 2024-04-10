import { ApiProperty } from '@nestjs/swagger';
import { Period } from './period.entity';

export class Timetable {
  //  @Prop({
  //    required: true,
  //    type: [Period],
  //    ref: Period.name,
  //  })
  @ApiProperty({ type: [Period], minLength: 4, maxLength: 4 })
  monday: [Period, Period, Period, Period];

  @ApiProperty({ type: [Period], minLength: 4, maxLength: 4 })
  tuesday: [Period, Period, Period, Period];

  @ApiProperty({ type: [Period], minLength: 4, maxLength: 4 })
  wednesday: [Period, Period, Period, Period];

  @ApiProperty({ type: [Period], minLength: 4, maxLength: 4 })
  thursday: [Period, Period, Period, Period];

  @ApiProperty({ type: [Period], minLength: 4, maxLength: 4 })
  friday: [Period, Period, Period, Period];
}
