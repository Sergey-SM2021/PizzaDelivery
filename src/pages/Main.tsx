import { FC } from "react"
import styled from "styled-components"
import Item from "../components/Item/Item"
import ItemsStore from "../mobX/ItemsStore"

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

const MainWrapper = styled.div`
    margin-top: 100px;
`

const MainItems = styled.div`
    row-gap: 24px;
    justify-items: center;
    width: 95%;
    display: grid;
    grid-template: 1fr/ 1fr 1fr 1fr;
    @media(max-width: 1000px){
        grid-template: 1fr/ 1fr 1fr;
        width: 80%;
    }
`

const Title = styled.h2`
    
`

const Container = styled.div`
    width: 85%;
    margin-left: 20px;
`

export default Main