import { useState } from "react";

// child components that will be managed by this component
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

function BigCats() {
    // define the cats as an arraty of objects (raw data)
    const cats = [
        {
            name: 'Cheetah', latinName: 'Acinonyx jubatus',
            imageURL: 'https://media.istockphoto.com/id/1254530990/photo/cheetah-acinonyx-jubatus-adult-running-through-savannah.jpg?s=612x612&w=is&k=20&c=zQEusmRjfuZyisv8reMzSbj6bblbh0Upers_n2httj0='
        },
        {
            name: 'Cougar',
            latinName: 'Puma concolor',
            imageURL: 'https://media.istockphoto.com/id/98215577/photo/puma-concolor.jpg?s=612x612&w=0&k=20&c=2KzXlBKxc_YdNMTuWzDkX5BkM61q77G-mCm0JVLO74s='
        },
        {
            name: 'Jaguar',
            latinName: 'Panthera onca',
            imageURL: 'https://media.istockphoto.com/id/153730635/photo/photograph-of-a-stunning-jaguar-in-the-wild.jpg?s=612x612&w=0&k=20&c=WncT_vs3B53tkVWcmnrIF31u2BXhi03yVkA4bL2vt3U='
        },
        {
            name: 'Leopard',
            latinName: 'Panthera pardus',
            imageURL: 'https://media.istockphoto.com/id/155911783/photo/leopard-on-tree.jpg?s=612x612&w=is&k=20&c=0QmK74cXj1avpmUefUBfY_lh8PE0tuXWib-o7iXaf7A='
        },
        {
            name: 'Lion',
            latinName: 'Panthera leo',
            imageURL: 'https://media.istockphoto.com/id/494856046/photo/lion-in-high-grass.jpg?s=612x612&w=0&k=20&c=fQSSpAUsTJ0Zq0xiMRviJz0C0KxExnvI2ecDeQNjSwI='
        },
        {
            name: 'Snow leopard',
            latinName: 'Panthera uncia',
            imageURL: 'https://media.istockphoto.com/id/186723473/photo/snow-leopard-posing-in-the-snowy-outdoors.jpg?s=612x612&w=0&k=20&c=UYw7R7xVgB7voC8btZx91eNwKEvwNIjJksy_QUy9jhI='
        },
        {
            name: 'Tiger',
            latinName: 'Panthera tigris',
            imageURL: 'https://media.istockphoto.com/id/1254311108/photo/tasmanian-devil.jpg?s=612x612&w=0&k=20&c=lBQV4q06o5ZlQKdSOoVFYKWmhzjTAaivcWvSVwOAa_o='
        },
    ];


    // callback handler for deleting a cat using a button in each single cat component instance
    // handler needs to be here as it's definition is a dependency of mapping the cats to SingleCat
    // component, see below
    const handleDeleteCat = (name) => {
        console.log(`
            Received call to delete cat object:\n
            \nName: ${name}\n
        `);

        const catToBeRemoved = catsState.find((cat) => (cat.name == name));

        if (catToBeRemoved) {
            const newCatsState = catsState;
            const removed = newCatsState.splice(catsState.indexOf(catToBeRemoved), 1);
            console.log(`Removed cat: ${removed.name}\n`)

            // update the list component items to see the new internal state
            const newCatItems = newCatsState.map(cat => (
                <SingleCat
                    // properties that the child component can access
                    key={cat.latinName}
                    name={cat.name}
                    image={cat.imageURL}
                    callbackDeleteCat={handleDeleteCat}
                />
            ))

            setListState(newCatItems);
            setCatsState(newCatsState);
        }
    }

    // populate instances of SingleCat components
    const catItems = cats.map(cat => (
        <SingleCat
            key={cat.latinName}
            name={cat.name}
            image={cat.imageURL}
            callbackDeleteCat={handleDeleteCat}
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
    // this state is introduced so we can enforce a re-render when the base
    // array of cats is modified by the child AddCatForm
    const [catsState, setCatsState] = useState(cats);


    // handler for changing the filter
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

    // handler for changing the ordering
    function handleAlphabeticalOrdering() {
        console.log(`filterState: ${filterState}`);
        console.log(`orderingState: ${orderingState}`);
        console.log(`listState: ${listState}`);
        // only order alphabetically if not already
        if (listOrderings.ALPHABETICAL != orderingState) {
            const orderedList = listState;
            setListState(orderedList.sort((a, b) => {
                if (String(a.props.name).toUpperCase() < String(b.props.name).toUpperCase()) { return -1 }
                if (String(a.props.name).toUpperCase() > String(b.props.name).toUpperCase()) { return 1 }
                return 0;
            }));
            setOrderState(listOrderings.ALPHABETICAL);
        }
    }

    // handler for changing the ordering
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

    // handler for resetting the list to their default values for a session
    function handleResetList() {
        // reset only if filter or ordering is not default
        if (listOrderings.DEFAULT != orderingState || listFilters.DEFAULT != filterState) {

            // messy - but need to rebuild the list state as we modify directly with filter / order handlers
            // update the list component items to see the new internal state
            const defaultCatItems = catsState.map(cat => (
                <SingleCat
                    // properties that the child component can access
                    key={cat.latinName}
                    name={cat.name}
                    image={cat.imageURL}
                    callbackDeleteCat={handleDeleteCat}
                />
            ))

            setListState(defaultCatItems);
            setOrderState(listOrderings.DEFAULT);
            setFilterState(listFilters.DEFAULT);
        }
    }

    // callback handler for adding a new item to cats array
    const handleAddNewCat = (catName, latinName, catImageURL) => {
        console.log(`
            Received new cat object:\n
            \tName: ${catName}\n
            \tLatin Name: ${latinName}\n
            \tImage URL: ${catImageURL}\n
        `)

        // add to the internal cats array
        const newCatsState = catsState;
        newCatsState.push({
            name: catName,
            latinName: latinName,
            imageURL: catImageURL,
        })

        // update the list component items to see the new internal state
        const newCatItems = newCatsState.map(cat => (
            <SingleCat
                // properties that the child component can access
                key={cat.latinName}
                name={cat.name}
                image={cat.imageURL}
                callbackDeleteCat={handleDeleteCat}
            />
        ))

        // persist internal list of cats
        setCatsState(newCatsState);
        // persist cat items in view , which can be filtered, ordered etc.
        setListState(newCatItems);
    }

    // return the collated list in the form of a BigCats component
    return (
        <div className="BigCats componentBox">
            {/* pass cats property so the form can modify the list */}
            <AddCatForm callbackAddNewCat={handleAddNewCat} />
            <h2><i>Use these buttons to move betweem list displays.</i></h2>
            <h3><i>Note the display will preseve the history of clicked buttons until reset is clicked.</i></h3>
            <h4><i>Note the buttons will augment the list containing any added / removed cats, to get back to the base list, you should refresh the page.</i></h4>

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