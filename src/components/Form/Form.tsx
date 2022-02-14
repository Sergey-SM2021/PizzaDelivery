import { Button } from "../ui/common"
import { Container, Field, Form, FormWrupper, Title } from "./FormStyled"
import { Formik } from 'formik'
import FormStore from "../../stores/FormStore"
import { observer } from "mobx-react-lite"

const MyForm = () => {

    const HandlerSubmit = (values: any) => {
        alert(JSON.stringify(values))
    }

    return (<>{FormStore.isVisible ? <FormWrupper>
        <Formik
            initialValues={{ name: "", phone: "", address: "" }}
            onSubmit={HandlerSubmit}
        >{() => (
            <Form>
                <Container>
                    <Title>Последний штих ...</Title>
                    <Field placeholder="   Ваше имя" name="name" />
                    <Field placeholder="   Ваш телефон" name="phone" />
                    <Field placeholder="   Адрес доставки" name="address" />
                    <Button type="submit">Заказать</Button>
                </Container>
            </Form>
        )}
        </Formik>
    </FormWrupper> : <></>}</>)
}

export default observer(MyForm)