// App.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Selector from "./Selector";
import { legends } from "./LegendsData"; // Import legends data

const App = () => {
  const [selectedLegendIndex, setSelectedLegendIndex] = useState(0);
  const [selectedSkin, setSelectedSkin] = useState<string>("Default");
  const [selectedColor, setSelectedColor] = useState<string>("Classic Colors");

  const selectedLegend = legends[selectedLegendIndex];

  // Handle Legend Scrolling
  const handleLegendChange = (direction: "prev" | "next") => {
    setSelectedLegendIndex((prev) => {
      const newIndex =
        direction === "next"
          ? (prev + 1) % legends.length
          : (prev - 1 + legends.length) % legends.length;

      // Reset the selected skin to "Default"
      setSelectedSkin("Default");
      return newIndex;
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Brawlhalla Legends</h1>

      <div className="flex items-center mb-6">
        <button
          onClick={() => handleLegendChange("prev")}
          className="p-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition duration-200 shadow-lg"
        >
          Prev
        </button>

        <div className="px-6 w-[215px] text-center">
          <span className="text-2xl font-semibold">{selectedLegend.name}</span>
        </div>

        <button
          onClick={() => handleLegendChange("next")}
          className="p-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition duration-200 shadow-lg"
        >
          Next
        </button>
      </div>

      <Selector
        label="Select Skin"
        value={selectedSkin}
        options={selectedLegend.skins}
        onChange={(e) => setSelectedSkin(e.target.value)}
      />

      <Selector
        label="Select Color"
        value={selectedColor}
        options={selectedLegend.colors}
        onChange={(e) => setSelectedColor(e.target.value)}
      />

      <div className="relative mt-8 w-[300px] h-[300px] border-2 border-blue-600 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={`/images/${selectedLegend.name}/${selectedSkin}/${selectedLegend.name}_${selectedSkin}_${selectedColor}.png`}
          alt={`${selectedLegend.name} ${selectedSkin} ${selectedColor}`}
          sizes="(max-width: 400px) (max-height: 400px)"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default App;
