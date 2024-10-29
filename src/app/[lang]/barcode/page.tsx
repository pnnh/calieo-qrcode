import React from 'react'
import './page.scss'
import {MainLayout} from "@/components/client/layout/main";
import {BaseRouterParams, SeoMeta} from "@/components/client/layout/root";
import {headers} from "next/headers";
import {BarCodeComponent} from "@/components/client/barcode";
import {useServerTranslation} from "@/services/server/i18n";

export default async function Home({params, searchParams}: {
    params: Promise<BaseRouterParams>,
    searchParams: Promise<Record<string, string>>
}) {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || "";
    const baseParams = await params;
    const {t: trans} = await useServerTranslation(baseParams.lang)
    const seoMeta: SeoMeta = {
        title: trans('qrcode.seo.title'),
        keywords: trans('qrcode.seo.keywords'),
        description: trans('qrcode.seo.description'),
        lang: baseParams.lang
    }
    return <MainLayout path={pathname} params={baseParams} seoMeta={seoMeta}>
        <div className={'barCodePage'}>
            <h1 className={'productTitle'}>{trans('barcode.title')}</h1>
            <BarCodeComponent lang={baseParams.lang}/>
        </div>
    </MainLayout>
}
