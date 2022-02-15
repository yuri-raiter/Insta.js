import { GetServerSideProps } from "next"
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react'
import LoginRegisterCard from "../../../components/LoginRegisterCard.tsx"
import { RiFacebookCircleFill, RiGithubFill, RiGoogleFill } from "react-icons/ri"
import styles from './styles.module.scss'

interface ISignIn {
  providers: ClientSafeProvider[]
}

export default function SignIn({ providers }: ISignIn) {
  function ProviderIcon(name: string) {
    if (name == 'Google') return <RiGoogleFill className={styles.icons} />
    if (name == 'GitHub') return <RiGithubFill className={styles.icons} />
    // if (name == 'Facebook') return <RiFacebookCircleFill className={styles.icons} />
  }

  return (
    <LoginRegisterCard title="Sign in">
      <div className={styles.container}>
        {Object.values(providers).map((provider) => {
          return <button className={styles.buttons} key={provider.name} onClick={() => signIn(provider.id, { callbackUrl: '/feed' })}>
            { ProviderIcon(provider.name) }
            <p>Sign in with {provider.name}</p>
          </button>
        })}
      </div>
    </LoginRegisterCard>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: { providers }
  }
}