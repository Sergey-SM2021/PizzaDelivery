import { IItem } from "../models/model"

import { makeAutoObservable } from "mobx"

class BasketStore {
    constructor() {
        makeAutoObservable(this)
    }
    queueOrder: number = 1
    items: Array<IItem> = [
    ]
    get price() {
        return this.items.reduce((prev, current) => prev = prev + current.price, 0)
    }
    addPizza = (pizza: IItem) => {
        const newPizza = { ...pizza, order: this.queueOrder }
        this.items.push(newPizza)
        this.queueOrder++
    }
    clear = () => {
        this.items = []
    }
    delete = (id: string) => {
        this.queueOrder = 1
        this.items.splice(this.items.findIndex(el => el.id === id), 1)
        this.items.forEach(el => {
            el.order = this.queueOrder
            this.queueOrder++
        })
    }
}

export default new BasketStore()