export interface ChampionData {
    [key: string]: {
        id: string;
        name: string;
        title: string;
        image: {
            full: string;
        };
        blurb: string;
        tags: string[];
        info: {
            attack: number;
            defense: number;
            magic: number; 
            difficulty: number;
        };
        partype: string;
        stats: {
            attackrange: number;
        };
    };
}