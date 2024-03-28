import {AdminInfo, DateString} from "./utils";
import { LotInterface } from "./lot.interface";
import { UserInterface } from "./user.interface";
import {Invitation} from "./invitations.interface";

// Interface de vente avec **Lots non populés**
export type IAuctionStr = AuctionInterface<string>;

// interface de vente les **lots populés**
export type IAuctionPop = AuctionInterface<LotInterface<string, string>[]>;

// Interface generique des ventes
export interface AuctionInterface<LotType extends string | LotInterface<string, string>[]> {
  _id?: string;
  name: string;
  description: string;
  currency: string;
  status: AuctionStatusEnum;
  admin: AdminInfo;
  anonymous: boolean;
  invitationsClosureDate: DateString;
  startDate: DateString
  invitations: Invitation[]
  lots: LotType;
  readonly createdAt?: DateString;
  readonly updatedAt?: DateString;
  [key: string]:
      |Invitation[]
      |LotType
      | string
      | DateString
      | number
      | boolean
      | undefined
      | string[]
      | UserInterface[]
      | AdminInfo;
}



export enum AuctionStatusEnum {
  PENDING,
  ON_GOING,
  COMPLETED,
  ALL
}

