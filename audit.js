const { chromium } = require('playwright');

(async () => {
  console.log('🔍 QA Audit of cortexmomentum.com...\n');

  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Set a shorter timeout and load the page
    await page.goto('https://www.cortexmomentum.com', {
      waitUntil: 'domcontentloaded',
      timeout: 15000
    });

    console.log('✅ Page loaded successfully');

    // Test 1: Logo Display
    console.log('\n📋 LOGO TESTS:');
    try {
      const logo = await page.locator('img[src="logo.png"]').first();
      const logoVisible = await logo.isVisible();
      const logoClass = await logo.getAttribute('class');
      const logoStyle = await logo.getAttribute('style');

      console.log(`✅ Logo visible: ${logoVisible ? 'YES' : 'NO'}`);
      console.log(`✅ Logo class: ${logoClass || 'none'}`);
      console.log(`✅ Logo inline style: ${logoStyle || 'none'}`);

      if (logoClass === 'logo' && !logoStyle) {
        console.log('✅ Logo styling: FIXED (using CSS class)');
      } else {
        console.log('❌ Logo styling: ISSUE (still using inline styles)');
      }
    } catch (e) {
      console.log(`❌ Logo test failed: ${e.message}`);
    }

    // Test 2: Logo HTTP Response
    console.log('\n🌐 LOGO FILE TESTS:');
    try {
      const logoResponse = await page.request.get('https://www.cortexmomentum.com/logo.png');
      console.log(`✅ Logo HTTP status: ${logoResponse.status()}`);
      console.log(`✅ Logo file size: ${logoResponse.headers()['content-length']} bytes`);
    } catch (e) {
      console.log(`❌ Logo file error: ${e.message}`);
    }

    // Test 3: Spacing Analysis
    console.log('\n📏 SPACING TESTS:');
    try {
      // Check section padding in computed styles
      const sections = await page.locator('section').all();
      console.log(`✅ Found ${sections.length} sections to check`);

      for (let i = 0; i < Math.min(3, sections.length); i++) {
        const section = sections[i];
        const padding = await section.evaluate(el => {
          const style = window.getComputedStyle(el);
          return {
            top: style.paddingTop,
            bottom: style.paddingBottom
          };
        });
        console.log(`✅ Section ${i+1} padding: ${padding.top} / ${padding.bottom}`);
      }
    } catch (e) {
      console.log(`❌ Spacing test failed: ${e.message}`);
    }

    // Test 4: Booking Links
    console.log('\n🔗 BOOKING LINK TESTS:');
    try {
      const bookingLinks = await page.locator('a[href*="calendar.app.google"]').all();
      console.log(`✅ Booking links found: ${bookingLinks.length}`);

      if (bookingLinks.length > 0) {
        const firstLink = bookingLinks[0];
        const href = await firstLink.getAttribute('href');
        const text = await firstLink.textContent();
        console.log(`✅ First booking link: "${text?.trim()}" -> ${href}`);
      }
    } catch (e) {
      console.log(`❌ Booking links test failed: ${e.message}`);
    }

    // Test 5: Responsiveness
    console.log('\n📱 RESPONSIVENESS TESTS:');
    try {
      // Mobile test
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(1000);
      const mobileLogoVisible = await page.locator('img[src="logo.png"]').first().isVisible();
      console.log(`✅ Mobile (375px): Logo visible = ${mobileLogoVisible}`);

      // Desktop test
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.waitForTimeout(1000);
      const desktopLogoVisible = await page.locator('img[src="logo.png"]').first().isVisible();
      console.log(`✅ Desktop (1200px): Logo visible = ${desktopLogoVisible}`);
    } catch (e) {
      console.log(`❌ Responsiveness test failed: ${e.message}`);
    }

    // Test 6: Performance Check
    console.log('\n⚡ PERFORMANCE TESTS:');
    try {
      const metrics = await page.evaluate(() => {
        const timing = performance.timing;
        return {
          loadTime: timing.loadEventEnd - timing.navigationStart,
          domReady: timing.domContentLoadedEventEnd - timing.navigationStart
        };
      });
      console.log(`✅ Page load time: ${metrics.loadTime}ms`);
      console.log(`✅ DOM ready time: ${metrics.domReady}ms`);
    } catch (e) {
      console.log(`❌ Performance test failed: ${e.message}`);
    }

    console.log('\n🎉 Audit completed successfully!');
    await browser.close();

  } catch (error) {
    console.error(`❌ Audit failed: ${error.message}`);
  }
})();
