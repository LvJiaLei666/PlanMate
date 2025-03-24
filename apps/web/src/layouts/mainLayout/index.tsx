import { Breadcrumb, Layout, Menu } from "@arco-design/web-react"
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import styles from './index.module.less'

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
function MainLayout() {
    return (
        <Layout>
            <Sider className={styles.sider}>
                <Menu >
                    <MenuItem key='0_1' disabled>
                        <IconHome />
                        Menu 1
                    </MenuItem>
                    <MenuItem key='0_2'>
                        <IconCalendar />
                        Menu 2
                    </MenuItem>
                    <MenuItem key='0_3'>
                        <IconCalendar />
                        Menu 3
                    </MenuItem>
                    <SubMenu
                        key='1'
                        title={
                            <span>
                                <IconCalendar />
                                Navigation 1
                            </span>
                        }
                    >
                        <MenuItem key='1_1'>Menu 1</MenuItem>
                        <MenuItem key='1_2'>Menu 2</MenuItem>
                        <SubMenu key='2' title='Navigation 2'>
                            <MenuItem key='2_1'>Menu 1</MenuItem>
                            <MenuItem key='2_2'>Menu 2</MenuItem>
                        </SubMenu>
                        <SubMenu key='3' title='Navigation 3'>
                            <MenuItem key='3_1'>Menu 1</MenuItem>
                            <MenuItem key='3_2'>Menu 2</MenuItem>
                            <MenuItem key='3_3'>Menu 3</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sider>
            <Content>
                <Header></Header>
                <Breadcrumb></Breadcrumb>
            </Content>
            <Footer></Footer>
        </Layout>
    )
}

export default MainLayout