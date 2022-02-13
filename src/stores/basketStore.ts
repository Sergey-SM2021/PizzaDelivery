import { IItem } from "../models/model"
import Pizza from '../img/items/pizza1.png'
import cheese from '../img/ui/cheese.png'
import tomato from '../img/ui/tomato.png'
import { makeAutoObservable } from "mobx"
import meat from '../img/ui/meat.png'

class BasketStore {
    constructor() {
        makeAutoObservable(this)
    }
    // #FIXME: Нужно исправить модель ItemsType, она должна возвращать массив Item
    items: Array<IItem> = [
        // {
        //     description: "Бесмертная итальянская классика  изменена нашим шефповаром, теперь она точно стоит Вашего внимания. ",
        //     price: 700,
        //     structure: [
        //         {
        //             img: cheese,
        //             structure: ["Моцарелла", "Эмменталь", "Горгонзола", "Пармезан"]
        //         },
        //         {
        //             img: tomato,
        //             structure: ["Лук", "Укроп", "Петрушка"]
        //         }
        //     ],
        //     title: "Домашняя с сосисками",
        //     id: "dkkl9099",
        //     img: Pizza,
        // },
        // {
        //     description: "Итальянцы и представить не могли, что кто сможет добавить в пиццу столько мяса. ",
        //     price: 380,
        //     structure: [
        //         {
        //             img: meat,
        //             structure: ["BBQ", "Утка", "Сосиски"]
        //         }
        //     ],
        //     title: "Сливочная",
        //     id: "aaa",
        //     img: Pizza,
        // },
    ]
    get price() {
        return this.items.reduce((prev, current) => prev = prev + current.price, 0)
    }
    addPizza = (pizza:IItem) => {
        this.items.push(pizza)
    }
}

export default new BasketStore()