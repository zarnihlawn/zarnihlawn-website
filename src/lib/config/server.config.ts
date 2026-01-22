// private env only
import { env } from "$env/dynamic/private";

export class ServerConfig {

    // server address => http://localhost:1025 (default for local dev)
    getServerAddress(): string {
        // Use SERVER_URL from env if available, otherwise default to localhost for development
        const serverUrl = env.SERVER_URL || 'http://localhost:1025';
        
        if (!serverUrl) {
            throw new Error('SERVER_URL is not defined. Please set SERVER_URL environment variable (e.g., http://localhost:1025)');
        }
        
        return serverUrl;
    }
}
