export interface IUser {
     id: number;
     login: string;
     password: string;
}

export interface ICandidate extends Omit<IUser, "id"> {}
