import { observer } from 'mobx-react-lite'
import { FC } from 'react'

import icon from '../../../assets/img/basket/basket.png'
import { Icon } from './Status.style'

export const Status: FC = observer(() => {
    return (<Icon src={icon} />)
})