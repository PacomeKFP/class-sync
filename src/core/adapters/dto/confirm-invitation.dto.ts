// L'objet de transfert de données pour confirmer une invitation
export class ConfirmInvitationDto {
    // L'id de l'utilisateur qui souhaite confirmer son autorisation
    userId: string;
    // le choix de l'utilisateur: true pour accepter et false pour refuser
    status: boolean;
    // Savoir si l'utilisateur veut rester anonyme
    isAnonym: boolean;
}