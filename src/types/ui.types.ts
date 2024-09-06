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