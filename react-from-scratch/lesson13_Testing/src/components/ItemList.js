import ItemCard from "./ItemCard";

const ItemList = ({ itemCards }) => {
  console.log(itemCards);

  return (
    <div>
      {itemCards.map(
        (item) => (
          console.log("In Item List:", item.card.info),
          (<ItemCard key={item?.card?.info?.id} item={item} />)
        )
      )}
    </div>
  );
};
export default ItemList;
