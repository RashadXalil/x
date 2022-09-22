const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
var prodId = 0
var brandId = 0
var catId = 0
class Product {
  constructor(name, brandId, catergoryId, desc, discountPercent, salePrice) {
    ;(this.id = prodId),
      (this.name = name),
      (this.brandId = brandId),
      (this.catergoryId = catergoryId),
      (this.desc = desc),
      (this.discountPercent = discountPercent),
      this,
      (salePrice = salePrice),
      (this.isDeleted = false)
    prodId++
  }
}
const Products = [
  {
    name: 'iphone',
    brandId: 1,
    catergoryId: 2,
    desc: 'salam salm salam',
    salePrice: 2100,
  },
]
class Brand {
  constructor(name) {
    this.id = brandId
    this.name = name
    brandId++
  }
}
const Brands = [
  {
    name: 'Apple',
  },
]
class Category {
  constructor(name) {
    this.id = catId
    this.name = name
    catId++
  }
}
const Categories = [
  {
    name: 'Tablet',
  },
  {
    name: 'SmartPhone',
  },
  { name: 'Laptop' },
]
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send({ Products, Brands, Categories })
})
// Products Crud
app.get('/products', (req, res) => {
  res.send(Brands)
})
// Products add
app.post('/products', (req, res) => {
  console.log(req.body)
})
//products delete
app.delete('/products/:id', (req, res) => {
  console.log(req.body)
})
//product edit
app.put('/products/:id', (req, res) => {
  console.log(req.body)
})
// Brands Crud
app.get('/brands', (req, res) => {
  res.send(Brands)
})
//add brand
app.post('/brands', (req, res) => {
  console.log(req.body)
})
//brand delete
app.delete('/brands/:id', (req, res) => {
  console.log(req.body)
})
//brand edit
app.put('/brands/:id', (req, res) => {
  console.log(req.body)
})
//Categories crud
app.get('/categories', (req, res) => {
  res.send(Categories)
})
//add category
app.post('/categories', (req, res) => {
  console.log(req.body)
})
//brand delete
app.delete('/brands/:id', (req, res) => {
  console.log(req.body)
})
//brand edit
app.put('/brands/:id', (req, res) => {
  console.log(req.body)
})
app.listen(8080, () => {
  console.log('Server running on 8080')
})
