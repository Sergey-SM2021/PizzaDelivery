import { makeAutoObservable } from "mobx"

class FormStore{
    constructor(){
        makeAutoObservable(this)
    }
    isVisible = false
    makeVisible = () => {
        this.isVisible = true
    }
    makeInvisible(){
        this.isVisible = false
    }
    send(values:any){
        alert(JSON.stringify(values))
        this.makeInvisible()
    }
}

export default new FormStore()