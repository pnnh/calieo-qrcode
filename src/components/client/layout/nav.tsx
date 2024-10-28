import './nav.scss'

export function NavComponent({path}: { path: string }) {
    return (
        <nav className={'navComponent'}>
            <div>
                <a href="/" className={path === '/' ? 'active' : ''}>QR Code</a>
                <a href="/barcode" className={path === '/barcode' ? 'active' : ''}>Bar Code</a>
            </div>
        </nav>
    )
}
