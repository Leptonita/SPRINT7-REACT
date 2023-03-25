import { useState } from "react";


function App() {

  const [budget, setBudget] = useState({
    web: "0",
    seo: "0",
    googleAds: "0"
  })

  const handleCheckboxChange = (event) => {
    (event.target.checked) ?
      setBudget({
        ...budget,
        [event.target.name]: event.target.value
      }) : setBudget({
        ...budget,
        [event.target.name]: 0
      })
  }

  return (
    <div>
      <p>¿Qué quieres hacer?</p>
      <div>
        <input type="checkbox"
          id="web"
          name="web"
          onChange={handleCheckboxChange}
          value="500"
        />
        <label htmlFor="web">Una página web (500€)</label>
      </div>
      <div>
        <input type="checkbox"
          id="seo"
          name="seo"
          onChange={handleCheckboxChange}
          value="300"
        />
        <label htmlFor="seo">Una consultoria SEO (300€)</label>
      </div>


      <div>
        <input type="checkbox"
          id="googleAds"
          name="googleAds"
          onChange={handleCheckboxChange}
          value="200"
        />
        <label htmlFor="googleAds">Una campaña de Google Ads (200€)</label>

      </div>
      <div>
        Precio: {Number(budget.web) + Number(budget.seo) + Number(budget.googleAds)}
      </div>
    </div>
  );
}

export default App;
