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
    setSelectedLegendIndex((prev) =>
      direction === "next"
        ? (prev + 1) % legends.length
        : (prev - 1 + legends.length) % legends.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-3xl mb-4">Brawlhalla Legends</h1>
      {/* Legend Selector */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => handleLegendChange("prev")}
          className="p-2 bg-blue-600 rounded-md"
        >
          Prev
        </button>
        <div className="px-4">
          <span className="text-xl">{selectedLegend.name}</span>
        </div>
        <button
          onClick={() => handleLegendChange("next")}
          className="p-2 bg-blue-600 rounded-md"
        >
          Next
        </button>
      </div>

      {/* Skin Selector */}
      <Selector
        label="Select Skin"
        value={selectedSkin}
        options={selectedLegend.skins}
        onChange={(e) => setSelectedSkin(e.target.value)}
      />

      {/* Color Selector */}
      <Selector
        label="Select Color"
        value={selectedColor}
        options={selectedLegend.colors}
        onChange={(e) => setSelectedColor(e.target.value)}
      />

      {/* Preview Image */}
      <div className="mt-6">
        <Image
          src={`/images/${selectedLegend.name}/${selectedSkin}/${selectedLegend.name}_${selectedSkin}_${selectedColor}.png`}
          alt={`${selectedLegend.name} ${selectedSkin} ${selectedColor}`}
          layout="responsive"
          width={270}
          height={300}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};
export default App;
