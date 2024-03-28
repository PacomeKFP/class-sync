import { BidInterface } from "./bid.interface";
import {DateString} from "./utils";
import {AuctionInterface} from "./auction.interface";

// interface de Lot avec **Vente** et **Offres(bids)** non populés
export type ILotStr = LotInterface<string, string>

// interface de Lot avec **Vente** et **Offres(bids)** populés
export type ILotFull = LotInterface<AuctionInterface<string>, BidInterface<string, string>>
export interface LotInterface<AuctionType extends  AuctionInterface<string> | string, BidType extends string | BidInterface<string, string>[]> {
  _id?: string;
  name: string;
  description: string;
  bounty: number;
  rank?: number;
  awardTime: number;
  status?: LotStatusEnum;
  bids?: BidType;
  auction: AuctionType;
  readonly createdAt?: DateString;
  readonly updatedAt?: DateString;
  [key: string]: string | DateString | number | undefined | BidType[];
}

export enum LotStatusEnum {
  PENDING,
  ON_SALE,
  SOLD,
}