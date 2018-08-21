import { RaidsModule } from './raids.module';

describe('RaidsModule', () => {
  let raidsModule: RaidsModule;

  beforeEach(() => {
    raidsModule = new RaidsModule();
  });

  it('should create an instance', () => {
    expect(raidsModule).toBeTruthy();
  });
});
