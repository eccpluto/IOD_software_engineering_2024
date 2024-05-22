import { useState } from "react"

function AddCatForm(cats) {

    const [catName, setCatName] = useState('');
    const [catLatinName, setCatLatinName] = useState('');
    const [catImageURL, setCatImageURL] = useState('');

    function handleFormSubmit() {
        // update the state which was passed down from parent
        console.log(catName);
        console.log(catLatinName);
        console.log(catImageURL);
        Array(cats).push({
            name: catName,
            latinName: catLatinName
        })
    }

    return (
        <div className="AddCatForm">
            <form onSubmit={handleFormSubmit}>

                <div className="formRow">
                    <label>Cat name: </label>
                    <input type="text" value={catName}
                        onChange={(e) => { setCatName(e.target.value) }} />
                </div>
                <div className="formRow">
                    <label>Latin name: </label>
                    <input type="text" value={catLatinName}
                        onChange={(e) => { setCatLatinName(e.target.value) }} />
                </div>
                <div className="formRow">
                    <label>Image URL: </label>
                    <input type="text" value={catImageURL}
                        onChange={(e) => { setCatImageURL(e.target.value) }} />
                </div>
                <button>Add Cat</button>
            </form>
        </div>
    )
}

export default AddCatForm