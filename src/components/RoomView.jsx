import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

// Importing all card images
import ace_of_spades from "../assets/images/cards/ace_of_spades.svg";
import king_of_spades from "../assets/images/cards/king_of_spades.svg";
import queen_of_spades from "../assets/images/cards/queen_of_spades.svg";
import jack_of_spades from "../assets/images/cards/jack_of_spades.svg";
import ten_of_spades from "../assets/images/cards/10_of_spades.svg";
import nine_of_spades from "../assets/images/cards/9_of_spades.svg";
import eight_of_spades from "../assets/images/cards/8_of_spades.svg";
import seven_of_spades from "../assets/images/cards/7_of_spades.svg";
import six_of_spades from "../assets/images/cards/6_of_spades.svg";
import five_of_spades from "../assets/images/cards/5_of_spades.svg";
import four_of_spades from "../assets/images/cards/4_of_spades.svg";
import three_of_spades from "../assets/images/cards/3_of_spades.svg";
import two_of_spades from "../assets/images/cards/2_of_spades.svg";

import ace_of_hearts from "../assets/images/cards/ace_of_hearts.svg";
import king_of_hearts from "../assets/images/cards/king_of_hearts.svg";
import queen_of_hearts from "../assets/images/cards/queen_of_hearts.svg";
import jack_of_hearts from "../assets/images/cards/jack_of_hearts.svg";
import ten_of_hearts from "../assets/images/cards/10_of_hearts.svg";
import nine_of_hearts from "../assets/images/cards/9_of_hearts.svg";
import eight_of_hearts from "../assets/images/cards/8_of_hearts.svg";
import seven_of_hearts from "../assets/images/cards/7_of_hearts.svg";
import six_of_hearts from "../assets/images/cards/6_of_hearts.svg";
import five_of_hearts from "../assets/images/cards/5_of_hearts.svg";
import four_of_hearts from "../assets/images/cards/4_of_hearts.svg";
import three_of_hearts from "../assets/images/cards/3_of_hearts.svg";
import two_of_hearts from "../assets/images/cards/2_of_hearts.svg";

import ace_of_diamonds from "../assets/images/cards/ace_of_diamonds.svg";
import king_of_diamonds from "../assets/images/cards/king_of_diamonds.svg";
import queen_of_diamonds from "../assets/images/cards/queen_of_diamonds.svg";
import jack_of_diamonds from "../assets/images/cards/jack_of_diamonds.svg";
import ten_of_diamonds from "../assets/images/cards/10_of_diamonds.svg";
import nine_of_diamonds from "../assets/images/cards/9_of_diamonds.svg";
import eight_of_diamonds from "../assets/images/cards/8_of_diamonds.svg";
import seven_of_diamonds from "../assets/images/cards/7_of_diamonds.svg";
import six_of_diamonds from "../assets/images/cards/6_of_diamonds.svg";
import five_of_diamonds from "../assets/images/cards/5_of_diamonds.svg";
import four_of_diamonds from "../assets/images/cards/4_of_diamonds.svg";
import three_of_diamonds from "../assets/images/cards/3_of_diamonds.svg";
import two_of_diamonds from "../assets/images/cards/2_of_diamonds.svg";

