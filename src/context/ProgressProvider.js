import { createContext, useContext, useState } from "react";

const ProgressContext = createContext()
const UpdateProgressContext = createContext()

export function useProgress(){
    return useContext(ProgressContext)
}

export function useSetProgress(){
    return useContext(UpdateProgressContext)
}

export default function ProgressProvider({ children }) {
    const [progress, setProgress] = useState(undefined)

    return (
        <ProgressContext.Provider value={progress}>
            <UpdateProgressContext.Provider value={setProgress}>
                {children}
            </UpdateProgressContext.Provider>
        </ProgressContext.Provider>
    )
}