const { chromium } = require('playwright');

(async () => {
  console.log('🔍 Final verification of cortexmomentum.com...\n');

  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://www.cortexmomentum.com', { waitUntil: 'networkidle' });

    // Check logo
    const logo = await page.locator('img[alt*="Cortex Momentum"]').first();
    const logoVisible = await logo.isVisible();
    const logoSrc = await logo.getAttribute('src');
    console.log(`✅ Logo: ${logoVisible ? 'VISIBLE' : 'NOT VISIBLE'} (src: ${logoSrc})`);

    // Check logo HTTP response
    try {
      const logoResponse = await page.request.get('https://www.cortexmomentum.com/logo.png');
      console.log(`✅ Logo file: HTTP ${logoResponse.status()} ${logoResponse.status() === 200 ? 'OK' : 'ERROR'}`);
    } catch (e) {
      console.log(`❌ Logo file: ERROR - ${e.message}`);
    }

    // Check booking links
    const bookingLinks = await page.locator('a[href*="calendar.app.google"]');
    const bookingCount = await bookingLinks.count();
    console.log(`✅ Booking links: ${bookingCount} found`);

    // Check header layout
    const headerContainer = await page.locator('.flex.items-center.space-x-4').first();
    const headerVisible = await headerContainer.isVisible();
    console.log(`✅ Header layout: ${headerVisible ? 'PROPERLY ALIGNED' : 'ISSUE DETECTED'}`);

    // Check responsiveness
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile
    const mobileLogoVisible = await logo.isVisible();
    console.log(`✅ Mobile logo: ${mobileLogoVisible ? 'VISIBLE' : 'NOT VISIBLE'}`);

    await page.setViewportSize({ width: 1200, height: 800 }); // Desktop
    const desktopLogoVisible = await logo.isVisible();
    console.log(`✅ Desktop logo: ${desktopLogoVisible ? 'VISIBLE' : 'NOT VISIBLE'}`);

    console.log('\n🎉 Verification completed!');
    await browser.close();

  } catch (error) {
    console.error('❌ Verification failed:', error.message);
  }
})();