import ace_of_clubs from "../assets/images/cards/ace_of_clubs.svg";
import king_of_clubs from "../assets/images/cards/king_of_clubs.svg";
import queen_of_clubs from "../assets/images/cards/queen_of_clubs.svg";
import jack_of_clubs from "../assets/images/cards/jack_of_clubs.svg";
import ten_of_clubs from "../assets/images/cards/10_of_clubs.svg";
import nine_of_clubs from "../assets/images/cards/9_of_clubs.svg";
import eight_of_clubs from "../assets/images/cards/8_of_clubs.svg";
import seven_of_clubs from "../assets/images/cards/7_of_clubs.svg";
import six_of_clubs from "../assets/images/cards/6_of_clubs.svg";
import five_of_clubs from "../assets/images/cards/5_of_clubs.svg";
import four_of_clubs from "../assets/images/cards/4_of_clubs.svg";
import three_of_clubs from "../assets/images/cards/3_of_clubs.svg";
import two_of_clubs from "../assets/images/cards/2_of_clubs.svg";
import back_of_card_image from "../assets/images/cards/back_of_card.svg";
import Thanh from "../assets/images/avatars/Thanh.png";
import Quan from "../assets/images/avatars/Quan.png";
import Quang from "../assets/images/avatars/Quang.png";
import Duy from "../assets/images/avatars/Duy.png";
import menuIcon from "../assets/images/icons/menu-bar.png";
import ShuffleCardLoader from "./loader/ShuffleCardLoader";
import AvatarGroup from "./ui/AvatarGroup";
import { Switch } from "./ui/switch";
const imageMap = {
  "Ace of spades": ace_of_spades,
  "King of spades": king_of_spades,
  "Queen of spades": queen_of_spades,
  "Jack of spades": jack_of_spades,
  "10 of spades": ten_of_spades,
  "9 of spades": nine_of_spades,
  "8 of spades": eight_of_spades,
  "7 of spades": seven_of_spades,
  "6 of spades": six_of_spades,
  "5 of spades": five_of_spades,
  "4 of spades": four_of_spades,
  "3 of spades": three_of_spades,
  "2 of spades": two_of_spades,

  "Ace of hearts": ace_of_hearts,
  "King of hearts": king_of_hearts,
  "Queen of hearts": queen_of_hearts,
  "Jack of hearts": jack_of_hearts,
  "10 of hearts": ten_of_hearts,
  "9 of hearts": nine_of_hearts,
  "8 of hearts": eight_of_hearts,
  "7 of hearts": seven_of_hearts,
  "6 of hearts": six_of_hearts,
  "5 of hearts": five_of_hearts,
  "4 of hearts": four_of_hearts,
  "3 of hearts": three_of_hearts,
  "2 of hearts": two_of_hearts,

  "Ace of diamonds": ace_of_diamonds,
  "King of diamonds": king_of_diamonds,
  "Queen of diamonds": queen_of_diamonds,
  "Jack of diamonds": jack_of_diamonds,
  "10 of diamonds": ten_of_diamonds,
  "9 of diamonds": nine_of_diamonds,
  "8 of diamonds": eight_of_diamonds,
  "7 of diamonds": seven_of_diamonds,
  "6 of diamonds": six_of_diamonds,
  "5 of diamonds": five_of_diamonds,
  "4 of diamonds": four_of_diamonds,
  "3 of diamonds": three_of_diamonds,
  "2 of diamonds": two_of_diamonds,

  "Ace of clubs": ace_of_clubs,
  "King of clubs": king_of_clubs,
  "Queen of clubs": queen_of_clubs,
  "Jack of clubs": jack_of_clubs,
  "10 of clubs": ten_of_clubs,
  "9 of clubs": nine_of_clubs,
  "8 of clubs": eight_of_clubs,
  "7 of clubs": seven_of_clubs,
  "6 of clubs": six_of_clubs,
  "5 of clubs": five_of_clubs,
  "4 of clubs": four_of_clubs,
  "3 of clubs": three_of_clubs,
  "2 of clubs": two_of_clubs,
};

const generateCards = () => {
  const suits = ["spades", "hearts", "diamonds", "clubs"];
  const values = [
    "Ace",
    "King",
    "Queen",
    "Jack",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];

  const allCards = [];

  for (let suit of suits) {
    for (let value of values) {
      allCards.push({
        id: `${value} of ${suit}`, // Unique ID for each card
        value: value,
        image: imageMap[`${value} of ${suit}`], // Use the imageMap to get the correct image
      });
    }
  }

  return allCards.sort(() => Math.random() - 0.5).slice(0, 13); // Randomly select 13 cards
};
// const RoomView = () => {
//   const { roomName } = useParams();
//   const [gameStarted, setGameStarted] = useState(false);
//   const [players, setPlayers] = useState([
//     { id: 1, hand: generateCards(), movedCards: [] }, // Player 1 (North)
//     { id: 2, hand: generateCards(), movedCards: [] }, // Player 2 (East)
//     { id: 3, hand: generateCards(), movedCards: [] }, // Player 3 (South)
//     { id: 4, hand: generateCards(), movedCards: [] }, // Player 4 (West)
//   ]);
//   const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
//   const [countdown, setCountdown] = useState(15); // Thay đổi thời gian đếm ngược tại đây

