import { FaAngleDown } from "react-icons/fa6";
import ItemList from "./ItemList";
import { useState } from "react";

const MenuCategory = ({ category, showItems, setShowIndex }) => {
  //const [open, setOpen] = useState(false);
  console.log(category);

  const toggleOpen = () => {
    setShowIndex();
  };
  return (
    // Accordian header]
    <div className="m-2 p-2">
      <div
        className="font-semibold p-2 flex justify-between"
        onClick={toggleOpen}
      >
        {category.title} ({category.itemCards.length})
        <FaAngleDown />
      </div>
      {/* // Accordian Body */}

      {showItems && <ItemList itemCards={category.itemCards} />}
    </div>
  );
};

export default MenuCategory;
