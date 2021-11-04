import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import data from './data.js';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/joshopee',{

  // mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://admin:admin@zuitt-bootcamp.vlaci.mongodb.net/Capstone3?retryWrites=true&w=majority',{
    mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true //remove this because this is not supported anymore
})

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//      res.send(product);
//   } else {
//      res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products',(req,res)=>{
//     res.send(data.products);
// }) //commented out because static

app.get('/',(req,res)=>{
    res.send('Server is ready');
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`
    @ http://localhost:${port}
  _           _       _     _ ____ _____     _           _     
 | |__   __ _| |_ ___| |__ / |___ \\___  |   (_) ___  ___| |__  
 | '_ \\ / _\` | __/ __| '_ \\| | __) | / /    | |/ _ \\/ __| '_ \\ 
 | |_) | (_| | || (__| | | | |/ __/ / /     | | (_) \\__ \\ | | |
 |_.__/ \\__,_|\\__\\___|_| |_|_|_____/_/     _/ |\\___/|___/_| |_|
                                          |__/  
         `)
})