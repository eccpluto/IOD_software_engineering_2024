// friendController.js

// let the controller have access to the friends model (data)
const friends = require('../models/friends');

class friendController {
    constructor() { };

    // public API

    // returns array of all friend objects
    getAll(req, res) {
        res.json(friends);
    }

    // return an array of friends filtered by gender and / or first name letter
    filter(req, res) {
        console.log(req.query);
        let gender = req.query.gender;
        let letter = req.query.letter;
        let matchingFriends = [...friends]; // store the results of the filtering here

        if (gender) {
            matchingFriends = this.#filterGender(matchingFriends, gender);
        }
        if (letter) {
            letter = letter.toUpperCase();
            matchingFriends = this.#filterLetter(matchingFriends, letter);
        }

        if (matchingFriends.length > 0) {
            // return valid data when the gender matches 
            res.status(200).json(matchingFriends);
        } else {
            // and an error response when there are no matches
            res.status(404).json({ error: `No friends matching gender ${gender}, starting with "${letter}"` });

        };
    };

    // returns info about a friend
    info(req, res) {
        console.log(req.headers);
        res.json({ 'User-Agent': req.headers['user-agent'], 'Content-Type': 'application/json', Accept: req.headers.accept });
    };

    // returns the friend maching the specified id (number)
    getById(req, res) {
        console.log(req.params);
        let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

        console.log(friendId);

        // Modify this function to find and return the friend matching the given ID, or a 404 if not found
        let foundFriend = [...friends];
        foundFriend = foundFriend.find(friend => friend.id == friendId);

        // Modify this response with the matched friend, or a 404 if not found
        // res.json({ result: 'Finding friend with ID ' + friendId })
        if (foundFriend) {
            res.status(200).json(foundFriend);
        } else {
            res.status(404).json({ error: `Friend with id: ${friendId} not found` });
        }
    }

    // add a new friend object to the friends object array
    add(req, res) {
        let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
        console.log(newFriend); // 'body' will now be an object containing data sent via the request body

        // we can add some validation here to make sure the new friend object matches the right pattern
        if (!newFriend.name || !newFriend.gender) {
            res.status(500).json({ error: 'Friend object must contain a name and gender' });
            return;
        }
        else if (!newFriend.id) {
            newFriend.id = friends.length + 1; // generate an ID if one is not present
        };

        // if the new friend is valid, add them to the list and return the successfully added object
        friends.push(newFriend);
        res.status(200).json(newFriend);
    }

    // update an existing friend via the id
    update(req, res) {
        let friendId = req.params.id;
        let updatedFriend = req.body;
        console.log(updatedFriend);

        // Replace the old friend data for friendId with the new data from updatedFriend
        let friendIndex = friends.findIndex(friend => friend.id == friendId);
        if (friendIndex != -1) {
            // only update SPECIFIC property values if they are provided in the request body.
            // We ignore requests to update the Id.
            if (updatedFriend.name) { friends[friendIndex].name = updatedFriend.name };
            if (updatedFriend.gender) { friends[friendIndex].gender = updatedFriend.gender };
            res.status(200).json({ result: 'Updated friend with ID ' + friendId, data: friends[friendIndex] })
        } else {
            res.status(404).json({ result: "Cound not find friend with ID " + friendId });
        }
    }

    // returns an array of friends filtered by the provided gender string
    #filterGender(friends, gender) {

        console.log(friends);
        console.log(`friends array: ${friends}`);
        return friends.filter(friend => {
            return ((friend.gender == gender));
        });
    }

    // returns an array of friends filtered by the first letter of name starting with the provided letter string
    #filterLetter(friends, letter) {
        letter = letter.toUpperCase();
        let friendName = '';

        return friends.filter(friend => {
            friendName = friend.name.toUpperCase();
            return friendName.startsWith(letter);
        })
    }
}

module.exports = friendController;