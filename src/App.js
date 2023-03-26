import WebPages from "./components/WebPages";
import { useState } from "react";


function App() {

  //order of the values on the budget's array is [web,seo,googleAds]
  const [budget, setBudget] = useState([0, 0, 0]);
  const [totalBudget, setTotalBudget] = useState(0)
  const [webIsChecked, setWebIsChecked] = useState(false);

  const basicWebBudget = 500;

  const calculateTotalBudget = () => {
    setBudget([...budget]);
    setTotalBudget(budget.reduce((total, item) => Number(total) + Number(item)));
  }

  const handleCheckboxChange = (event) => {
    const num = event.target.id;
    //when webpage is selected
    if (num === "0") {
      setWebIsChecked(() => !webIsChecked);
    }

    budget[num] = (event.target.checked) ? Number(event.target.value) : 0;
    calculateTotalBudget();
  }

  const quantifyWebPages = (numPages, numLanguages) => {
    const extraBudgetWebPages = numPages * numLanguages * 30;
    budget[0] = basicWebBudget + Number(extraBudgetWebPages);
    calculateTotalBudget();
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

      {(webIsChecked) && <WebPages amountPagesLang={quantifyWebPages} />}

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
      <br />
      <div>
        Precio: {totalBudget}
      </div>



    </div>
  );
}

export default App;
