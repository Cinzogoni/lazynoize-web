import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.tsx";

import { PageTransProvider } from "./provider/PageTransContext.tsx";

createRoot(document.getElementById("root")!).render(
  <PageTransProvider>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </PageTransProvider>
);
