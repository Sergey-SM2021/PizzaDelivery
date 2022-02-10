import { makeAutoObservable } from "mobx"

import cheese from '../img/cheese.png'
import tomato from '../img/tomato.png'
import meat from '../img/meat.png'

class OfferStore {
    constructor() {
        makeAutoObservable(this)
    }
    price = 700
    title = "Пепперони"
    description = "Бессмертная итальянская классика с новым взглядом на рецептуру. Из каменной печи уже в России."
    structure = [
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

export default new OfferStore()

