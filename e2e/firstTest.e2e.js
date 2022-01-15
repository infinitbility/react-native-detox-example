describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should have login screen', async () => {
    await expect(element(by.id('loginView'))).toBeVisible();
  });
  it('should fill login form', async () => {
    await element(by.id('emailInput')).typeText('infinitbility@gmail.com');
    await element(by.id('passwordInput')).typeText('1234');
    await element(by.id('loginButton')).tap();
  });
});