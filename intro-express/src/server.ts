import express, { Request, Response } from 'express';
import fs from 'fs'; // file system
import path from 'path';
import { readFileHelper } from './helpers/read-file.helper';

const PORT: number = 8000;

const app = express();

// Middleware: Body Parser
app.use(express?.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Hello, world!',
  });
});

app.post('/post', (req: Request, res: Response) => {
  res.status(201).send({
    message: 'Post success',
  });
});

/*
  Handling Request: 
  - Body
  - URL: Params & Query
  - Headers

  Method: 
  - GET     -> Request URL & Request Headers
  - POST    -> Request URL, Body, Headers
  - PUT/PATCH -> Reqeust URL, Body, Headers
  - DELETE -> Request URL & Request Headers 
*/
app.get('/handle-request/:id', (req: Request, res: Response) => {
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.headers);

  res.status(200).json({
    success: true,
    message: 'Handle request success',
    data: {
      urlParams: req?.params?.id,
      urlQuery: req?.query,
      headers: req?.headers?.test,
    },
  });
});

app.post('/handle-request', (req: Request, res: Response) => {
  console.log(req?.body);

  res.status(201).json({
    success: true,
    message: 'Handle request success',
    data: {
      body: req?.body,
    },
  });
});

// CRUD
// READ
const pathProductsJSON = path?.join(__dirname, 'db', 'products.json');

app.get('/products', (req: Request, res: Response) => {
  const productsJSON = fs.readFileSync(pathProductsJSON, 'utf-8');
  const products = JSON.parse(productsJSON);

  res.status(200).json({
    success: true,
    message: 'Get products successful',
    data: products,
  });
});

// CREATE
app.post('/products', (req: Request, res: Response) => {
  // name, price, stock, unit
  const { name, price, unit, stock } = req?.body;

  // Step-01: Read file products.json
  const productsJSON = fs.readFileSync(pathProductsJSON, 'utf-8');
  const products = JSON.parse(productsJSON);

  // Step-02: Manipulasi ke file yang di read di step-01
  products?.products?.push({ name, price, unit, stock });

  fs.writeFileSync(pathProductsJSON, JSON.stringify(products));

  res.status(201).json({
    success: true,
    message: 'Create product successful',
    data: {
      name,
      price,
      unit,
      stock,
    },
  });
});

// UPDATE
// { name: 'Indomie', price: 3500, stock: 150, unit: PCS }
// PATCH  : Merubah sebagian      -> json: price
// PUT    : Merubah keseluruhan   -> json: name, price, stock, unit
app.put('/products/:productId', (req: Request, res: Response) => {
  const { name, price, stock, unit } = req.body;
  const { productId } = req?.params;

  // Step-01 Read file products.json
  const products = readFileHelper('./../db/products.json');

  // Step-02 Find products by id
  const updatedProducts = products?.products?.map((product: any) => {
    if (Number(productId) === product?.id) {
      return { id: product?.id, name, price, stock, unit };
    } else {
      return { ...product };
    }
  });

  // Step-03 Write file
  fs.writeFileSync(
    pathProductsJSON,
    JSON.stringify({ products: updatedProducts }),
  );

  res.status(200).json({
    success: true,
    message: `Update product with id = ${productId} successful`,
    data: {
      name,
      price,
      stock,
      unit,
    },
  });
});

app.listen(PORT, () => {
  console.log(`[⚡SERVER] Running on port ${PORT}...`);
});
