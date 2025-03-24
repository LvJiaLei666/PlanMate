import { useState } from 'react'
import { Form, Input, Button, Card, Message } from '@arco-design/web-react'
import { IconUser, IconLock } from '@arco-design/web-react/icon'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'

interface LoginForm {
    username: string
    password: string
}

function Login() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const onFinish = async (values: LoginForm) => {
        try {
            setLoading(true)
            // TODO: 这里需要接入实际的登录API
            console.log('登录信息:', values)

            // 模拟登录成功
            if (values.username === 'admin' && values.password === 'admin') {
                Message.success('登录成功')
                // 存储登录状态
                localStorage.setItem('isLoggedIn', 'true')
                localStorage.setItem('username', values.username)
                // 跳转到主页
                navigate('/')
            } else {
                Message.error('用户名或密码错误')
            }
        } catch (error) {
            Message.error('登录失败，请重试')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.loginContainer}>
            <Card className={styles.loginCard} title="欢迎登录 PlanMate" bordered={false}>
                <Form
                    className={styles.loginForm}
                    onSubmit={onFinish}
                    autoComplete="off"
                    size="large"
                >
                    <Form.Item
                        field="username"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input
                            prefix={<IconUser />}
                            placeholder="用户名"
                        />
                    </Form.Item>

                    <Form.Item
                        field="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password
                            prefix={<IconLock />}
                            placeholder="密码"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            long
                            loading={loading}
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login    