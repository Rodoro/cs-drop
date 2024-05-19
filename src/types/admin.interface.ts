export interface Batch {
    id: number;
    title: string;
    game: Game;
    gameId: number;
    languages: Array<Language>;
    sort: number;
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

export interface Item {
    id: number,
    game: string,
    title: string,
    imageUrl: string,
    gameId: number,
    gameTitleRu: string,
    gameTitleEn: string,
    price: number,
    rarity: string,
    quality: string
}

export interface User {
    id: number,
    uUid: string,
    username: string,
    steamId: string,
    steamCreated: string,
    link: string
}

export interface LootCases {
    id: number,
    game: string,
    batch: string,
    title: string,
    price: 0,
    netPrice: 0,
    isVisible: boolean,
}