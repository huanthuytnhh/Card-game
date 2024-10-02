import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { PlayGame } from "./playgame";
import Home from "./home";
import "./index.css";
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-react";
import PlayGame from "./playgame";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import { RoomProvider } from "./contexts/RoomContext";
import Header from "./components/Header";
import RoomView from "./components/RoomView";
import { Flex, Spin } from "antd";
// import { ClerkProvider } from "@clerk/clerk-react";
const handleCreateRoom = (newRoom) => {
  // You can store the room in a state or context for future use
  console.log("Room Created: ", newRoom);
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <CreateRoom onCreate={handleCreateRoom} />,
  },
  {
    path: "/playgame",
    element: <PlayGame />,
  },
  {
    path: "/room/:roomName",
    element: <RoomView />,
  },
  {
    path: "/createroom",
    element: (
      <div>
        <Header />
        <CreateRoom className="mt-20" onCreate={handleCreateRoom} />
      </div>
    ),
  },
  {
    path: "/joinroom",
    element: (
      <RoomProvider>
        <JoinRoom />
      </RoomProvider>
    ),
  },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ClerkLoading>
        <Flex align="center" gap="middle">
          <Spin size="large" />
        </Flex>
      </ClerkLoading>
      <ClerkLoaded>
        <RouterProvider router={router} />
      </ClerkLoaded>
    </ClerkProvider>
  </StrictMode>
);
