import {useState} from "react";
import {textToBarCode} from "@/services/client/barcode";
import {NavComponent} from "@/components/client/nav";

export function BarCodeComponent() {
    const [text, setText] = useState('abcd')
    const [error, setError] = useState('')
    return <div>
        <NavComponent/>
        <div>条形码生成</div>
        <div>
            <textarea value={text} onChange={(event) => setText(event.target.value)}></textarea>
        </div>
        <div>
            <button onClick={() => {
                if (!text) {
                    return
                }
                textToBarCode('#resultContainer', text)
            }}>
                点击生成
            </button>
        </div>
        <div>
            {error && <div>{error}</div>}
        </div>
        <svg id={'resultContainer'}>
        </svg>
    </div>
}
