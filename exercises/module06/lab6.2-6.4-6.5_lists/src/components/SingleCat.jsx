/**
 * This is a SingleCat component - for handling (encapsulating) individual cat items before they are placed in a list
 */

// remember when destructuring, we need object syntax i.e. ' {} ' to indicate we are accessing object properties
function SingleCat(props) {

    return (
        <li>
            <h1>
                {props.name}
                <button onClick={() => props.callbackDeleteCat(props.name)}>
                    Delete
                </button>
            </h1>
            <div>
                <img src={props.image} alt={`picture of ${props.name}`} />
            </div>
        </li>
    )
}

export default SingleCat;