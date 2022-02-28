import { makeAutoObservable } from "mobx"

import cheese from '../assets/Icons/emojione_cheese-wedge.svg'
import tomato from '../assets/Icons/emojione_tomato.svg'
import meat from '../assets/Icons/meat-icon.svg'
import { IItem } from "../models/model"
import pizza from '../assets/img/intro/Pizza-bg-intro.png'

class OfferStore {
    constructor() {
        makeAutoObservable(this)
    }
    Item: IItem = {
        img:pizza,
        id:"aaasjdkjfkj",
        price: 30,
        title: "Пепперони",
        description: "Бессмертная итальянская классика с новым взглядом на рецептуру. Из каменной печи уже в России.",
        structure: [
            {
                img: cheese,
                structure: ["Моцарелла", "Эмменталь", "Горгонзола", "Пармезан"]
            },
            {
                img: tomato,
                structure: ["Свежие томаты", "оливки", "базилик", "тимьян", "орегано"]
            },
            {
                img: meat,
                structure: ["Ветчина", "Колбаса", "Пепперони"]
            }
        ]
    }
}

export default new OfferStore()

