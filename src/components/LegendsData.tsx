const colors = [
  "Classic Colors",
  "Blue",
  "Yellow",
  "Green",
  "Brown",
  "Orange",
  "Purple",
  "Cyan",
  "Sunset",
  "Grey",
  "Pink",
  "Red",
  "Winter Holiday",
  "Lovestruck",
  "Lucky Clover",
  "Heatwave",
  "Haunting",
  "Home Team",
  "Gala",
  "Verdant Bloom",
  "Charged OG",
  "Raven's Honor",
  "Bifrost",
  "Soul Fire",
  "Synthwave",
  "Frozen Forest",
  "Coat of Lions",
  "Starlight",
  "Willow Leaves",
  "Pact of Poison",
  "Darkheart",
  "Armageddon",
  "Kira-kira",
  "White",
  "Black",
  "Skyforged",
  "Goldforged",
  "Community Colors",
  "Community Colors v2",
  "Esports",
  "Esports v2",
  "Esports v3",
  "Esports v4",
  "Esports v5",
];

// Define a type for a legend
type Legend = {
  name: string;
  skins: string[];
  colors: string[];
};

export const legends: Legend[] = [
  {
    name: "ADA",
    skins: [
      "Astral Core Ada",
      "Atlantean Ada",
      "Default",
      "Detention Ada",
      "DJ Ada",
      "Fatal Error Ada",
      "Heatblast",
      "Lovelaced Ada",
      "Stormlord Ada",
      "Technomancer Ada",
      "Vixen Ada",
      "Wasteland Ada",
    ],
    colors: colors,
  },
  // Adding a new legend
  {
    name: "ARCADIA",
    skins: ["Default", "Briar Rose Arcadia"],
    colors: colors,
  },
  // You can add more legends in the same way
];
