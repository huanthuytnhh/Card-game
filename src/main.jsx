// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import { PlayGame } from "./playgame";
// import Home from "./home";
// import "./index.css";
// import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-react";
// import PlayGame from "./playgame";
// import CreateRoom from "./components/CreateRoom";
// import JoinRoom from "./components/JoinRoom";
// import { RoomProvider } from "./contexts/RoomContext";
// import Header from "./components/Header";
// import RoomView from "./components/RoomView";
// import { Flex, Spin } from "antd";
// // import { ClerkProvider } from "@clerk/clerk-react";
// const handleCreateRoom = (newRoom) => {
//   // You can store the room in a state or context for future use
//   console.log("Room Created: ", newRoom);
// };
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "/",
//     element: <CreateRoom onCreate={handleCreateRoom} />,
//   },
//   {
//     path: "/playgame",
//     element: <PlayGame />,
//   },
//   {
//     path: "/room/:roomName",
//     element: <RoomView />,
//   },
//   {
//     path: "/createroom",
//     element: (
//       <div>
//         <Header />
//         <CreateRoom className="mt-20" onCreate={handleCreateRoom} />
//       </div>
//     ),
//   },
//   {
//     path: "/joinroom",
//     element: (
//       <RoomProvider>
//         <JoinRoom />
//       </RoomProvider>
//     ),
//   },
// ]);
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
//       <ClerkLoading>
//         <Flex align="center" gap="middle">
//           <Spin size="large" />
//         </Flex>
//       </ClerkLoading>
//       <ClerkLoaded>
//         <RouterProvider router={router} />
//       </ClerkLoaded>
//     </ClerkProvider>
//   </StrictMode>
// );
import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-react";
import { Flex, Spin } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import Friends from "./pages/Friends"; // Import your friends page
import GameRoom from "./pages/GameRoom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage"; // Import your profile page
import ProtectedRoute from "./routes/ProtectedRoute"; // Import ProtectedRoute
import UnauthorizedRoute from "./routes/UnauthorizedRoute"; // Import ProtectedRoute
import JoinRoom from "./components/JoinRoom";
import CreateRoom from "./components/CreateRoom";
import RoomView from "./components/RoomView";

const handleCreateRoom = (newRoom) => {
  // You can store the room in a state or context for future use
  console.log("Room Created: ", newRoom);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <HomePage />
      </div>
    ),
  },
  {
    path: "/gameroom",
    // Protect this route
    element: <ProtectedRoute component={GameRoom} />,
  },
  {
    path: "/joinroom",
    // Protect this route
    element: <ProtectedRoute component={JoinRoom} />,
  },
  {
    path: "/createroom",
    // Protect this route
    element: <ProtectedRoute component={CreateRoom} />,
  },

  {
    path: "/friends",
    // Protect this route
    element: <ProtectedRoute component={Friends} />,
  },
  {
    path: "/profile",
    // Protect this route
    element: <ProtectedRoute component={ProfilePage} />,
  },
  {
    path: "/room/:roomName", // or "/room/:id" if using room IDs
    element: <ProtectedRoute component={RoomView} />, // Use RoomView without arguments
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
