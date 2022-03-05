import { FC } from "react"

import {Item} from "../Item/Item"
import { Container } from "../ui/common"
import ItemsStore from "../../stores/ItemsStore"
import { MainItems, MainWrapper, MainTitle, GroupWrapper } from "./Main.style"
import { Basket } from "../Basket/Basket"

export const Main: FC = () => {
    return (<MainWrapper>
        <Basket />
        <Container>
                {
                    ItemsStore.items.map(
                        group => (<GroupWrapper>
                            <MainTitle key={group.id}>{group.name}</MainTitle>
                            <MainItems>
                                {
                                    group.Items.map(item => <Item {...item} />)
                                }
                            </MainItems>
                        </GroupWrapper>)
                    )
                }
        </Container>
    </MainWrapper>
    )
}