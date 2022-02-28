import { FC } from "react"

import Item from "../Item/Item"
import { Container } from "../ui/common"
import ItemsStore from "../../stores/ItemsStore"
import { MainItems, MainWrapper, Title } from "./MainStyled"
import {Basket} from "../Basket/Basket"

const Main: FC = () => {
    return (<MainWrapper>
        <Basket />
            <div>
            {
                ItemsStore.items.map(
                    group => (<>
                        <Title key={group.id}>{group.name}</Title>
                        <MainItems>
                            {
                                group.Items.map(item => <Item {...item}/>)
                            }
                        </MainItems>
                    </>)
                )
            }
            </div>
    </MainWrapper>
    )
}

export default Main