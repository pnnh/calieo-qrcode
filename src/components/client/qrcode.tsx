import {useState} from "react";
import {textToQRCode} from "@/services/client/qrcode";
import {NavComponent} from "@/components/client/nav";

export function QRCodeComponent() {
    const [text, setText] = useState('输入文本')
    const [downloadUrl, setDownloadUrl] = useState('')
    const [error, setError] = useState('')
    return <div>
        <NavComponent/>
        <div>二维码生成</div>
        <div>
            <textarea value={text} onChange={(event) => setText(event.target.value)}></textarea>
        </div>
        <div>
            <button onClick={() => {
                if (!text) {
                    return
                }
                try {
                    textToQRCode(text).then(downloadUrl => {
                        setDownloadUrl(downloadUrl)
                    })
                } catch (e) {
                    setError('生成出错')
                }
            }}>
                点击生成
            </button>
        </div>
        <div>
            {error && <div>{error}</div>}
        </div>
        <div title={'结果预览'}>
            {
                downloadUrl && <img alt={'预览图'} src={downloadUrl}/>
            }
        </div>
    </div>
}