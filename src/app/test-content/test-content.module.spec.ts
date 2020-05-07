import { TestContentModule } from './test-content.module';

describe('TestContentModule', () => {
  let testContentModule: TestContentModule;

  beforeEach(() => {
    testContentModule = new TestContentModule();
  });

  it('should create an instance', () => {
    expect(testContentModule).toBeTruthy();
  });
});
