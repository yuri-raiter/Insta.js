import LoginRegisterCard from "../../components/LoginRegisterCard.tsx"
import { useFormik } from "formik"
import * as Yup from 'yup'
import styles from './styles.module.scss'

export default function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required').max(8, 'Maximum of 8 digits')
    }),
    onSubmit: (values) => console.log(values)
  })

  return (
    <LoginRegisterCard title='Register'>
      <form onSubmit={formik.handleSubmit}className={styles['user-data']}>
        <div className={styles.name}>
          <div className={styles['input-label-message']}>
            <div className={styles['input-label']}>
              <label htmlFor="first-name">First Name</label>
              <input
                id='firstName'
                name='firstName'
                type="text"
                placeholder="John"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </div>
            {formik.touched.firstName && formik.errors.firstName ? (
              <p>{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div className={styles['input-label-message']}>
            <div className={styles['input-label']}>
              <label htmlFor="last-name">Last Name</label>
              <input
                id='lastName'
                name='lastName'
                type="text"
                placeholder="Doe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
            </div>
            {formik.touched.lastName && formik.errors.lastName ? (
              <p>{formik.errors.lastName}</p>
            ) : null}
          </div>
        </div>
        <div className={styles['username-password']}>
          <div className={styles['input-label-message']}>
            <div className={styles['input-label']}>
              <label htmlFor="username">Username</label>
              <input
                id='username'
                name='username'
                type="text"
                placeholder="johndoe"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </div>
            {formik.touched.username && formik.errors.username ? (
              <p>{formik.errors.username}</p>
            ) : null}
          </div>
          <div className={styles['input-label-message']}>
            <div className={styles['input-label']}>
              <label htmlFor="password">Password</label>
              <input
                id='password'
                name='password'
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </div>
        </div>
        <div className={styles['link-button']}>
          <p>Already have an account? <a href='#'>Log in</a></p>
          <button type="submit">Register</button>
        </div>
      </form>
    </LoginRegisterCard>
  )
}