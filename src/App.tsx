import LolChamps from "./components/LolChamps.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {ChampionData} from "./interfaces/Champions.ts";

const ParentDiv=styled.div`
    margin: auto;
    border: 3px rgb(93, 151, 217) solid;
    text-align: center;
`;

export default function App() {
  // State to store champion data
  const [champions, setChampions] = useState<ChampionData>({});
  // useEffect Hook for fetching champion names
  useEffect(() => {
      async function fetchData(): Promise<void> {
          try {
              const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
              const data = await rawData.json();
              // Set champions data
              setChampions(data.data);
              console.log("Data fetched successfully");
          } catch (e) {
              console.log("There was an error: " + e);
          }
      }
      fetchData();
  }, []);
  return (
      <ParentDiv>
          <LolChamps champions={champions} />
      </ParentDiv>
  );
}