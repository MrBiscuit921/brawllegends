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
  "Ravens Honor",
  "Soul Fire",
  "Synthwave",
  "Frozen Forest",
  "Coat of Lions",
  "Starlight",
  "Willow Leaves",
  "Pact of Poison",
  "Darkheart",
  "Armageddon",
  "White",
  "Black",
  "Skyforged",
  "Goldforged",
  "Community Colors",
  "Community Colors v.2",
  "Esports",
  "Esports v.2",
  "Esports v.3",
  "Esports v.4",
  "Team Red",
  "Team Blue",
  "Team Yellow",
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
      "Heartblast",
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
    skins: ["Default"],
    colors: colors,
  },
  // You can add more legends in the same way
];
