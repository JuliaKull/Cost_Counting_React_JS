import "./App.css";
import CostItem from "./component/Costs/CostItem";
import Costs from "./component/Costs/Costs";
import NewCost from "./component/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COST = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Freezer",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 21),
    description: "Toster",
    amount: 233.99,
  },
  {
    id: "c3",
    date: new Date(2021, 9, 10),
    description: "TV",
    amount: 1999.99,
  },
];

const App = () => {
  
  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {  //способ обновить состояние основанный на предыдушем состоянии
  
   setCosts(prevCosts =>{
    return[cost, ...costs]
   })
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
