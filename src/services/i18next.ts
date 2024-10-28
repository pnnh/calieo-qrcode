import i18next from 'i18next';

export function initI18n(lang?: string) {
    let realLang = lang || 'en';
    if (realLang.indexOf('-') !== -1) {
        realLang = realLang.split('-')[0];
    }
    if (realLang !== 'en' && realLang !== 'zh') {
        realLang = 'en';
    }
    i18next.init({
        lng: realLang,
        debug: false,
        resources: {
            en: getEnJson(),
            zh: getZhJson()
        }
    }).then(r => {
    });
}

export function getZhJson() {
    return {
        translation: {
            client: {
                title: "二维码与条形码工具"
            },
            barcode: {
                description: '生成条形码'
            },
            qrcode: {
                description: '生成二维码'
            }
        }
    }
}

export function getEnJson() {
    return {
        translation: {
            client: {
                "title": "QR Code & Barcode Tool"
            },
            barcode: {
                description: 'Generate Barcode'
            },
            qrcode: {
                description: 'Generate QR Code'
            }
        }
    }
}
