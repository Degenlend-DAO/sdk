import { DegenlendConfig } from './config';
import { AccountService } from './services/AccountService';
import { IntentService } from './services/IntentService';


class DegenlendSDK {
    public account: AccountService;
    public intent: IntentService;
    // public markets: {
    //     wsx: WSXService;
    //     usdc: USDCService;
    // };

    constructor(options?: DegenlendConfig) {
     
        this.account = new AccountService();
        this.intent = new IntentService();
        
    }
}