import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import OnlyForMobileCard from "./components/OnlyForMobileCard/OnlyForMobileCard";
import Eduroam from "./pages/Eduroam/Eduroam";
import Home from "./pages/Home/Home";
import ProfMembers from "./pages/ProfMembers/ProfMembers";

import "./App.css";
import { Routers } from "./types/Routers";
import Discord from "./pages/Discord/Discord";

function App() {
  const size = window.innerWidth;

  if (size > 450) {
    return (
      <div className="App">
        <OnlyForMobileCard />
      </div>
    );
  }

  const homeRouter = createHashRouter([
    {
      path: Routers.Home,
      element: <Home />,
    },
    {
      path: Routers.Prof,
      element: <ProfMembers />,
    },
    {
      path: Routers.Eduroam,
      element: <Eduroam />,
    },
    {
      path: Routers.Discord,
      element: <Discord />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={homeRouter} />
    </React.StrictMode>
  );
}

export default App;
