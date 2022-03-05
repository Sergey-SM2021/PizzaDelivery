import { Formik } from 'formik'
import { observer } from "mobx-react-lite"
import { SyntheticEvent } from "react"

import { Button } from "../ui/common"
import { PopupWrapper, Container, 
    Field, Form, FormWrupper, Title, PopupBackground } from "./Popup.style"
import FormStore from "../../stores/FormStore"
import basketStore from "../../stores/basketStore"

export const Popup = observer(() => {
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
            <PopupWrapper>
                <PopupBackground onClick={HandlerBLClick}/>
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
            </PopupWrapper>
        </>
            : <></>}
    </>)
})