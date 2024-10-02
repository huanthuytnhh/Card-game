import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";

const GameModes = [
  { value: "classic", label: "Classic" },
  { value: "quick", label: "Quick Play" },
];

const PlayersOptions = [
  { value: "2", label: "2 Players" },
  { value: "3", label: "3 Players" },
  { value: "4", label: "4 Players" },
];

function Search() {
  return (
    <div className="md:p-4 bg-white rounded-md md:rounded-full flex flex-col md:flex-row md:gap-10 gap-3 p-2 w-[80%] shadow-lg">
      {/* Chọn chế độ chơi */}
      <Select>
        <SelectTrigger className="outline-none md:border-none md:w-[30%] text-lg shadow-none">
          <SelectValue placeholder="Game Mode" />
        </SelectTrigger>
        <SelectContent>
          {GameModes.map((mode) => (
            <SelectItem key={mode.value} value={mode.value}>
              {mode.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      {/* Chọn số người chơi */}
      <Select>
        <SelectTrigger className="outline-none md:border-none md:w-[30%] text-lg shadow-none">
          <SelectValue placeholder="Number of Players" />
        </SelectTrigger>
        <SelectContent>
          {PlayersOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Separator orientation="vertical" className="hidden md:block" />

      {/* Tìm kiếm */}
      <div className="flex items-center">
        <CiSearch className="text-white text-[40px] justify-center items-center bg-primary rounded-full p-3 hover:scale-105 cursor-pointer" />
      </div>
    </div>
  );
}

export default Search;
