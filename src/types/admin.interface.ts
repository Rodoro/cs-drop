export interface Batch {
    id: number;
    title: string;
    game: Game;
    gameId: number;
    languages: Array<Language>;
}

export interface Game {
    id: number;
    name: string;
    steamGameID: number;
}

export interface Language {
    id: number;
    title: string;
    text: string;
}

export interface Staff {
    guid: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    passwordSalt: string;
    ts: string;
    password: string;
    isMainAdmin: boolean;
}