import LolChamps from "./components/LolChamps.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {ChampionData} from "./interfaces/Champions.ts";

const ParentDiv=styled.div`
    width: 100vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
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
          } catch (error) {
              console.error("There was an error:", error);
          }
      }

      fetchData();
  }, []); // Runs only once on mount

  return (
      <ParentDiv>
          <LolChamps champions={champions} />
      </ParentDiv>
  );
}