//   useEffect(() => {
//     let timer;
//     if (gameStarted && countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown((prev) => prev - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       handleNextTurn();
//     }

//     return () => clearInterval(timer);
//   }, [gameStarted, countdown]);

//   const handleStartGame = () => {
//     if (players.length < 4) {
//       alert("Not enough players. Need at least 4 players to start the game.");
//       return;
//     }
//     setGameStarted(true);
//     setCountdown(15); // Đặt lại đếm ngược khi bắt đầu trò chơi
//   };

//   const handleNextTurn = () => {
//     const totalMovedCards = players.flatMap(
//       (player) => player.movedCards
//     ).length;

//     // Nếu số lượng lá bài đã di chuyển vượt quá 13, reset về trạng thái rỗng
//     const newPlayers = players.map((player) => ({
//       ...player,
//       movedCards: totalMovedCards > 8 ? [] : player.movedCards, // Reset nếu vượt quá 13 lá
//     }));

//     setPlayers(newPlayers); // Cập nhật trạng thái người chơi
//     setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
//     setCountdown(15); // Đặt lại đếm ngược cho lượt mới
//   };

//   const handleMoveCards = (cards) => {
//     const newPlayers = [...players];
//     const currentPlayer = newPlayers[currentPlayerIndex];

//     currentPlayer.hand = currentPlayer.hand.filter(
//       (card) => !cards.includes(card)
//     );

//     currentPlayer.movedCards.push(...cards);
//     setPlayers(newPlayers);

//     handleNextTurn();
//   };

