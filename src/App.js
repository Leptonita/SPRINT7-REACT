import { useState } from "react";


function App() {

  //order of the values on the budget's array is [web,seo,googleAds]
  const [budget, setBudget] = useState([0, 0, 0]);
  const [totalBudget, setTotalBudget] = useState(0)


  const handleCheckboxChange = (event) => {
    const num = event.target.id;
    budget[num] = (event.target.checked) ? event.target.value : 0;
    setBudget([...budget]);
    setTotalBudget(budget.reduce((total, item) => total + Number(item), 0));
  }


  return (
    <div>
      <p>¿Qué quieres hacer?</p>
      <div>
        <input type="checkbox"
          id={0}
          name="web"
          onChange={handleCheckboxChange}
          value={500}
        />
        <label htmlFor="web">Una página web (500€)</label>
      </div>
      <div>
        <input type="checkbox"
          id={1}
          name="seo"
          onChange={handleCheckboxChange}
          value={300}
        />
        <label htmlFor="seo">Una consultoria SEO (300€)</label>
      </div>


      <div>
        <input type="checkbox"
          id={2}
          name="googleAds"
          onChange={handleCheckboxChange}
          value={200}
        />
        <label htmlFor="googleAds">Una campaña de Google Ads (200€)</label>

      </div>
      <div>
        Precio: {totalBudget}
      </div>
    </div>
  );
}

export default App;
