import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import {RecoilRoot} from "recoil";
import AppIndex from "@/app/page";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<AppIndex/>),
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
]);

const rootElement = document.getElementById("root")
if (!rootElement) {
    throw new Error("Root element not found");
}

createRoot(rootElement).render(
    <RecoilRoot>
        <RouterProvider router={router}/>
    </RecoilRoot>
);
