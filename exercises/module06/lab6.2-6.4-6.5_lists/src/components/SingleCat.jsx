/**
 * This is a SingleCat component - for handling (encapsulating) individual cat items before they are placed in a list
 */

// remember when destructuring, we need object syntax i.e. ' {} ' to indicate we are accessing object properties
function SingleCat({ name }) {
    let catImage = '';

    switch (name) {
        case 'Cheetah':
            catImage = 'https://media.istockphoto.com/id/1254530990/photo/cheetah-acinonyx-jubatus-adult-running-through-savannah.jpg?s=612x612&w=is&k=20&c=zQEusmRjfuZyisv8reMzSbj6bblbh0Upers_n2httj0=';
            break;

        case 'Cougar':
            catImage = 'https://media.istockphoto.com/id/98215577/photo/puma-concolor.jpg?s=612x612&w=0&k=20&c=2KzXlBKxc_YdNMTuWzDkX5BkM61q77G-mCm0JVLO74s=';
            break;

        case 'Jaguar':
            catImage = 'https://media.istockphoto.com/id/153730635/photo/photograph-of-a-stunning-jaguar-in-the-wild.jpg?s=612x612&w=0&k=20&c=WncT_vs3B53tkVWcmnrIF31u2BXhi03yVkA4bL2vt3U=';
            break;

        case 'Leopard':
            catImage = 'https://media.istockphoto.com/id/155911783/photo/leopard-on-tree.jpg?s=612x612&w=is&k=20&c=0QmK74cXj1avpmUefUBfY_lh8PE0tuXWib-o7iXaf7A=';
            break;

        case 'Lion':
            catImage = 'https://media.istockphoto.com/id/494856046/photo/lion-in-high-grass.jpg?s=612x612&w=0&k=20&c=fQSSpAUsTJ0Zq0xiMRviJz0C0KxExnvI2ecDeQNjSwI=';
            break;

        case 'Snow leopard':
            catImage = 'https://media.istockphoto.com/id/186723473/photo/snow-leopard-posing-in-the-snowy-outdoors.jpg?s=612x612&w=0&k=20&c=UYw7R7xVgB7voC8btZx91eNwKEvwNIjJksy_QUy9jhI=';
            break;

        case 'Tiger':
            catImage = 'https://media.istockphoto.com/id/1254311108/photo/tasmanian-devil.jpg?s=612x612&w=0&k=20&c=lBQV4q06o5ZlQKdSOoVFYKWmhzjTAaivcWvSVwOAa_o=';
            break;

        // default:
        //     break;
    }

    return (
        <li>
            <h1>
                {name}
            </h1>
            <div>
                <img src={catImage} alt={`picture of ${name}`} />
            </div>
        </li>
    )
}

export default SingleCat;