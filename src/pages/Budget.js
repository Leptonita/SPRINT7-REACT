import WebPages from "../components/WebPages";
import { useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import NavBar from "../components/NavBar";
import { DivBudgetContainer, DivIndentify, DivForm, TitleB, SpanPrecio, BudgetsList } from '../components/Panel-styled';

function Budget() {

    //order of the values on the budget's array is [web,seo,googleAds]
    const [budget, setBudget] = useLocalStorage('budgetArr', [0, 0, 0]);
    const [totalBudget, setTotalBudget] = useLocalStorage('totalBudget', 0)
    const [webIsChecked, setWebIsChecked] = useLocalStorage('webIsChecked', false);
    const [seoIsChecked, setSeoIsChecked] = useLocalStorage('seoIsChecked', false);
    const [adsIsChecked, setAdsIsChecked] = useLocalStorage('adsIsChecked', false);
    const [numPages, setNumPages] = useLocalStorage('numPages', 0);
    const [numLanguages, setNumLanguages] = useLocalStorage('numLanguages', 1);
    const [customer, setCustomer] = useLocalStorage('customerName', '');
    const [budgetName, setBudgetName] = useLocalStorage('budgetName', '');
    const [printedBudgetsList, setPrintedBudgetsList] = useState([]);
    const d = new Date();

    const [budgetsListArr, setBudgetsListArr] = useState([]);

    const basicWebBudget = 500;
    //let printedBudgetsList = [];


    useEffect(() => {
        localStorage.setItem("webIsChecked", JSON.stringify(webIsChecked));
        localStorage.setItem('seoIsChecked', JSON.stringify(seoIsChecked));
        localStorage.setItem('adsIsChecked', JSON.stringify(adsIsChecked))
    }, [webIsChecked, seoIsChecked, adsIsChecked])

    /*    
    useEffect(() => {
        const budgetObj = {
            'customer': customer,
            'budgetName': budgetName,
            'totalBudget': totalBudget,
            'webIsChecked': webIsChecked,
            'seoIsChecked': seoIsChecked,
            'adsIsChecked': adsIsChecked,
            'numPages': numPages,
            'numLanguages': numLanguages,
            'dateBudget': d.toLocaleString('en-GB')
        }
        setTheBudgetObj(budgetObj);
        setBudgetsListArr([...budgetsListArr]);
        console.log("theBudgetObj-effect", theBudgetObj);
        console.log('budgetsListArr-effect', budgetsListArr);

    }, []);
 */
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



    function addBudgetObject() {
        const budgetObj = {
            'customer': customer,
            'budgetName': budgetName,
            'totalBudget': totalBudget,
            'web': webIsChecked,
            'seo': seoIsChecked,
            'ads': adsIsChecked,
            'pages': numPages,
            'languages': numLanguages,
            'dateBudget': d.toLocaleString('en-GB')
        }
        console.log("budgetObj-add", budgetObj);

        const currentBudgetListArr = [...budgetsListArr, budgetObj]
        console.log("currentBudgetListArr", currentBudgetListArr);

        setBudgetsListArr([...budgetsListArr, budgetObj]);
        console.log('budgetsListArr-add', budgetsListArr);

        const printingB = currentBudgetListArr.map((item, index) => {
            console.log('item.customer', item.customer + index)
            return (
                <tr key={item.budgetName}>
                    <td> {index} </td>
                    <td> {item.dateBudget} </td>
                    <td> {item.customer} </td>
                    <td> {item.budgetName}</td>
                    <td> {item.totalBudget}€</td>
                    <td> {item.web ? `Web con ${item.pages} pág. y ${item.languages} ${item.languages < 2 ? 'idioma' : 'idiomas'}` : "no-web"} </td>

                    <td> {item.seo ? "SEO" : "no-seo"} </td>
                    <td> {item.ads ? "Google Ads" : "no-publi"} </td>
                </tr>
            )


        });
        console.log('printingB', printingB);

        setPrintedBudgetsList(printingB);
        console.log('printedBudgetsList', printedBudgetsList);
    }

    /* <BudgetsList key={budget.budgetName}>{budget.customer} </BudgetsList> */



    return (
        <>
            <NavBar />
            <DivBudgetContainer>

                <DivForm>
                    <DivIndentify>
                        <label htmlFor="customer"> Nombre del cliente: </label>
                        <input type="text" id="customer" name="customer" placeholder="cliente" value={customer} onChange={(e) => setCustomer(e.target.value)} />
                    </DivIndentify>
                    <DivIndentify>
                        <label htmlFor="budgetName">Nombre del presupuesto: </label>
                        <input type="text" id="budgetName" name="budgetName" placeholder="presupuesto" value={budgetName} onChange={(e) => setBudgetName(e.target.value)} />
                    </DivIndentify>


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

                    {(webIsChecked) && <WebPages amountPagesLang={quantifyWebPages} numPages={numPages} numLanguages={numLanguages} setNumPages={setNumPages} setNumLanguages={setNumLanguages}
                    />}

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

                    <button onClick={() => addBudgetObject()}>Añadir presupuesto al listado</button>
                </DivForm>

                {(printedBudgetsList.length > 0) && <BudgetsList>
                    <h1>Listado de presupuestos</h1>

                    <table><thead>
                        <tr>
                            <td> id </td>
                            <td> fecha </td>
                            <td> cliente</td>
                            <td> nombre presu.</td>
                            <td> precio</td>
                            <td> opción web</td>

                            <td> opción SEO</td>
                            <td> opción publi</td>
                        </tr>
                    </thead>
                        <tbody>
                            {printedBudgetsList}
                        </tbody>
                    </table>

                </BudgetsList>}


            </DivBudgetContainer>
        </>
    );
}

export default Budget;
