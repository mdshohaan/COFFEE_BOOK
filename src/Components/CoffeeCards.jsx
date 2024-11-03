import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCards = () => {
  const navigate = useNavigate()
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);

  const data = useLoaderData();
  useEffect(() => {
    if (category) {
      const filterdBycategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filterdBycategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);
 
  return (
   <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 ">
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </div>
    <button className="btn btn-error" onClick={()=>navigate('/Coffees')}>View All</button>
   </>
  );
};

export default CoffeeCards;
