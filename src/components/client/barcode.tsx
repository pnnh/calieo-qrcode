import React, {useState} from "react";
import {textToBarCode} from "@/services/client/barcode";
import {MainLayout} from "@/components/client/layout/main";
import './barcode.scss'
import i18next from "i18next";

export function BarCodeComponent() {
    const [text, setText] = useState('')
    const [error, setError] = useState('')
    return <MainLayout path={'/barcode'}>
        <div className={'barCodeComponent'}>
            {/*<div className={'description'}>{i18next.t('barcode.description')}</div>*/}
            <div className={'textContainer'}>
                <textarea value={text}
                          maxLength={2048}
                          onChange={(event) => setText(event.target.value)}></textarea>
            </div>
            <div className={'actionContainer'}>
                <button onClick={() => {
                    if (!text) {
                        setError(i18next.t('barcode.emptyText'))
                        return
                    }
                    try {
                        setError('')
                        textToBarCode('#resultContainer', text)
                    } catch (e) {
                        setError(`${i18next.t('barcode.errorTip')}${e}`)
                    }
                }}>
                    {i18next.t('barcode.generate')}
                </button>
            </div>
            <div className={'errorContainer'}>
                {error && <div>{error}</div>}
            </div>
            <div className={'resultContainer'}>
                <svg id={'resultContainer'}>
                </svg>
            </div>
        </div>
    </MainLayout>
}
