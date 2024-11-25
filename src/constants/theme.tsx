interface FruitNameMap {
  [key: string]: string;
}

const fruitNames: FruitNameMap = {
  orange: "Oranges",
  mango: "Mangoes",
  kiwi: "Kiwis",
  strawberry: "Strawberries",
};

const fruitDesc: FruitNameMap = {
  orange: "You look like a bright, juicy",
  mango: "You look like a Radiant Alphonso",
  kiwi: "You look like a lively",
  strawberry: "You look like a Sweet Charlie",
};

export { fruitNames, fruitDesc };
