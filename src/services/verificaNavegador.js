export const VerificaNavegador = () => {
    const navegador = navigator

    return {
        appCodeName: navigator.appCodeName,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        platform: navigator.platform,
        userAgent: navigator.userAgent,
        vendor: navigator.vendor,
        userAgentData: navigator.userAgentData,
    }
}