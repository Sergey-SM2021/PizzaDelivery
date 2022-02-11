import { FC } from "react";
import { IItem } from "../../models/model";
import Structure from "../Structure/Structure";
import { Container } from "./ItemStyled";
import Icon from '../../img/cake.png'

const Item:FC<IItem> = ({description,price,structure,title}) => {
    return(<Container>
        <img src={Icon} />
        <h3>Чизбургер</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, quas dicta animi</p>
        <Structure structure={["Булка","Молоко","Масло"]} img={Icon}/>
        <button>8989</button>
    </Container>)
}

export default Item