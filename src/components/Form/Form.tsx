import { Button } from "../ui/common"
import { Popup, Container, Field, Form, FormWrupper, Title, BackgroundLayer } from "./FormStyled"
import FormStore from "../../stores/FormStore"

import { Formik } from 'formik'
import { observer } from "mobx-react-lite"
import { SyntheticEvent } from "react"
import basketStore from "../../stores/basketStore"

export const MyForm = observer(() => {
    const HandlerBLClick = (e: SyntheticEvent) => {
        e.stopPropagation()
        FormStore.makeInvisible()
    }

    const HandlerSubmit = (values: any) => {
        FormStore.send(values)
        basketStore.clear()
    }

    return (<>
        {FormStore.isVisible ? <>
            <Popup>
                <BackgroundLayer onClick={HandlerBLClick}/>
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
            </Popup>
        </>
            : <></>}
    </>)
})