export interface Invitation {
    email: string;
    status: InvitationStatusEnum;
    identifier?: string;
    anonym?: boolean;
}

export enum InvitationStatusEnum {
    PENDING,
    ACCEPTED,
    REJECTED,
    ALL
}