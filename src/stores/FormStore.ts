import { makeAutoObservable } from "mobx"

class FormStore{
    constructor(){
        makeAutoObservable(this)
    }
    isVisible = false
    makeVisible = () => {
        this.isVisible = true
    }
    makeInvisible = () => {
        this.isVisible = false  
    }
}

export default new FormStore()