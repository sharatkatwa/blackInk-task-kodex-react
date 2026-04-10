import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ArticleProvider } from "./context/ArticleContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ArticleProvider>
      <AppRoutes />
    </ArticleProvider>
  </AuthProvider>,
);
