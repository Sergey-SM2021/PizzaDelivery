import { observer } from "mobx-react-lite"
import { FC } from "react"

import { Button } from "../ui/common"
import icon from '../../img/basket/basket.png'
import { BasketWrapper, Container, EmptyBasket, Footer, Header, Icon, Items, Promocode, Result } from "./BasketStyled"
import basketStore from "../../stores/basketStore"
import Item from "../BasketItem/Item"

const Basket: FC = () => {
    return (<BasketWrapper>
        <Header>
            <Status />
        </Header>
        {
            basketStore.items.length === 0 ? <EmptyBasket><h5>Корзина пустая</h5></EmptyBasket> :
                <Container>
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
                    <Footer>
                        <Button>Заказать</Button>
                    </Footer>
                </Container>
        }
    </BasketWrapper>)
}

const Status: FC = () => {
    return (<Icon src={icon} />)
}

export default observer(Basket)