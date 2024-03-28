import { Toaster } from "sonner";
import ContextsProvider from "../shared/contexts/ContextProvider";
import AppRouter from "./router/router";
import Utils from "./helpers/utils";

function App() {
  /**
   * Set Utils.lang to "fr-FR" for French language
   */

  Utils.lang = "fr-FR";
  //toast.info(`Connecté en tant que ${import.meta.env.VITE_CURRENT_USER_MAIL}`)
  return (
    <div id="app">
      <ContextsProvider>
        <AppRouter />
      </ContextsProvider>

      <Toaster closeButton={true} position="bottom-right" />
    </div>
  );
}

export default App;
