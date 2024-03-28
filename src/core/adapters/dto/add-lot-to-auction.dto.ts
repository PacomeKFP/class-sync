// L'objet de transfert de données pour ajouter des lots à une vente
export type AddLotToAuctionDto  = Array<{
    // le nom du lot
    name: string;
    // la description du lot
    description: string;
    // la mise à prix du lot
    bounty: number;
    // l'ordre de passage du lot
    rank: number;
    // le temps d'adjudication du lot
    awardTime: number;
}>