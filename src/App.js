import {Route,Routes,Link} from 'react-router-dom'
import {Box, Typography} from "@mui/material";
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, Footer} from "./components";
function App() {
  return (
        <Box>
            <Box display={'flex'} >
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/exchanges"} element={<Exchanges />}/>
                    <Route path={"/cryptocurrencies"} element={<Cryptocurrencies />}/>
                    <Route path={"/crypto/:coidId"} element={<CryptoDetails />}/>
                </Routes>
              </Box>
          <Box>
              <Footer/>
          </Box>
      </Box>
  );
}

export default App;
