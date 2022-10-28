import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { authState, youtubeState, YouTube } from '../state/auth'
import styles from '../styles/Home.module.css'
import { RegisterInfoCard } from '../components/RegisterInfoCard'

const SelectPage: NextPage = () => {
  const router = useRouter()
  const [auth] = useRecoilState(authState)
  const [youtubeInfos] = useRecoilState(youtubeState)

  useEffect(() => {
    if (auth.email === '') {
      router.push('/')
    }
  }, [auth, router])

  return (
    <div className={styles.container}>
      <button onClick={() => router.reload(window.location.pathname)}>Log Out</button>
      <main className={styles.main}>
        {youtubeInfos.map((y: YouTube, index: number) => {
          return <RegisterInfoCard index={index} email={auth.email} youtubeInfo={y} key={index} />
        })}
      </main>
    </div>
  )
}

export default SelectPage
