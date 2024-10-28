import i18next from "i18next";
import {NavComponent} from "./nav";
import './main.scss'

export function MainLayout({path, children}: { path: string, children: any }) {
    return <div className={'mainLayout'}>
        <h1 className={'productTitle'}>{i18next.t('client.title')}</h1>
        <NavComponent path={path}/>
        <div>
            {children}
        </div>
    </div>
}
