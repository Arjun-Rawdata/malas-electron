import camLight from "../assets/infoSigns/cam-light.png";
import printIcon from "../assets/infoSigns/print.png";
import fruitsRight from "../assets/HomeFruits/fruits-right.png";
import fruitsLeft from "../assets/HomeFruits/fruits-left.png";
import strawberry from "../assets/fruits/strawberry.svg";
import strawberryReg from "../assets/regDesk/strawberry.svg";
import strawberryPrev from "../assets/previewFruits/strawberry.svg";
import strawberryLeaf from "../assets/fruits/strawberry_leaf.svg";
import strawberryLeafPrev from "../assets/previewFruits/strawberry_leaf.svg";
import mangoLeaf from "../assets/fruits/mango-leaf.svg";
import mangoLeafPrev from "../assets/previewFruits/mango_leaf.svg";
import orangeLeaf from "../assets/fruits/orange-leaf.svg";
import orangeLeafPrev from "../assets/previewFruits/orange_leaf.svg";
import kiwiLeaf from "../assets/fruits/kiwi-leaf.svg";
import kiwiLeafPrev from "../assets/previewFruits/kiwi_leaf.svg";
import mango from "../assets/fruits/mango.svg";
import mangoReg from "../assets/regDesk/mango.svg";
import mangoTreeReg from "../assets/regDesk/mango-tree.svg";
import mangoPrev from "../assets/previewFruits/mango.svg";
import orange from "../assets/fruits/orange.svg";
import orangeFullReg from "../assets/regDesk/orange-full.svg";
import orangePrev from "../assets/previewFruits/orange.svg";
import orangePeelReg from "../assets/regDesk/orange-peel.svg";
import kiwi from "../assets/fruits/kiwi.svg";
import kiwiSliceReg from "../assets/regDesk/kiwi-slice.svg";
import kiwiPrev from "../assets/previewFruits/kiwi.svg";
import kiwiFullReg from "../assets/regDesk/kiwi-full.svg";
import logo from "../assets/logo.png";
import camDark from "../assets/infoSigns/cam-dark.svg";
import filterCam from "../assets/infoSigns/filterCam.png";
import tick from "../assets/infoSigns/tick.svg";
import sendDark from "../assets/infoSigns/send-dark.svg";
import sendLight from "../assets/infoSigns/send-light.svg";
import rightArrow from "../assets/infoSigns/right-arrow.svg";
import rightArrowDark from "../assets/infoSigns/right-arrow-dark.svg";
import downArrow from "../assets/infoSigns/down-arrow.svg";
import machineIllustrate from "../assets/infoSigns/machine-illustration.png";
import qrSymbol from "../assets/infoSigns/qr-symbol.svg";
import focusIcon from "../assets/infoSigns/focu-icon.svg";
import warnIcon from "../assets/infoSigns/warn.svg";
import thumbsUp from "../assets/infoSigns/thumbs-up.gif";
import one from "../assets/print/one.svg";
import two from "../assets/print/two.svg";
import three from "../assets/print/three.svg";
import legArrow from "../assets/infoSigns/leg-arrow.svg";
import cross from "../assets/infoSigns/cross.svg";
import strawBg from "../assets/backgrounds/strawberry-bg.png";
import mangoBg from "../assets/backgrounds/mango-bg.png";
import orangeBg from "../assets/backgrounds/orange-bg.png";
import kiwiBg from "../assets/backgrounds/kiwi-bg.png";
import strawCrown from "../assets/filters/strawberry/crown.svg";
import strawGlasses from "../assets/filters/strawberry/glasses.svg";
import strawRingCrown from "../assets/filters/strawberry/ring-crown.svg";
import mangoCrown from "../assets/filters/mango/crown.svg";
import mangoHat from "../assets/filters/mango/hat.svg";
import mangoFace from "../assets/filters/mango/mango-face.svg";
import kiwiCrown from "../assets/filters/kiwi/crown.svg";
import kiwiFace from "../assets/filters/kiwi/face-filter.svg";
import kiwiGlasses from "../assets/filters/kiwi/glasses.svg";
import orangeCrown from "../assets/filters/orange/crown.svg";
import orangeGlasses from "../assets/filters/orange/glasses.svg";
import orangeRingCrown from "../assets/filters/orange/ring-crown.svg";

const icon = (iconName: string): string => {
  const icons: { [key: string]: string } = {
    camLight,
    printIcon,
    logo,
    camDark,
    filterCam,
    tick,
    sendDark,
    sendLight,
    rightArrow,
    rightArrowDark,
    downArrow,
    machineIllustrate,
    qrSymbol,
    focusIcon,
    warnIcon,
    thumbsUp,
    one,
    two,
    three,
    legArrow,
    cross,
  };

  return icons[iconName] ?? "invalid icon";
};

const homeFruits = (iconName: string): string => {
  const icons: { [key: string]: string } = {
    fruitsRight,
    fruitsLeft,
  };

  return icons[iconName] ?? "invalid image";
};

const fruits = (iconName: string): string => {
  const icons: { [key: string]: string } = {
    strawberry,
    strawberryLeaf,
    mangoLeaf,
    mango,
    kiwi,
    kiwiLeaf,
    orange,
    orangeLeaf,
  };

  return icons[iconName] ?? "invalid image";
};

const previewFruits = (iconName: string): string => {
  const icons: { [key: string]: string } = {
    strawberry: strawberryPrev,
    strawberryLeaf: strawberryLeafPrev,
    mangoLeaf: mangoLeafPrev,
    mango: mangoPrev,
    kiwi: kiwiPrev,
    kiwiLeaf: kiwiLeafPrev,
    orange: orangePrev,
    orangeLeaf: orangeLeafPrev,
  };

  return icons[iconName] ?? "invalid image";
};

const background = (iconName: string): string => {
  const icons: { [key: string]: string } = {
    strawberry: strawBg,
    mango: mangoBg,
    orange: orangeBg,
    kiwi: kiwiBg,
  };

  return icons[iconName] ?? "invalid image";
};

const regFruits = (iconName: string): string => {
  const icons: { [key: string]: string } = {
    strawberry: strawberryReg,
    mango: mangoReg,
    mangoTree: mangoTreeReg,
    kiwi: kiwiFullReg,
    kiwiSlice: kiwiSliceReg,
    orange: orangeFullReg,
    orangePeel: orangePeelReg,
  };

  return icons[iconName] ?? "invalid image";
};

const filterIcons = (iconName: string): string => {
  const icons: { [key: string]: string } = {
    strawCrown,
    strawRingCrown,
    strawGlasses,
    mangoCrown,
    mangoHat,
    mangoFace,
    kiwiCrown,
    kiwiFace,
    kiwiGlasses,
    orangeCrown,
    orangeGlasses,
    orangeRingCrown,
  };

  return icons[iconName] ?? "invalid image";
};

export {
  icon,
  homeFruits,
  fruits,
  previewFruits,
  regFruits,
  background,
  filterIcons,
};
