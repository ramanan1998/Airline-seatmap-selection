import seatMap from "./seatMap.json";
import Deck from './components/Deck';
import "./App.css";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{display: "flex", justifyContent: "center"}}>
      {seatMap.data[0].decks.map((deck, i) => (
        <Deck deck={deck} key={i} />
      ))}
    </Box>
  );
}
export default App;
