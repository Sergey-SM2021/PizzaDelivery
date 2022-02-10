import { FC } from "react"
import cheese from '../../../img/cheese.png'
import tomato from '../../../img/tomato.png'
import meat from '../../../img/meat.png'
import Pizza from '../../../img/Pizza-bg-intro.png'
import { Content, Flex, H1, Img, Main, P, Structure, StructureItem } from "./OfferStyled"

const Offer:FC = () => {
    return(<Main>
        <Content>
            <H1>Пепперони (Классика)  </H1>
            <P>
                Бессмертная итальянская классика
                с новым взглядом на рецептуру.
                Из каменной печи уже в России.
            </P>
            <Structure>
                <img src={cheese} />
                <StructureItem>Моцарелла, Эмменталь, Горгонзола, Пармезан</StructureItem>
            </Structure>
            <Structure>
                <img src={tomato} />
                <StructureItem>Свежие томаты, оливки, базилик, тимьян, орегано</StructureItem>
            </Structure>
            <Structure>
                <img src={meat} />
                <StructureItem>Ветчина, Колбаса, Пепперони</StructureItem>
            </Structure>
            <Flex>
                <button>В корзину</button>
                <div>320$</div>
            </Flex>
        </Content>
        <Img src={Pizza} />
    </Main>)
}

export default Offer