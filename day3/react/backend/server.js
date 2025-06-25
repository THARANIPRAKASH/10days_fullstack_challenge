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
// });
import express from 'express';
import { connectDB } from './config/db.js';
import User from './model/user.js';
import formdata from './model/form.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json()); // To parse JSON from request body
app.use(cors());
 // Enable CORS for all routes
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
app.use(express.urlencoded());
// GET method to fetch all products

// const methodfind = async (req, res,next) => {
//   console.log(`Method: ${req.method}, URL: ${req.url}`);
//   next();
// }
// app.use(methodfind);

// const methoddelete =  (req, res,next) => {
//   if(req.method === 'DELETE') {
//     return res.send('Delete method not allowed');
//   }
// }
// app.use(methoddelete);

app.get('/get', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

app.post('/post', async (req, res) => {
  try {
    const newuser=new User(req.body);
    await newuser.save();
    res.json(newuser);
  } catch (error) {
    console.error('Error saving user:', error);
  }       
});
app.post('/postform', async (req, res) => {
  try {
    const newFormData = new formdata(req.body);
    await newFormData.save();
    res.json(newFormData);
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Error saving form data' });
  }
});

app.get('/getform', async (req, res) => {
  try {
    const formData = await formdata.find({});
    res.json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ message: 'Error fetching form data' });
  }
} );


app.put('/put/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({msg :'User updated'});
  } catch (error) { 
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
