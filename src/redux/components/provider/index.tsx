'use client';

import { FC } from "react";
import { ReduxProviderProps as Props } from "./props";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

export const ReduxProvider : FC<Props> = ({
    children
}) => (
    <Provider
        store={store}
    >
        <PersistGate
            loading={null}
            persistor={persistor}
        >
            { children }
        </PersistGate>
    </Provider>
)