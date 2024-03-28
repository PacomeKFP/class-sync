import { DateString } from "./utils";

export interface UserInterface {
  _id: string;
  name: string;
  email: string;
  token?: string;
  readonly createdAt?: DateString;
  readonly updatedAt?: DateString;
  [key: string]: string | DateString | number | undefined;
}

export class User implements UserInterface{


}
