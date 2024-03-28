// L'objet de transfert de données pour creer une nouvelle vente
export interface CreateAuctionDto {
    // Le nom de la vente
    name: string;
    // La description de la vente
    description: string;
    // La monaie utilisée durant la vente
    currency: string;
    // Les informations sur l'administrateur de la vente
    admin: AdminInfo;
    // La vente autorise t'elle les participants anonymes ?
    anonymous: boolean;
    // Date de cloture des inscriptions
    invitationsClosureDate: Date;
    // Date de debut de la vente
    startDate: Date;
}