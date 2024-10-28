import React, {useState} from "react";
import {textToBarCode} from "@/services/client/barcode";
import {MainLayout} from "@/components/client/layout/main";
import i18next from "i18next";
import './barcode.scss'

export function BarCodeComponent() {
    const [text, setText] = useState('abcd')
    const [error, setError] = useState('')
    return <MainLayout path={'/barcode'}>
        <div className={'barCodeComponent'}>
            <div className={'description'}>{i18next.t('barcode.description')}</div>
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
    </MainLayout>
}
