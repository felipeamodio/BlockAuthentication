import { useEffect, useState } from "react";

import { useNavigationState } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";

export function useScreenGuard(screenName: string){
    const [sessionTime, setSessionTime] = useState(0);
    const navigationState = useNavigationState(state => state);

    async function handleAuthentication() {
        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Sessão Expirada'
        })
        if(auth.success){
            setSessionTime(0)
        }else{
            handleAuthentication();
        }
    }

    useEffect(() => {
        if(sessionTime < 10){
            //Continua a contagem do tempo
            const timer = setTimeout(() => {
                setSessionTime(prevState => prevState + 1)
                console.log(sessionTime);
            }, 1000);

            return () => clearTimeout(timer);
        }else{
            if(navigationState.routes){
                const currentScreen = navigationState.routes[navigationState.index] //identificando a tela que estou no momento

                if(currentScreen.name === screenName){
                    handleAuthentication();
                }
            }
        }
    }, [sessionTime])
}