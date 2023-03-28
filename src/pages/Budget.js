import WebPages from "../components/WebPages";
import { useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import NavBar from "../components/NavBar";
import { TitleB, SpanPrecio } from '../components/Panel-styled';

function Budget() {

    //order of the values on the budget's array is [web,seo,googleAds]
    const [budget, setBudget] = useLocalStorage('budgetArr', [0, 0, 0]);
    const [totalBudget, setTotalBudget] = useLocalStorage('totalBudget', 0)
    const [webIsChecked, setWebIsChecked] = useLocalStorage('webIsChecked', false);
    /*  useState(() => {
       const itemWeb = localStorage.getItem('webIsChecked');
       return itemWeb ? JSON.parse(itemWeb) : false;
     });*/

    const [seoIsChecked, setSeoIsChecked] = useLocalStorage('seoIsChecked', false);

    /*   useState(() => {
        const itemSeo = localStorage.getItem('seoIsChecked');
        return itemSeo ? JSON.parse(itemSeo) : false;
      }); */

    const [adsIsChecked, setAdsIsChecked] = useLocalStorage('adsIsChecked', false);

    /*   useState(() => {
        const itemAds = localStorage.getItem('adsIsChecked');
        return itemAds ? JSON.parse(itemAds) : false;
      }); */


    const basicWebBudget = 500;

    useEffect(() => {
        localStorage.setItem("webIsChecked", JSON.stringify(webIsChecked));
        localStorage.setItem('seoIsChecked', JSON.stringify(seoIsChecked));
        localStorage.setItem('adsIsChecked', JSON.stringify(adsIsChecked))
    }, [webIsChecked, seoIsChecked, adsIsChecked])

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
        //when seo is selected
        if (num === "1") {
            setSeoIsChecked(() => !seoIsChecked);
        }
        //when googleAds is selected
        if (num === "2") {
            setAdsIsChecked(() => !adsIsChecked);
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
            <NavBar />
            <TitleB>¿Qué quieres hacer?</TitleB>
            <div>
                <input type="checkbox"
                    id={0}
                    name="web"
                    onChange={handleCheckboxChange}
                    value={500}
                    checked={webIsChecked}
                />
                <label htmlFor="web"> Una página web (500€)</label>
            </div>

            {(webIsChecked) && <WebPages amountPagesLang={quantifyWebPages} />}

            <div>
                <input type="checkbox"
                    id={1}
                    name="seo"
                    onChange={handleCheckboxChange}
                    value={300}
                    checked={seoIsChecked}
                />
                <label htmlFor="seo"> Una consultoria SEO (300€)</label>
            </div>


            <div>
                <input type="checkbox"
                    id={2}
                    name="googleAds"
                    onChange={handleCheckboxChange}
                    value={200}
                    checked={adsIsChecked}
                />
                <label htmlFor="googleAds"> Una campaña de Google Ads (200€)</label>
            </div>
            <br />
            <div>
                Precio: <SpanPrecio>{totalBudget}€</SpanPrecio>
            </div>



        </div>
    );
}

export default Budget;
