const express = require('express')
const cors = require('cors')
const path = require('path')
var bodyParser = require('body-parser')
const { config } = require('process')
const app = express()
var prodId = 1
var brandId = 1
var catId = 1
class Product {
  constructor(name, brandId, catergoryId, desc, discountPercent, salePrice) {
    ;(this.id = prodId),
      (this.name = name),
      (this.brandId = brandId),
      (this.catergoryId = catergoryId),
      (this.desc = desc),
      (this.discountPercent = discountPercent),
      (this.salePrice = salePrice),
      (this.isDeleted = false)
    prodId++
  }
}
let Products = [
  {
    id: 1,
    name: 'ras',
    brandId: 1,
    catergoryId: 2,
    desc: 'salam salm salam',
    discountPercent: 10,
    salePrice: 2100,
    isDeleted: false,
  },
]
class Brand {
  constructor(name) {
    this.id = brandId
    this.name = name
    brandId++
  }
}
let Brands = [
  {
    id: 1,
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
let Categories = []
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send({ Products, Brands, Categories })
})
// Products Crud
app.get('/products', (req, res) => {
  res.send(Products)
})
//get by id
app.get('/products/:id', (req, res) => {
  let id = req.params.id
  let target = Products.find((x) => x.id == id)
  res.send(target)
})
// Products add
app.post('/products', (req, res) => {
  let prod = new Product(
    req.body.name,
    req.body.brandId,
    req.body.catergoryId,
    req.body.desc,
    req.body.discountPercent,
    req.body.salePrice,
  )
  Products.push(prod)
  res.send(Products)
})
//products delete
app.delete('/products/:id', (req, res) => {
  let id = req.params.id
  let target = Products.find((x) => x.id == id)
  let indexOfTarget = Products.indexOf(target)
  Products.splice(indexOfTarget, 1)
  res.send('Item Deleted !')
})
//product edit
app.put('/products/:id', (req, res) => {
  let id = req.params.id
  let product

  if (!id) return res.send('Please provide id blin')

  Products = Products.map((product) => {
    if (product.id == id) {
      const upd = {
        ...product,
        ...req.body,
      }
      product = upd
      return upd
    }
    return product
  })

  res.send(product)
})
// Brands Crud
app.get('/brands', (req, res) => {
  res.send(Brands)
})
//get by id
app.get('/brands/:id', (req, res) => {
  let id = req.params.id
  let target = Brands.find((x) => x.id == id)
  res.send(target)
})
//add brand
app.post('/brands', (req, res) => {
  let brand = new Product(req.body.name)
  Brands.push(brand)
  res.send(Brands)
})
//brand delete
app.delete('/brands/:id', (req, res) => {
  let id = req.params.id
  let target = Brands.find((x) => x.id == id)
  let indexOfTarget = Brands.indexOf(target)
  Brands.splice(indexOfTarget, 1)
  res.send('Item Deleted !')
})
//brand edit
app.put('/brands/:id', (req, res) => {
  let id = req.params.id
  let brand

  if (!id) return res.send('Please provide id blin')

  Brands = Brands.map((brand) => {
    if (brand.id == id) {
      const upd = {
        ...brand,
        ...req.body,
      }
      brand = upd
      return upd
    }
    return brand
  })

  res.send(brand)
})
//Categories crud
app.get('/categories', (req, res) => {
  res.send(Categories)
})
//get by id
app.get('/categories/:id', (req, res) => {
  let id = req.params.id
  let target = Categories.find((x) => x.id == id)
  res.send(target)
})
//add category
app.post('/categories', (req, res) => {
  let category = new Category(req.body.name)
  Categories.push(category)
  res.send(Categories)
})
//category delete
app.delete('/categories/:id', (req, res) => {
  let id = req.params.id
  let target = Categories.find((x) => x.id == id)
  let indexOfTarget = Categories.indexOf(target)
  Categories.splice(indexOfTarget, 1)
  res.send('Item Deleted !')
})
//category edit
app.put('/categories/:id', (req, res) => {
  let id = req.params.id
  let category

  if (!id) return res.send('Please provide id blin')

  Categories = Categories.map((category) => {
    if (category.id == id) {
      const upd = {
        ...category,
        ...req.body,
      }
      category = upd
      return upd
    }
    return category
  })

  res.send(category)
})
app.listen(8080, () => {
  console.log('Server running on 8080')
})
