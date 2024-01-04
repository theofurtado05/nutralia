export const VerificaNavegador = async () => {
    const navigatorInfo = {
        appCodeName: navigator.appCodeName || '',
        appName: navigator.appName || '',
        appVersion: navigator.appVersion || '',
        cookieEnabled: navigator.cookieEnabled || false,
        deviceMemory: navigator.deviceMemory || 0,
        platform: navigator.platform || '',
        userAgent: navigator.userAgent || '',
        userAgentData: navigator.userAgentData || null,
        vendor: navigator.vendor || ''
    };

    return navigatorInfo;
};