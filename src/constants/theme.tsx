interface FruitNameMap {
  [key: string]: string;
}
interface FruitDesc {
  [key: string]: React.ReactElement;
}

const fruitNames: FruitNameMap = {
  orange: "Oranges",
  mango: "Mangoes",
  kiwi: "Kiwis",
  strawberry: "Strawberries",
};

const fruitDesc: FruitDesc = {
  orange: <>You look like a bright, juicy</>,
  mango: (
    <>
      You look like a Radiant <br /> Alphonso
    </>
  ),
  kiwi: (
    <>
      You look like a <br /> lively
    </>
  ),
  strawberry: (
    <>
      You look like a <br /> Sweet Charlie
    </>
  ),
};

export { fruitNames, fruitDesc };
