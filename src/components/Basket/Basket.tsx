import { observer } from "mobx-react-lite"
import { FC } from "react"

import { BasketWrapper, Buy, Body, EmptyBasket, Header, Items, Promocode, Result, BuyArea } from "./BasketStyled"
import basketStore from "../../stores/basketStore"
import Item from "../BasketItem/Item"
import Form from "../Form/Form"
import FormStore from "../../stores/FormStore"
import Status from "./Status/Status"

const Basket: FC = () => {
    const HandlerBuyClick = () => {
        FormStore.makeVisible()
    }

    return (<BasketWrapper>
        <Header>
            <Status />
        </Header>
        {
            basketStore.items.length === 0 ? <EmptyBasket><h5>Корзина пустая</h5></EmptyBasket> :
                <Body>
                    <Items>
                        {
                            basketStore.items.map(item => <Item price={item.price} title={item.title} />)
                        }
                    </Items>
                    <Result>
                        <div>Итог:</div>
                        <div>{basketStore.price}</div>
                    </Result>
                    <Promocode placeholder="промокод" />
                    <BuyArea>
                        <Buy onClick={HandlerBuyClick}>
                            Заказать
                            <Form />
                        </Buy>
                    </BuyArea>
                </Body>
        }
    </BasketWrapper>)
}

export default observer(Basket)