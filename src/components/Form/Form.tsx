import { Button } from "../ui/common"
import { BackgroundLayer, Container, Field, Form, FormWrupper, Title } from "./FormStyled"
import FormStore from "../../stores/FormStore"

import { Formik } from 'formik'
import { observer } from "mobx-react-lite"
import { SyntheticEvent } from "react"

export const MyForm = observer(() => {
    const HandlerBLClick = (e: SyntheticEvent) => {
        e.stopPropagation()
        FormStore.makeInvisible()
    }

    const HandlerSubmit = (values: any) => {
        alert(JSON.stringify(values))
    }

    return (<>
        {FormStore.isVisible ? <>
            <FormWrupper>
                <Formik
                    initialValues={{ name: "", phone: "", address: "" }}
                    onSubmit={HandlerSubmit}
                    render={() => (
                        <Form>
                            <Container>
                                <Title>Последний штих ...</Title>
                                <Field placeholder="   Ваше имя" name="name" />
                                <Field placeholder="   Ваш телефон" name="phone" />
                                <Field placeholder="   Адрес доставки" name="address" />
                                <Button type="submit">Заказать</Button>
                            </Container>
                        </Form>
                    )} />
            </FormWrupper>
            <BackgroundLayer onClick={HandlerBLClick} />
        </>
            : <></>}
    </>)
})