import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomModal from "./RoomModal"; // Import the RoomModal component
import { Button } from "./ui/button";

function Header() {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();
  const handleCreateRoom = () => {
    // Logic for creating a room
    navigate("/createroom");
    setModalOpen(false); // Close modal after action
  };

  const handleJoinRoom = () => {
    // Logic for joining a room
    navigate("/joinroom");
    setModalOpen(false); // Close modal after action
  };
  const handleHome = () => {
    // Logic for joining a room
    navigate("/");
    // Close modal after action
  };
  return (
    <div className="flex items-start w-full justify-between shadow-lg p-5">
      <img src="/logoipsum-325.svg" alt="Logo web" width={150} height={100} />
      <ul className="hidden md:flex gap-8">
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all">
          Search
        </li>
        <li
          className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all "
          onClick={handleHome}
        >
          Home
        </li>
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all">
          Shop
        </li>
        <li className="font-medium hover:scale-105 cursor-pointer hover:text-primary transition-all">
          Friends
        </li>
      </ul>
      {isSignedIn ? (
        <div className="flex items-center">
          <UserButton />
          <Button className="ml-2" onClick={() => setModalOpen(true)}>
            Play
          </Button>
        </div>
      ) : (
        <div className="flex space-x-2">
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button
              className="bg-green-500 text-white px-4 py-2 rounded"
              // Open modal when Play is clicked
            >
              Sign up
            </Button>
          </SignUpButton>
        </div>
      )}

      {/* Room Modal */}
      <RoomModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)} // Close modal handler
        onCreateRoom={handleCreateRoom} // Create room handler
        onJoinRoom={handleJoinRoom} // Join room handler
      />
    </div>
  );
}

export default Header;
