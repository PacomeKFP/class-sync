import {DateString} from "./utils";
import { LotInterface } from "./lot.interface";
import { UserInterface } from "./user.interface";

// Interface des Offre avec ** Lot et Utilisateur non populés**
export type IBidStr = BidInterface<string, string>


// Interface des Offre avec ** Lot et Utilisateur populés**
export type IBidFull = BidInterface<LotInterface<string, string>, UserInterface>
export interface BidInterface<LotType extends string | LotInterface<string, string> , UserType extends string | UserInterface>{
  _id: string;
  lot: LotType;
  user: UserType;
  amount: number;
  date: DateString;
  readonly createdAt?: DateString;
  readonly updatedAt?: DateString;
  [key: string]:
    | string
    | DateString
    | number
    | undefined
    | UserType
    | LotType;
}
