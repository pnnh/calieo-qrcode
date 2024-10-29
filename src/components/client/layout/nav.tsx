import './nav.scss'

export function NavComponent({path, lang}: { path: string, lang: string }) {
    const activeClass = (item: string) => {
        if (!item) {
            return path === `/${lang}` ? 'active' : ''
        }
        return path.startsWith(`/${lang}${item}`) ? 'active' : ''
    }
    return (
        <nav className={'navComponent'}>
            <div>
                <a href={`/${lang}`} className={activeClass('')}>QR Code</a>
                <a href={`/${lang}/barcode`} className={activeClass('/barcode')}>Bar Code</a>
            </div>
        </nav>
    )
}
