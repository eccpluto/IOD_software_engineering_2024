import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

function BigCats() {
    // define the cats as an arraty of objects (raw data)
    let cats = [
        { name: 'Cheetah', latinName: 'Acinonyx jubatus' },
        { name: 'Cougar', latinName: 'Puma concolor' },
        { name: 'Jaguar', latinName: 'Panthera onca' },
        { name: 'Leopard', latinName: 'Panthera pardus' },
        { name: 'Lion', latinName: 'Panthera leo' },
        { name: 'Snow leopard', latinName: 'Panthera uncia' },
        { name: 'Tiger', latinName: 'Panthera tigris' },
    ];

    // populate instances of SingleCat components
    const catItems = cats.map(cat => (
        <SingleCat
            key={cat.latinName}
            name={cat.name}
        />
    ))

    // store allowed options for list ordering
    const listOrderings = {
        DEFAULT: 'default',
        ALPHABETICAL: 'alphabetical',
        REVERSED: 'reversed',
    }

    // store allowed options for filtering the list
    const listFilters = {
        DEFAULT: 'default',
        PANTHERA: 'panthera'
    }

    // preseve the filter, ordering, and list states with this component
    const [filterState, setFilterState] = useState(listFilters.DEFAULT);
    const [orderingState, setOrderState] = useState(listOrderings.DEFAULT);
    const [listState, setListState] = useState(catItems);


    // handler for changeing the filter
    function handleListFilterPanthera() {
        console.log(`filterState: ${filterState}`);
        console.log(`orderingState: ${orderingState}`);
        console.log(`listState: ${listState}`);
        // only filter if not already
        if (listFilters.PANTHERA != filterState) {
            const filteredList = listState.filter(item => item.key.includes('Panthera'));
            setListState(filteredList);
            setFilterState(listFilters.PANTHERA);
        }
    }

    // handler for changeing the filter
    function handleAlphabeticalOrdering() {
        console.log(`filterState: ${filterState}`);
        console.log(`orderingState: ${orderingState}`);
        console.log(`listState: ${listState}`);
        // only order alphabetically if not already
        if (listOrderings.ALPHABETICAL != orderingState) {
            const orderedList = listState;
            setListState(orderedList.sort((a, b) => {
                if (a.props.name < b.props.name) { return -1 }
                if (a.props.name > b.props.name) { return 1 }
                return 0;
            }));
            setOrderState(listOrderings.ALPHABETICAL);
        }
    }

    // handler for changing the order
    function handleReverseOrdering() {
        console.log(`filterState: ${filterState}`);
        console.log(`orderingState: ${orderingState}`);
        console.log(`listState: ${listState}`);
        // only order reversed if not already
        if (listOrderings.REVERSED != orderingState) {
            const orderedList = listState;
            setListState(orderedList.reverse());
            setOrderState(listOrderings.REVERSED);
        }
    }

    // handler for resetting the list to their default values
    function handleResetList() {
        // reset only if filter or ordering is not default
        if (listOrderings.DEFAULT != orderingState || listFilters.DEFAULT != filterState) {
            setListState(catItems);
            setOrderState(listOrderings.DEFAULT);
            setFilterState(listFilters.DEFAULT);
        }
    }

    // return the collated list in the form of a BigCats component
    return (
        <div className="BigCats componentBox">
            <AddCatForm cats={cats}/>
            <h2><i>Use these buttons to move betweem list displays.</i></h2>
            <h3><i>Note the display will preseve the combination of clicked buttons until reset is clicked.</i></h3>

            <button onClick={handleAlphabeticalOrdering}>Sort alphabetically</button>
            <button onClick={handleReverseOrdering}>Reverse order</button>
            <button onClick={handleListFilterPanthera}>Display Panthera cats</button>
            <button onClick={handleResetList}>Reset list</button>
            <ul>
                {listState}
            </ul>
        </div>
    )
}

export default BigCats;