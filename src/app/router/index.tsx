import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layout";
import { Home } from "../../pages/home";
import { Favorite } from "../../pages/favorite";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/favorite",
          element: <Favorite />,
        },
      ],
    },
  ],
  {
    basename: "/frontend-challenge", // Здесь указываем базовый путь
  }
);
