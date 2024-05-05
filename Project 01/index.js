const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require("fs");


const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({ extended: false}));

//Routes

app.get('/users', (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
        </ul>
    `;
    res.send(html);
});

//REST API
app.get('/api/users', (req, res) => {
    return res.json(users);
})

//access ID Dynamically
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id) ;
    return res.json(user);
})

//To create 
app.post('/api/users', (req, res) => {
    //Todo: Create new user
    const body = req.body;
    
    users.push({ ...body, id: users.length + 1 }); 
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        // if (err) {
        //     return res.status(500).json({ error: 'Error writing to file' });
        // }
        return res.json({ status: "Success", id: users.length });
    });
});

//to edit
app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    // Find the index of the user with the given ID
    const index = users.findIndex(user => user.id === id);

    // If user with the given ID is not found, return an error
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Update the user data with the new values
    users[index] = { ...users[index], ...body };

    // Write the updated data back to the JSON file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error writing to file' });
        }
        return res.json({ status: "User updated successfully" });
    });
});


//to delete
app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);

    // Find the index of the user with the given ID
    const index = users.findIndex(user => user.id === id);

    // If user with the given ID is not found, return an error
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Remove the user from the array
    users.splice(index, 1);

    // Write the updated data back to the JSON file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error writing to file' });
        }
        return res.json({ status: "User deleted successfully" });
    });
});



app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))