// import express from 'express';

// const app= express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


// app.post('/', (req, res) => {    
//     res.send('Received a POST request');    
// });

// app.put('/', (req, res) => {    
//     res.send('Received a PUT request');    
// });

// app.delete('/', (req, res) => {    
//     res.send('Received a delete request');    
// });




// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });import { connectDB } from './config/db.js';
import express from 'express';
import { connectDB } from './config/db.js';
import User from './model/user.js';
const app = express();
app.use(express.json()); // To parse JSON from request body

connectDB();


// // POST method to insert product
// app.post('/post', async (req, res) => {
//   const user1 = await User.create({
//     name: 'realme narzo',
//     price: 100,
//     description: 'Mokka phone',
//   });
//   res.json({ message: 'Product inserted', user1 });
// });

// GET method to fetch all products
app.get('/get', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
