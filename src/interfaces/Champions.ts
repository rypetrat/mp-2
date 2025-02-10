export interface ChampionData {
    [key: string]: {
        id: string;
        name: string;
        title: string;
        image: {
            full: string;
        };
    };
}