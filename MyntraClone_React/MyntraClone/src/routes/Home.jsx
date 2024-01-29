import { useSelector } from "react-redux";
import HomeItems from "../Components/HomeItems";
import itemSlice from "../store/itemSlice";
const Home = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItems key={item.id} item={item}></HomeItems>
        ))}
      </div>
    </main>
  );
};

export default Home;
