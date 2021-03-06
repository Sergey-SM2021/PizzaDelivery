import { ItemsInGrupType } from '../models/model'
import Pizza from '../assets/img/items/pizza1.png'
import sauces from '../assets/Icons/decerts-icon.svg'
import cheese from '../assets/Icons/emojione_cheese-wedge.svg'
import tomato from '../assets/Icons/emojione_tomato.svg'
import meat from '../assets/Icons/meat-icon.svg'

import { makeAutoObservable } from "mobx"

class ItemsStore {
    constructor() {
        makeAutoObservable(this)
    }

    items: ItemsInGrupType = [
        {
            id:"sdjhdsfh78748ghgf894894jiok",
            name: "Пицца",
            Items: [
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
                    id:"dkkl9099",
                    img:Pizza,
                },
                {
                    description: "Итальянцы и представить не могли, что кто сможет добавить в пиццу столько мяса. ",
                    price: 380,
                    structure: [
                        {
                            img: meat,
                            structure: ["BBQ", "Утка", "Сосиски"]
                        }
                    ],
                    title: "Сливочная",
                    id:"aaa",
                    img:Pizza,
                },
                {
                    description: "Не ждали, что в пицце может быть огромное количество базилика ? Только для самых искушенных",
                    price: 590,
                    structure: [
                        {
                            img: cheese,
                            structure: ["Моцарелла", "Эмменталь", "Пармезан"]
                        },
                        {
                            img: tomato,
                            structure: ["Лук", "Чеснок", "Маслины"]
                        }
                    ],
                    title: "Мясная",
                    id:"990990sdisdi",
                    img:Pizza,
                },
                {
                    description: "Не ждали, что в пицце может быть огромное количество базилика ? Только для самых искушенных",
                    price: 699,
                    structure: [
                        {
                            img: meat,
                            structure: ["Колбаски", "Курица", "Сосиски"]
                        },
                        {
                            img: sauces,
                            structure: ["Сладкий чили", "Чесночный", "Сырный"]
                        },
                        {
                            img: tomato,
                            structure: ["Лук", "Чеснок", "Маслины"]
                        },
                        {
                            img: cheese,
                            structure: ["Пармезан", "Классический"]
                        }
                    ],
                    title: "Маргарита",
                    id:"aaazxxkjl",
                    img:Pizza,
                }
            ]
        },
        {
            name:"Напитки",
            id:"ss7887aaadfggf",
            Items:[
                {
                    id:"kklkldskld",
                    price: 90,
                    title:"Кока-кола",
                    description:"Безалкогольный газированный напиток",
                    img:Pizza,
                }
            ],
        },
    ]
}

export default new ItemsStore()