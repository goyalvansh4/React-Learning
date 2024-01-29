import { useSelector } from "react-redux";
import BagItems from "../Components/BagItems";
import BagSummary from "../Components/BagSummary";
import EmptyMessage from "../Components/EmptyMessage";


const Bag = () => {
  const bagItems = useSelector(store=> store.bag);
  const items = useSelector(store=> store.items);

  const finalItems=items.filter((item)=>{
   const itemIndex=bagItems.indexOf(item.id);
   return itemIndex>=0;
  })


  return (
    <main>
      <div className="bag-page">
        {(bagItems.length !== 0) ? <div className="bag-items-container">
          {finalItems.map(item=> <BagItems item={item}/>)}  
        </div>: <EmptyMessage />}
        <BagSummary/>
      </div>
    </main>
  );
};

export default Bag;
