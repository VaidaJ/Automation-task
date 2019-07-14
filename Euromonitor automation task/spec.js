var EC = protractor.ExpectedConditions;
var storeLink = element(by.id('store'));
var canadaLink = element(by.css('#countries-list > ul > li:nth-child(3) > a'));
var perPage = element(by.id('PageSize'));
var perPage50 = element(by.css('#PageSizeList > li:nth-child(4) > a'));
var addToCart = element(by.css('span[data-title="Colour Cosmetics in Canada"]'));
var colourCosmeticsInCanada = element(by.css('#DIV-results > div:nth-child(44) > div'));
var successMessage = element(by.css('li.xemi-nav-icon_cart.emi-cart-link.emi-cart-preview-fullscreen > div > div.emi-dropdown-cart-message'));
var checkout = element(by.css('li.xemi-nav-icon_cart.emi-cart-link.emi-cart-preview-fullscreen > div > div.emi-cart-buttons > a.emi-button-checkout'));
var userInformation = element(by.css('li.is-active > a'));

describe('Euromonitor automation task', function() {
    it('Go to Euromonitor.com website', async function() {
        browser.ignoreSynchronization = true;
        await browser.driver.manage().window().maximize();
        await browser.get('https://www.euromonitor.com/');
    });
    it('Hover over the Store link from the top navigation menu and select Canada', async function() {
        await browser.actions().mouseMove(storeLink).perform();
        await browser.actions().mouseMove(canadaLink).click().perform();
    });
    it('On the Canada page Add a report to the cart', async function() {
        await perPage.click();
        await perPage50.click();
        await browser.sleep(2000);
        await browser.actions().mouseMove(colourCosmeticsInCanada).perform();
        await addToCart.click();
    });
    it(' Verify the confirmation popup (Item Successfully Added to Cart) is displayed', async function() {
        await browser.wait(EC.textToBePresentInElement(successMessage, 'Item successfully added to cart!'), 5000);
    });
    it('Click on the Checkout option and verify User Information page is displayed.', async function() {
        await checkout.click();
        await browser.wait(EC.textToBePresentInElement(userInformation, '1. USER INFORMATION'), 5000);
    });
  });