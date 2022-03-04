import { observer } from "mobx-react-lite"
import { FC } from "react"

import {
    BasketWrapper, Buy, Body, EmptyBasket,
    Header, Items, Promocode, Result, BuyArea, BasketInner
} from "./Basket.style"
import basketStore from "../../stores/basketStore"
import {Item} from "../BasketItem/Item"
import { MyForm } from "../Form/Form"
import FormStore from "../../stores/FormStore"
import {Status} from "./Status/Status"
import { Button } from "../ui/common"

export const Basket: FC = observer(() => {
    const HandlerBuyClick = () => {
        FormStore.makeVisible()
    }

    return (<BasketWrapper>
        <BasketInner>
            <Header>
                <Status />
            </Header>
            {
                basketStore.items.length === 0 ? <EmptyBasket><h5>Корзина пустая</h5></EmptyBasket> :
                    <Body>
                        <Items>
                            {
                                basketStore.items.map(item => <Item {...item} />)
                            }
                        </Items>
                        <Result>
                            <div>Итог:</div>
                            <div>{basketStore.price}$.</div>
                        </Result>
                        <Promocode placeholder="промокод" />
                        <BuyArea>
                            <Buy onClick={HandlerBuyClick}>
                                <Button>Заказать</Button>
                                <MyForm />
                            </Buy>
                        </BuyArea>
                    </Body>
            }
        </BasketInner>
    </BasketWrapper>)
})