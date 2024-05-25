import { useState } from "react"

function AddCatForm(props) {

    const [catName, setCatName] = useState('');
    const [catLatinName, setCatLatinName] = useState('');
    const [catImageURL, setCatImageURL] = useState('');

    // this is declared using arrow syntax so we can cleanly pass the function name into the form
    const handleFormSubmit = (e) => {
        // update the state which was passed down from parent
        e.preventDefault();
        console.log(`
            catName: ${catName}\n
            catLatinName: ${catLatinName}\n
            catIamgeURL: ${catImageURL}`
        );
        
        props.callbackAddNewCat(catName, catLatinName, catImageURL);
    }

    return (
        // wrap the rendered component in div.AddCatForm class for potential css access
        <div className="AddCatForm">

            {/* wrapping controlled form elements inside a form, so we can get submit behaviour */}
            <form onSubmit={handleFormSubmit}>

                <div className="formRow">
                    {/* we will make label a controlled form element, by specifying value and onChange*/}
                    <label>Cat name:
                        <input type="text" value={catName}
                            onChange={(e) => { setCatName(e.target.value) }} />
                    </label>
                </div>

                <div className="formRow">
                    <label>Latin name:
                        <input type="text" value={catLatinName}
                            onChange={(e) => { setCatLatinName(e.target.value) }} />
                    </label>
                </div>

                <div className="formRow">
                    <label>Image URL:
                        <input type="text" value={catImageURL}
                            onChange={(e) => { setCatImageURL(e.target.value) }} />
                    </label>
                </div>

                {/* <button>Add Cat</button> */}
                <input type="submit" value='Add my cat!'/>
            </form>
        </div>
    )
}

export default AddCatForm