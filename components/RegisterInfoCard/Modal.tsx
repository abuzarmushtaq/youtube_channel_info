import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { registerIndexState, YouTube } from '../../state/auth'
// import { YouTube } from '../../state/auth'
import styles from './styles.module.css'

interface Props {
  open: boolean
  index: number
  email: string
  youtubeInfo: YouTube
  onClose?: Function
}

export const Modal = ({ open, index, email, youtubeInfo, onClose }: Props) => {
  const router = useRouter()
  const [, setRegisterIndex] = useRecoilState(registerIndexState)
  const onClick = () => {
    setRegisterIndex(index)
    router.push('/')
  }
  return open ? (
    <div className={styles.modal} onClick={() => onClose && onClose()}>
      <div className={styles.modalContent}>
        <p>Please enter the required information.</p>
        <div>
          <button onClick={onClick}>Log In</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
