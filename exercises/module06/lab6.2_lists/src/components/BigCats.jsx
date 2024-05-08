import SingleCat from "./SingleCat";

function BigCats() {
    // define the cats as an arraty of objects (raw data)
    const cats = [
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

    // return the collated list in the form of a BigCats component
    return (
        <div className="BigCats componentBox">
            <ul>
                {catItems}
            </ul>
            {/* {children.children} */}
        </div>
    )
}

export default BigCats;