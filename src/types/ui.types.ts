export interface ICase {
    id: string;
    image: string | null;
    imageHover: string | null;
    price: number;
    title: string;
}

export interface IItem {
    price: number;
    image: string;
    rarity: string;
    quality: string;
    chance: number;
    weaponName: string;
    skinName: string;
}

export interface IBathe {
    title: string;
    lootCases: ICase[]
}

export interface IItemMathRating {
    number: number;
    title: string;
    value?: number;
    balance?: number;
}

export interface IItemMathCard {
    time: string;
    teams: ITeameMath[];
    isLive: boolean;
    current: string;
    yourBid: string;
}

export interface ITeameMath {
    name: string;
    iconUrl: string;
}

export interface IItemMathPrev {
    time: string;
    teams: ITeameMathPrev[];
    isLive: boolean;
    current: string;
    yourBid: string;
}

export interface ITeameMathPrev {
    name: string;
    iconUrl: string;
    count: number;
}

export interface IItemMatchMy {
    time: string;
    teams: ITeameMath[];
    current: number;
    bets: IBet[]
}

export interface IBet {
    count: string
    ountcome: string
    win: string
}