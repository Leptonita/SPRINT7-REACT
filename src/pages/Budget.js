import WebPages from "../components/WebPages";
import { useEffect, useState } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import NavBar from "../components/NavBar";
import { DivBudgetContainer, DivIndentify, DivForm, TitleB, SpanPrecio, ButtonBudgetList, StyledLink, BudgetsList } from '../components/Panel-styled';
import { useSearchParams, useLocation } from 'react-router-dom';

function Budget() {

    const [params, setParams] = useSearchParams();
    const location = useLocation();
    console.log('location', location);
    const query = new URLSearchParams(useLocation().search);
    /*
    setBudget(query.get('budget'));
    setTotalBudget(query.get('totalBudget'));
    setWebIsChecked(query.get('webIsChecked'));
    setSeoIsChecked(query.get('seoIsChecked'));
    setAdsIsChecked(query.get('adsIsChecked'));
    setNumPages(query.get('numPages'));
    setNumLanguages(query.get('numLanguages'));
    setCustomer(query.get('customerName'));
    setBudgetName(query.get('budgetName'));
    setBudgetsListArr(query.get('budgetsListArr'));*/

    //order of the values on the budget's array is [web,seo,googleAds]
    const [budget, setBudget] = useLocalStorage('budgetArr', [0, 0, 0], [query.get('budget0'), query.get('budget1'), query.get('budget2')]);
    const [totalBudget, setTotalBudget] = useLocalStorage('totalBudget', 0, query.get('totalBudget'));
    const [webIsChecked, setWebIsChecked] = useLocalStorage('webIsChecked', false, JSON.parse(query.get('web')));
    const [seoIsChecked, setSeoIsChecked] = useLocalStorage('seoIsChecked', false, JSON.parse(query.get('seo')));
    const [adsIsChecked, setAdsIsChecked] = useLocalStorage('adsIsChecked', false, JSON.parse(query.get('ads')));
    const [numPages, setNumPages] = useLocalStorage('numPages', 0, query.get('pages'));
    const [numLanguages, setNumLanguages] = useLocalStorage('numLanguages', 1, query.get('languages'));
    const [customer, setCustomer] = useLocalStorage('customerName', '', query.get('customer'));
    const [budgetName, setBudgetName] = useLocalStorage('budgetName', '', query.get('budgetName'));
    const [printedBudgetsList, setPrintedBudgetsList] = useState([]);
    const [search, setSearch] = useState('');
    const d = new Date();

    //const [budgetsListArr, setBudgetsListArr] = useState([]);
    const [budgetsListArr, setBudgetsListArr] = useLocalStorage('budgetsListArr', [], query.get('budgetsListArr'));
    const [orderLayout, setOrderLayout] = useLocalStorage('orderLayout', 'id',);

    const basicWebBudget = 500;
    //let printedBudgetsList = [];

    /* useEffect(() => {
        
    }, []) */


    useEffect(() => {
        localStorage.setItem("webIsChecked", JSON.stringify(webIsChecked));
        localStorage.setItem('seoIsChecked', JSON.stringify(seoIsChecked));
        localStorage.setItem('adsIsChecked', JSON.stringify(adsIsChecked))
    }, [webIsChecked, seoIsChecked, adsIsChecked])

    useEffect(() => {
        localStorage.setItem('budgetsListArr', JSON.stringify(budgetsListArr));
        localStorage.setItem('orderLayout', JSON.stringify(orderLayout));

        sortArray(budgetsListArr, orderLayout);
    }, [budgetsListArr, orderLayout])

    useEffect(() => {
        setParams({
            'customer': customer,
            'budgetName': budgetName,
            'totalBudget': totalBudget,
            'web': webIsChecked,
            'seo': seoIsChecked,
            'ads': adsIsChecked,
            'pages': numPages,
            'languages': numLanguages,
            'budget0': budget[0],
            'budget1': budget[1],
            'budget2': budget[2]
        })
    }, [customer, budgetName, totalBudget, webIsChecked, seoIsChecked, adsIsChecked, numPages, numLanguages])


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

    const printArray = (arr) => {
        return arr.map((item, index) => {
            return (
                <tr key={item.id}>
                    <td> {item.id} </td>
                    <td> {item.dateBudget.slice(0, 10)} </td>
                    <td> {item.customer} </td>
                    <td> {item.budgetName}</td>
                    <td> {item.totalBudget}€</td>
                    <td> {item.web ? `Web con ${item.pages} pág. y ${item.languages} ${item.languages < 2 ? 'idioma' : 'idiomas'}` : "no-web"} </td>

                    <td> {item.seo ? "SEO" : "no-seo"} </td>
                    <td> {item.ads ? "Google Ads" : "no-publi"} </td>
                </tr>
            )
        });
    }

    function addBudgetObject() {
        let currentBudgetListArr = [];
        const budgetObj = {
            'id': budgetsListArr.length,
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

        //presupuestos con nombres 'únicos'
        /*  if (budgetsListArr.length !== 0 && budgetsListArr.some(item => (item.budgetName.toLowerCase() === budgetObj.budgetName.toLowerCase()))) {
            currentBudgetListArr = [...budgetsListArr];
            alert("ya existe un presupuesto con este nombre");
        } else {
            currentBudgetListArr = [...budgetsListArr, budgetObj];
        }
*/

        if (budgetObj.customer.length === 0) {
            alert("indica el nombre del cliente");
            currentBudgetListArr = [...budgetsListArr];
        } else if (budgetObj.budgetName.length === 0 || budgetObj.customer.length === 0) {
            alert("indica el nombre del presupuesto");
            currentBudgetListArr = [...budgetsListArr];
        } else if (budgetsListArr.some(item => (item.budgetName.toLowerCase() === budgetObj.budgetName.toLowerCase())) && budgetsListArr.some(item => (item.customer.toLowerCase() === budgetObj.customer.toLowerCase()))) {
            alert("este cliente ya tiene un presupuesto con este nombre");
            currentBudgetListArr = [...budgetsListArr];
        }

        else {
            // prespuestos con nombres que se pueden repetir
            currentBudgetListArr = [...budgetsListArr, budgetObj];
        }
        //console.log("currentBudgetListArr", currentBudgetListArr);

        setBudgetsListArr(currentBudgetListArr);
        //console.log('budgetsListArr-add', budgetsListArr);
        localStorage.setItem('budgetsListArr', JSON.stringify(budgetsListArr));

        const printingB = printArray(currentBudgetListArr);
        //console.log('printingB', printingB);

        setPrintedBudgetsList(printingB);
        //console.log('printedBudgetsList', printedBudgetsList);

    }

    const sortStringArray = (arr, attrib) => {
        const propertyName = attrib;
        const arrCopy = JSON.parse(JSON.stringify(arr));

        localStorage.setItem('orderLayout', JSON.stringify(attrib));
        setOrderLayout(attrib);

        const arrCopySorted = arrCopy.sort((a, b) => {
            if (a[propertyName].toLowerCase() < b[propertyName].toLowerCase()) {
                return -1;
            } else if (a[propertyName].toLowerCase() > b[propertyName].toLowerCase()) {
                return 1;
            }
            return 0;
        })
        console.log("arr", arr);
        const printingDataSorted = printArray(arrCopySorted);
        setPrintedBudgetsList(printingDataSorted);
    }

    const sortObjNumArray = (arr, attrib) => {
        const propertyName = attrib;
        const arrCopy = JSON.parse(JSON.stringify(arr));

        localStorage.setItem('orderLayout', JSON.stringify(attrib));
        setOrderLayout(attrib);
        const arrCopySorted = arrCopy.sort((a, b) => Number(a[propertyName]) - Number(b[propertyName]));
        console.log("arr", arr);
        const printingDataSorted = printArray(arrCopySorted);
        setPrintedBudgetsList(printingDataSorted);
    }

    const sortArray = (arr, order) => {
        if (order === 'dateBudget' || order === 'id' || order === 'totalBudget') {
            return sortObjNumArray(arr, order);
        } else {
            return sortStringArray(arr, order);
        }
    }

    const handleInputBudgetListSearch = (e) => {
        setSearch(e.target.value);
        const filteredBudgetListArr = budgetsListArr.filter(item => item.budgetName === e.target.value);
        const printingDataFiltered = printArray(filteredBudgetListArr);
        setPrintedBudgetsList(printingDataFiltered);
    }

    const handleSearchSimilars = (presu) => {

        const filteredBudgetListArr = budgetsListArr.filter(item => item.budgetName.includes(presu));
        const printingDataFiltered = printArray(filteredBudgetListArr);
        setPrintedBudgetsList(printingDataFiltered);
    }

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

                    <ButtonBudgetList onClick={() => addBudgetObject()}>
                        Añadir presupuesto al listado
                    </ButtonBudgetList>

                </DivForm>

                <BudgetsList>
                    <h1>Listado de presupuestos</h1>
                    <div>
                        ordenados por:
                        <ButtonBudgetList onClick={() => sortArray(budgetsListArr, 'dateBudget')}>fecha</ButtonBudgetList>
                        {/**/} <ButtonBudgetList onClick={() => sortArray(budgetsListArr, 'customer')}>cliente</ButtonBudgetList>
                        <ButtonBudgetList onClick={() => sortArray(budgetsListArr, 'budgetName')}>alfabético nombre presupuesto</ButtonBudgetList>
                        {/* */} <ButtonBudgetList onClick={() => sortArray(budgetsListArr, 'totalBudget')}>precio</ButtonBudgetList>

                        <ButtonBudgetList onClick={() => sortArray(budgetsListArr, 'id')}>reiniciar</ButtonBudgetList>
                    </div>
                    <div><label htmlFor="searcher">Buscar presupuestos: </label>
                        <input type="search" id="searcher" name="search" placeholder="nombre presupuesto ..." onChange={handleInputBudgetListSearch} value={search} />
                        <button onClick={() => handleSearchSimilars(search)}> &nbsp; buscar similares &nbsp;</button>
                    </div>
                    <br />
                    <table><thead>
                        <tr>
                            <td> id </td>
                            <td> fecha </td>
                            <td> cliente</td>
                            <td> nombre presu.</td>
                            <td> precio</td>
                            <td> opción web</td>

                            <td> opción SEO</td>
                            <td> opción publicidad</td>
                        </tr>
                    </thead>
                        <tbody>
                            {printedBudgetsList}
                        </tbody>
                    </table>

                </BudgetsList>


            </DivBudgetContainer >
        </>
    );
}

export default Budget;
