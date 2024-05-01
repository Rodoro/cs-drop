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
    SteamGameID: number;
}

export interface Language {
    id: number;
    title: string;
    text: string;
}