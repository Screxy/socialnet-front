'use client'

import {Provider} from "react-redux";
import {ReactNode} from "react";
import { setupStore } from '@/store/store'

const store = setupStore()

export function Providers({children}: { children: ReactNode }) {
    return (
        <Provider store={store}>{children}</Provider>
    );
}
