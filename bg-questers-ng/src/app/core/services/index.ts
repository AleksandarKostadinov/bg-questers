import { AuthService } from './authentication/auth.service';
import { HttpClientService } from './http-client.service';
import { QuestsService } from './quests/quest.service';

export const allServices = [ AuthService, HttpClientService, QuestsService];
