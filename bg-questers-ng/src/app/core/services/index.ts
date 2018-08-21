import { AuthService } from './authentication/auth.service';
import { HttpClientService } from './http-client.service';
import { QuestsService } from './quests/quest.service';
import { RaidsService } from './raids/raids.service';

export const allServices = [ AuthService, HttpClientService, QuestsService, RaidsService];
