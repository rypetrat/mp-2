import styled from "styled-components";
import {ChampionData} from "../interfaces/Champions.ts";

const AllChampsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const ChampionDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    text-align: center;
`;

export default function LolChamps(props: { champions: ChampionData }) {
    return (
        <AllChampsDiv>
            {Object.values(props.champions).map((champion) => (
                <ChampionDiv key={champion.id}>
                    <h1>{champion.name}</h1>
                    <p>{champion.title}</p>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`} alt={champion.name} />
                </ChampionDiv>
            ))}
        </AllChampsDiv>
    );
}