import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";

import { PageTransProvider } from "./contexts/PageTransContext.tsx";
import { ControlPlayerProvider } from "./contexts/ControlPlayerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <PageTransProvider>
    <GlobalStyles>
      <ControlPlayerProvider>
        <App />
      </ControlPlayerProvider>
    </GlobalStyles>
  </PageTransProvider>
);
