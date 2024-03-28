// L'objet de transfert de données pour creer une nouvelle offre
export interface CreateBidDto {
    // L'id du lot sur lequel on veut faire une offre
    lotId: string;
    // L'id de l'utilisateur qui veut faire une offre
    userId: string;
    //Le montant que le participant propose
    amount: number;
}
