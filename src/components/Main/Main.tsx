import { FC } from "react"

import Item from "../Item/Item"
import { Container } from "../ui/common"
import ItemsStore from "../../mobX/ItemsStore"
import { MainItems, MainWrapper, Title } from "./MainStyled"

const Main: FC = () => {
    return (<MainWrapper>
        <Container>
            {
                ItemsStore.items.map(
                    grup => (<>
                        <Title key={grup.id}>{grup.name}</Title>
                        <MainItems>
                            {
                                grup.Items.map(item => <Item {...item}/>)
                            }
                        </MainItems>
                    </>)
                )
            }
        </Container>
    </MainWrapper>
    )
}

export default Main