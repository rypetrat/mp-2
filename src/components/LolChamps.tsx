import styled from "styled-components";
import {ChampionData} from "../interfaces/Champions.ts";

const AllChampsDiv=styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1%;
    background-color: rgb(56, 32, 237);
`;

const ChampionDiv=styled.div`
    display: flex;
    flex-direction: column;   
    max-width: 100%;
    margin: 1%;
    padding: 3%;
    border: 3px rgb(93, 151, 217) solid;
    color: white;
    background-color:rgb(26, 26, 26);
    text-align: center;
`;

const ChampionName=styled.h1`
    margin-top: 0;
`;

const ChampionTitle=styled.h3`
    margin-bottom: 0;
`;

const ChampionInfo=styled.p`
    font-size: calc(5px + 0.5vw);
`;

const Info=styled.b`
    color: rgb(93, 151, 217);
`;

export default function LolChamps(props: { champions: ChampionData }) {
    return (
        <AllChampsDiv>
            {Object.values(props.champions).map((champion) => (
                <ChampionDiv key={champion.id}>
                    <ChampionName>{champion.name}</ChampionName>
                    <div>
                        <img src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`} alt={champion.name} />
                    </div>
                    <ChampionTitle>{champion.title}</ChampionTitle>
                    <ChampionInfo>
                        {champion.blurb}
                    </ChampionInfo>
                    <div>
                        <Info>Class</Info>: {champion.stats.attackrange <= 200 ? "Melee" : "Ranged"} {champion.tags.join("/")}
                    </div>
                    <div>
                        <Info>Damage type</Info>: {champion.info.attack > champion.info.magic ? "Physical" : champion.info.attack < champion.info.magic ? "Magic" : "Hybrid"}
                    </div>
                    <div>
                        <Info>Tankiness</Info>: {champion.info.defense}/10
                    </div>
                    <div>
                        <Info>Resource</Info>: {champion.partype}
                    </div>
                    <div>
                        <Info>Diffuculty</Info>: {champion.info.difficulty <= 5 ? "Easy" : champion.info.difficulty < 8 ? "Medium" : "Hard"}
                    </div>
                </ChampionDiv>
            ))}
        </AllChampsDiv>
    );
}