import {useState} from "react";
import {textToQRCode} from "@/services/client/qrcode";
import {MainLayout} from "@/components/client/layout/main";
import './qrcode.scss'
import i18next from "i18next";

export function QRCodeComponent() {
    const [text, setText] = useState('')
    const [downloadUrl, setDownloadUrl] = useState('')
    const [error, setError] = useState('')
    return <MainLayout path={'/'}>
        <div className={'qrCodeComponent'}>
            {/*<div className={'description'}>{i18next.t('qrcode.description')}</div>*/}
            <div className={'textContainer'}>
                <textarea value={text}
                          onChange={(event) => setText(event.target.value)}
                          maxLength={2048}></textarea>
            </div>
            <div className={'actionContainer'}>
                <button onClick={() => {
                    if (!text) {
                        setError(i18next.t('qrcode.emptyText'))
                        return
                    }
                    try {
                        setError('')
                        textToQRCode(text).then(downloadUrl => {
                            setDownloadUrl(downloadUrl)
                        })
                    } catch (e) {
                        setError(`${i18next.t('qrcode.errorTip')}${e}`)
                    }
                }}>
                    {i18next.t('qrcode.generate')}
                </button>
            </div>
            <div className={'errorContainer'}>
                {error && <div>{error}</div>}
            </div>
            <div className={'resultContainer'}>
                {
                    downloadUrl && <img alt={'preview'} src={downloadUrl}/>
                }
            </div>
        </div>
    </MainLayout>
}
