import LolChamps from "./components/LolChamps.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {ChampionData} from "./interfaces/Champions.ts";

// Defines the styling for the parent div
const ParentDiv=styled.div`
    margin: auto;
    border: 3px rgb(93, 151, 217) solid;
    text-align: center;
`;

export default function App() {
  // State to store champion data as defined by the structure outlined in Champions.ts
  const [champions, setChampions] = useState<ChampionData>({});
  // UseEffect hook for fetching champions
  useEffect(() => {
      async function fetchData(): Promise<void> {
          try {
              // Fetches the data from the ddragon API
              const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
              // Converts to json form
              const data = await rawData.json();
              // Set champions data
              setChampions(data.data);
              // Logs that the data was fetched without error
              console.log("Data fetched successfully");
          } catch (e) {
              // Logs any errors that arise from the data fetch  
              console.log("There was an error: " + e);
          }
      }
      fetchData();
  }, []);
  return (
      // Renders Lolchamps with the data set in champions wrapped in parent div
      <ParentDiv>
          <LolChamps champions={champions} />
      </ParentDiv>
  );
}