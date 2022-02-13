import { Button } from "../ui/common"
import icon from '../../img/basket/basket.png'
import { BasketWrapper, Container, Header, Icon, Items, Promocode, Result } from "./BasketStyled"

const Basket = () => {
    return (<BasketWrapper>
        <Header>
            <Status />
        </Header>
        <Container>
            <Items></Items>
            <Result>
                <div>Итог:</div>
                <div>3070</div> 
            </Result>
            <Promocode placeholder="промокод"/>
            <Button>Заказать</Button>
        </Container>
    </BasketWrapper>)
}

const Status = () => {
    return (<Icon src={icon} />)
}

export default Basket