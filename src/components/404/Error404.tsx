import s from './Error.module.scss'
import {ReactComponent as Monster404} from '../../assets/Monster.svg'

const Error404 = () => {
  return (
    <div className={s.error_message}>
        <Monster404/>
    </div>
  )
}

export default Error404