import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import {QRCodeComponent} from "@/components/client/qrcode";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {BarCodeComponent} from "@/components/client/barcode";

const router = createBrowserRouter([
    {
        path: "/",
        element: <QRCodeComponent/>,
    },
    {
        path: "/barcode",
        element: <BarCodeComponent/>,
    },
]);


const container = document.getElementById('root')
if (!container) {
    throw new Error('container is null')
}
const root = ReactDOMClient.createRoot(container)
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);





