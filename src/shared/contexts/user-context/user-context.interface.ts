import {UserInterface} from "../../../core/types/user.interface";

export interface UserContextInterface {
    // adresse mail de l'utilisateur courant
    currentUser?: UserInterface;
    defineCurrentUser: (user: UserInterface) => void;
}