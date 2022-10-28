import Link from 'next/link'
import styles from './styles.module.css'

interface Props {
  open: boolean
  onClose?: Function
}

export const Modal = ({ open, onClose }: Props) => {
  const redirectUri = encodeURI(process.env.AUTH_REDIRECT_URI || '');
  const clientId = process.env.CLIENT_ID;
  const scope = encodeURI(
    'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/userinfo.email'
  )
  const url = `https://accounts.google.com/o/oauth2/auth?client_id=239014614732-mksfhf7iluq8162v6k9squdg2l0jt55v.apps.googleusercontent.com&redirect_uri=https://youtube-channel-info.vercel.app/auth/callback&scope=${scope}&response_type=token`

  return open ? (
    <div className={styles.modal} onClick={() => onClose && onClose()}>
      <div className={styles.modalContent}>
        <h3>Reigstration</h3>
        <p>Please enter the required information.</p>
        <div>
          <Link href={url} passHref>
            <button>Google Login</button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
