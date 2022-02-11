export interface IItem {
    price: number
    title: string
    description: string
    structure: Array<IStructure>
}

interface IStructure {
    img: string,
    structure: Array<string>
}

interface IItemGrup {
    Items: Array<IItem>,
    name: string
}

export type ItemsType = Array<IItemGrup>