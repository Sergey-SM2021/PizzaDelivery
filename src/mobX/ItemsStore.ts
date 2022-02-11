import { ItemsType } from './../models/model'
import pizza from '../img/pizza.png'

import { makeAutoObservable } from "mobx"

class ItemsStore {
    constructor() {
        makeAutoObservable(this)
    }

    items: ItemsType = [
        {
            name: "Пицца",
            Items: [
                {
                    description: "Додо-пицца - самая вкусная блин пицца в России. Loreeeeeeem .... Покупаем продаём и ещё .....",
                    price: 999,
                    structure: [
                        {
                            img: pizza,
                            structure: ["Тайпскрипт", "Реакт", "Ангуляр"]
                        }
                    ],
                    title: "Дода"
                }
            ]
        }
    ]
}

export default new ItemsStore()