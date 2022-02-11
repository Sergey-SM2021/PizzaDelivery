import { FC } from "react"
import styled from "styled-components"
import Item from "../components/Item/Item"
import ItemsStore from "../mobX/ItemsStore"

const Main:FC = () => {
    return(<Container>
        {
            ItemsStore.items.map(
                grup => grup.name
            )
        }
        {
            ItemsStore.items.map( grup => grup.Items.map(e => <Item {...e}/>))
        }
    </Container>)
}

const Container = styled.div`
    margin-top: 100px;
`

export default Main