
import { observer } from "mobx-react-lite"
import Pizza from '../../../img/Pizza-bg-intro.png'
import { Content, DayDishInfo, DayDishName, DishDayDescription, DishDayPicture, DayDishWrapper } from "./OfferStyled"
import Structure from './Structure/Structure'
import OfferStore from "../../../mobX/OfferStore"

// const Offer: FC = () => {
//     return (<Main>
//         <Content>
//             <H1>{OfferStore.title}</H1>
//             <P>{
//                 OfferStore.description
//             }</P>
//             {OfferStore.structure.map(el => <Structure img={el.img} structure={el.structure} />)}
//             <Flex>
//                 <button>В корзину</button>
//                 <div>{OfferStore.price}</div>
//             </Flex>
//         </Content>
//         <Img src={Pizza} />
//     </Main>)
// }

export const Offer = observer(()=>{
    return (
        <DayDishWrapper>
            <Content>
                <DayDishName>{OfferStore.title}</DayDishName>
                <DishDayDescription>{
                    OfferStore.description
                }</DishDayDescription>
                {OfferStore.structure.map(el => <Structure img={el.img} structure={el.structure} />)}
                <DayDishInfo>
                    <button>В корзину</button>
                    <span>{OfferStore.price}</span>
                </DayDishInfo>
            </Content>
            <DishDayPicture src={Pizza} />
        </DayDishWrapper>

    )
})



export default Offer;