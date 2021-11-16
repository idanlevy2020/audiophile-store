import "./App.css";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import Footer from "../layout/Footer/Footer";

import StoreProvider from "../contexts/StoreContext";

function App() {
   return (
      <div className="App">
         <StoreProvider>
            <Header/>
            <Main />
            <Footer />
         </StoreProvider>
      </div>
   );
}

export default App;
