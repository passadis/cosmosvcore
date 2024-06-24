import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication, EventType, AccountInfo } from "@azure/msal-browser";

import "./index.css";

import Layout from "./pages/layout/Layout";
import Chat from "./pages/chat/Chat";

var layout;

layout = <Layout />;

initializeIcons();

const router = createHashRouter([
    {
        path: "/",
        element: layout,
        children: [
            {
                index: true,
                element: <Chat />
            },
            {
                path: "*",
                lazy: () => import("./pages/NoPage")
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

import "./index.css";
import Layout from "./pages/layout/Layout";
import Chat from "./pages/chat/Chat";
import WelcomePage from "./pages/landing/WelcomePage";
import LoginForm from "./pages/landing/LoginForm"; // Import if needed for direct routing
import NoPage from "./pages/NoPage";

initializeIcons();

const msalConfig = {
    // MSAL Configuration here
};
const msalInstance = new PublicClientApplication(msalConfig);

const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <WelcomePage />
            },
            {
                path: "chat",
                element: <Chat />
            },
            {
                path: "login",  // Example if you need a direct route to LoginForm
                element: <LoginForm />
            },
            {
                path: "*",
                element: <NoPage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <RouterProvider router={router} />
        </MsalProvider>
    </React.StrictMode>
);
