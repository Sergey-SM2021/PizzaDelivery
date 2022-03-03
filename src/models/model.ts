export interface IItem {
    price: number
    title: string
    description: string
    structure?: Array<IStructure>,
    id:string,
    img:string,
    order?:number
}

export interface IStructure {
    img: string,
    structure: Array<string>,
}

interface IItemGrup {
    Items: Array<IItem>,
    name: string,
    id: string,
}

export type ItemsInGrupType = Array<IItemGrup>