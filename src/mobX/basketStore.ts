import { IItem } from "../models/model"
import Pizza from '../img/items/pizza1.png'
import cheese from '../img/ui/cheese.png'
import tomato from '../img/ui/tomato.png'
import { makeAutoObservable } from "mobx"

class BasketStore {
    constructor(){
        makeAutoObservable(this)
    }
    // #FIXME: Нужно исправить модель ItemsType, она должна возвращать массив Item
    items: Array<IItem> = [
        {
            description: "Бесмертная итальянская классика  изменена нашим шефповаром, теперь она точно стоит Вашего внимания. ",
            price: 700,
            structure: [
                {
                    img: cheese,
                    structure: ["Моцарелла", "Эмменталь", "Горгонзола", "Пармезан"]
                },
                {
                    img: tomato,
                    structure: ["Лук", "Укроп", "Петрушка"]
                }
            ],
            title: "Домашняя с сосисками",
            id: "dkkl9099",
            img: Pizza,
        }
    ]

}

export default new BasketStore()