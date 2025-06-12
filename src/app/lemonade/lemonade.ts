import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from "./card/card";
import { Product } from "./product/product";
import { Glass } from "./glass/glass";

interface ProductItem {
  name: string,
  amount: number,
  max: number,
  price: number,
  unit: string
}

@Component({
  selector: 'app-lemonade',
  imports: [CommonModule, Card, Product, Glass],
  templateUrl: './lemonade.html',
  styleUrls: ['./lemonade.css']
})
export class Lemonade {

  products: ProductItem[] = [
    {
      name: 'Lemon Juice',
      price: 0.5,
      amount: 0,
      max: 10,
      unit: 'oz'
    },
    {
      name: 'Water',
      price: 0.01,
      amount: 0,
      max: 10,
      unit: 'oz'
    },
    {
      name: 'Sugar',
      price: 0.25,
      amount: 0,
      max: 8,
      unit: 'tsp'
    },
    {
      name: 'Ice',
      price: 0.05,
      amount: 0,
      max: 12,
      unit: 'cubes'
    }
  ]

  increment(productName: string) {
    Lemonade.bind(this)
    if (this.products.find(product => product.name === productName)) {
      this.products.map(product => {
        if (product.name === productName) {
          product.amount < product.max ? product.amount += 1
            : product.amount
        }
      })
    }
  }

  decrement(productName: string) {
    Lemonade.bind(this)
    if (this.products.find(product => product.name === productName)) {
      this.products.map(product => {
        if (product.name === productName) {
          product.amount > 0 ? product.amount -= 1
            : product.amount
        }
      })
    }
  }

}