//   return (
//     <div className="flex flex-col items-center h-screen bg-gray-100">
//       <Header />
//       {gameStarted ? (
//         <>
//           {/* Thanh trạng thái hiển thị lượt và đếm ngược */}
//           <div className="flex items-center justify-between w-3/5 p-4 h-12 shadow-xl bg-slate-200 text-black rounded-lg">
//             <h2 className="text-xl font-semibold">
//               Current Turn: Player {currentPlayerIndex + 1}
//             </h2>
//             <div className="flex items-center">
//               <div className="relative w-10 h-10">
//                 <svg
//                   className="absolute inset-0 w-full h-full"
//                   viewBox="0 0 36 36"
//                 >
//                   <path
//                     className="text-gray-300"
//                     fill="none"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     strokeDasharray="100, 100"
//                     d="M18 2 A16 16 0 1 1 18 34 A16 16 0 1 1 18 2"
//                   />
//                   <path
//                     className="text-green-500"
//                     fill="none"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     strokeDasharray={`${(countdown / 15) * 100}, 100`}
//                     d="M18 2 A16 16 0 1 1 18 34 A16 16 0 1 1 18 2"
//                   />
//                 </svg>
//                 <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
//                   {countdown}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <GameBoard
//             players={players}
//             currentPlayerIndex={currentPlayerIndex}
//             onMoveCards={handleMoveCards}
//           />
//         </>
//       ) : (
//         <>
//           <h1 className="text-4xl font-bold mb-0">Welcome to {roomName}!</h1>
//           <p className="text-lg mb-8">
//             The game will start soon. Waiting for players to join...
//           </p>
//           <div className="flex flex-col items-center space-y-4">
//             <button
//               onClick={handleStartGame}
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg"
//             >
//               Start Game
//             </button>
//             <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
//               Leave Room
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
const RoomView = () => {
  const { roomName } = useParams();
  const [gameStarted, setGameStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [players, setPlayers] = useState([
    {
      id: 1,
      hand: generateCards(),
      movedCards: [],
      avatar: Thanh,
    }, // Update with actual avatar paths
    {
      id: 2,
      hand: generateCards(),
      movedCards: [],
      avatar: Quan,
    },
    {
      id: 3,
      hand: generateCards(),
      movedCards: [],
      avatar: Quang,
    },
    {
      id: 4,
      hand: generateCards(),
      movedCards: [],
      avatar: Duy,
    },
  ]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [countdown, setCountdown] = useState(15);

  const handleStartGame = () => {
    if (players.length < 4) {
      alert("Not enough players. Need at least 4 players to start the game.");
      return;
    }
    // Show loader for 5 seconds
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setGameStarted(true);
      setCountdown(15); // Đặt lại đếm ngược khi bắt đầu trò chơi
    }, 5000); // Hide loader and start game after 5 seconds
  };
  const handleNextTurn = () => {
    const totalMovedCards = players.flatMap(
      (player) => player.movedCards
    ).length;

    // Nếu số lượng lá bài đã di chuyển vượt quá 13, reset về trạng thái rỗng
    const newPlayers = players.map((player) => ({
      ...player,
      movedCards: totalMovedCards > 7 ? [] : player.movedCards, // Reset nếu vượt quá 13 lá
    }));

    setPlayers(newPlayers); // Cập nhật trạng thái người chơi
    setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
    setCountdown(15); // Đặt lại đếm ngược cho lượt mới
  };
  const handleMoveCards = (cards) => {
    const newPlayers = [...players];
    const currentPlayer = newPlayers[currentPlayerIndex];

    currentPlayer.hand = currentPlayer.hand.filter(
      (card) => !cards.includes(card)
    );

    currentPlayer.movedCards.push(...cards);
    setPlayers(newPlayers);

    handleNextTurn();
  };
  const toggleHeader = () => {
    setIsHeaderVisible((prev) => !prev); // Đảo ngược trạng thái hiển thị của header
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      {/* <button
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg z-10"
        onClick={toggleHeader}
      >
        {isHeaderVisible ? "Hide Header" : "Show Header"}
      </button> */}
      <div
        className={`fixed rounded-lg z-10 focus:outline-none ${
          isHeaderVisible ? "top-7 right-32" : "top-4 right-4"
        } `}
      >
        <div className="flex gap-2">
          <img src={menuIcon} alt="" className="w-7 h-7" />
          <Switch
            className="h-7"
            //   className={`fixed rounded-lg z-10 focus:outline-none ${
            //     isHeaderVisible ? "top-7 right-32" : "top-4 right-4"
            //   } `}
            onClick={toggleHeader}
          />
        </div>
      </div>

      {isHeaderVisible && <Header />}
      {showLoader ? (
        <ShuffleCardLoader /> // Show loader when showLoader is true
      ) : gameStarted ? (
        <>
          {/* Thanh trạng thái hiển thị lượt và đếm ngược */}
          <div className="flex items-center justify-between w-3/5 p-4 h-12 shadow-xl bg-gray-200 text-black rounded-lg mt-[5px] border-white border-2">
            <h2 className="text-xl font-semibold">
              Current Turn: Player {currentPlayerIndex + 1}
            </h2>
            <div className="flex items-center">
              <div className="relative w-10 h-10">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-gray-300"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    strokeDasharray="100, 100"
                    d="M18 2 A16 16 0 1 1 18 34 A16 16 0 1 1 18 2"
                  />
                  <path
                    className="text-green-500"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    strokeDasharray={`${(countdown / 15) * 100}, 100`}
                    d="M18 2 A16 16 0 1 1 18 34 A16 16 0 1 1 18 2"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  {countdown}
                </div>
              </div>
            </div>
          </div>
          <GameBoard
            players={players}
            currentPlayerIndex={currentPlayerIndex}
            onMoveCards={handleMoveCards}
          />
        </>
      ) : (
        <div className="mb-5">
          <h1 className="text-4xl font-bold mb-0">Welcome to {roomName}!</h1>
          <p className="text-lg mb-8">
            The game will start soon. Waiting for players to join...
          </p>
          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={handleStartGame}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Start Game
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg ">
              Leave Room
            </button>
          </div>
        </div>
      )}
      <AvatarGroup
        players={players}
        currentPlayerIndex={currentPlayerIndex}
        // className="mt-20"
      />
    </div>
  );
};
const GameBoard = ({ players = [], currentPlayerIndex, onMoveCards }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const toggleCardSelection = (card) => {
    if (selectedCards.includes(card)) {
      setSelectedCards(selectedCards.filter((c) => c !== card));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleMove = () => {
    if (selectedCards.length > 0) {
      onMoveCards(selectedCards);
      setSelectedCards([]);
    }
  };

  // Ensure players array exists and has at least 4 players
  if (!players || players.length < 4) {
    return (
      <div>
        Error: Not enough players. Need at least 4 players to start the game.
      </div>
    );
  }

  return (
    <div className="grid grid-rows-4 grid-cols-4 h-4/5 w-screen gap-4">
      {/* Player 3 - North */}
      <div className="flex justify-center items-center row-start-1 col-start-2 col-span-2">
        <PlayerHand
          player={players[2]}
          isCurrentTurn={currentPlayerIndex === 2}
          onCardSelect={toggleCardSelection}
          selectedCards={selectedCards}
          direction="horizontal"
        />
      </div>

      {/* Player 2 - East */}
      <div className="flex justify-center items-center row-start-2 col-start-4 row-span-2">
        <PlayerHand
          player={players[1]}
          isCurrentTurn={currentPlayerIndex === 1}
          onCardSelect={toggleCardSelection}
          selectedCards={selectedCards}
          direction="vertical"
        />
      </div>

      {/* Player 1 - South */}
      <div className="flex justify-center items-center row-start-4 col-start-2 col-span-2">
        <PlayerHand
          player={players[0]}
          isCurrentTurn={currentPlayerIndex === 0}
          onCardSelect={toggleCardSelection}
          selectedCards={selectedCards}
          direction="horizontal"
        />
      </div>

      {/* Player 4 - West */}
      <div className="flex justify-center items-center row-start-2 col-start-1 row-span-2">
        <PlayerHand
          player={players[3]}
          isCurrentTurn={currentPlayerIndex === 3}
          onCardSelect={toggleCardSelection}
          selectedCards={selectedCards}
          direction="vertical"
        />
      </div>

      {/* Moved Cards - Center */}
      <div
        className="flex flex-col justify-center items-center row-start-2 col-start-2 col-span-2 row-span-2 h-full min-h-full"
        style={{
          border: "20px solid white",
          borderRadius: "30px",
          padding: "10px",
        }} // Áp dụng viền và bo tròn bên ngoài
      >
        <h3 className="text-xl font-semibold">Moved Cards:</h3>
        <div className="flex flex-wrap justify-center gap-0 w-11/12 h-1/2 border-2 shadow-lg rounded-lg p-4">
          {players
            .flatMap((player) => player.movedCards)
            .map((card) => (
              <div key={card.id} className="px-2 rounded-lg text-center">
                <img src={card.image} alt={card.value} className="w-12 h-18" />
              </div>
            ))}
        </div>
        <button
          onClick={handleMove}
          className={`mt-4 bg-green-500 text-white px-6 py-2 rounded-lg ${
            selectedCards.length === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={selectedCards.length === 0}
        >
          Move Selected Cards
        </button>
      </div>
    </div>
  );
};

const PlayerHand = ({
  player,
  isCurrentTurn,
  onCardSelect,
  selectedCards,
  direction,
}) => {
  return (
    <div className="flex flex-col items-center min-w-full">
      <h2 className="text-lg font-semibold mb-2">Player {player.id}</h2>
      <div
        className={`flex ${
          direction === "horizontal"
            ? "flex-row -space-x-5"
            : "flex-col -space-y-14"
        }`}
      >
        {player.hand.map((card) => (
          <div
            key={card.id}
            onClick={() => isCurrentTurn && onCardSelect(card)}
            className={`transition-transform duration-200 cursor-pointer ${
              isCurrentTurn && selectedCards.includes(card)
                ? "scale-125"
                : "scale-100"
            } ${direction === "vertical" ? "rotate-90" : ""}`}
          >
            <img
              src={isCurrentTurn ? card.image : back_of_card_image}
              alt={card.value}
              className="w-8 h-16 md:w-10 md:h-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomView;
