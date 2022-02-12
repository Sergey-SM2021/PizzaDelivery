import { makeAutoObservable } from "mobx"

import cheese from '../img/ui/cheese.png'
import tomato from '../img/ui/tomato.png'
import meat from '../img/ui/meat.png'
import { IItem } from "../models/model"
import pizza from '../img/intro/Pizza-bg-intro.png'

class OfferStore {
    constructor() {
        makeAutoObservable(this)
    }
    Item: IItem = {
        img:pizza,
        id:"aaasjdkjfkj",
        price: 700,
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

