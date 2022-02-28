import { IItem } from "../models/model"

import { makeAutoObservable } from "mobx"

class BasketStore {
    constructor() {
        makeAutoObservable(this)
    }
    items: Array<IItem> = [
    ]
    get price() {
        return this.items.reduce((prev, current) => prev = prev + current.price, 0)
    }
    addPizza = (pizza:IItem) => {
        this.items.push(pizza)
    }
    clear = () => {
        this.items = []
    }
    delete = (id:string) => {
        this.items = this.items.filter(el => el.id !== id)
    }
}

export default new BasketStore()