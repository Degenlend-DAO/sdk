
export interface DegenlendConfig {
    apiBaseUrl?: string;
}

let config: DegenlendConfig = {
    apiBaseUrl: 'https://api.degenlend.com',
};

export function getConfig(): DegenlendConfig {
    return config;
}

export function setConfig(newConfig: DegenlendConfig): void {
    config = {
        ...config,
        ...newConfig,
    };
}

export default {
    getConfig,
    setConfig,
}