import viteLogo from '../../../public/vite.svg'
import reactLogo from '@/assets/react.svg'
import { Button } from '@arco-design/web-react'
import { useState } from 'react'
import styles from './Hello.module.less'

export default function Hello() {
    const [count, setCount] = useState(0)
    return (
        <div className={styles.container}>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className={styles.logo} alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button type="primary" onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}