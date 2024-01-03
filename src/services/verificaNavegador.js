const navegador = navigator

export const VerificaNavegador = () => {
    return {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        deviceMemory: navigator.deviceMemory,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        userAgentData: navigator.userAgentData,
        vendor: navigator.vendor,
    }
}

