const build = 'Parallel';
const screenResolution = '1600x1200';
const defaultBrowserSauceOptions = {
    build,
    screenResolution,
    seleniumVersion: '3.141.59',
    // extendedDebugging: true,
};
const chromeOptions = {
    'goog:chromeOptions': {
        args: [ '--no-sandbox', 'disable-infobars' ],
    },
};

// ============
// Capabilities
// ============
exports.config = {
    maxInstances : 100,
    capabilities : [
        {
            browserName: 'googlechrome',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
        },
        {
            browserName: 'internet explorer',
            browserVersion: 'latest',
            platformName: 'Windows 10',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
                iedriverVersion: '3.141.59',
            },
        },
        {
            browserName: 'chrome',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
            ...chromeOptions,
        },
        {
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
        },
        {
            browserName: 'safari',
            browserVersion: 'latest',
            platformName: 'macOS 10.14',
            'sauce:options': {
                ...defaultBrowserSauceOptions,
            },
        },
        {
            automationName: 'XCUITest',
            browserName: 'safari',
            deviceName: 'iPhone XS Simulator',
            platformName: 'iOS',
            platformVersion: '12.0',
            build,
        },
        {
            automationName: 'UiAutomator2',
            browserName: 'chrome',
            deviceName: 'Google Pixel GoogleAPI Emulator',
            platformName: 'Android',
            platformVersion: '8.0',
            build,
        }
    ],
    // ==================
    // Specify Test Files
    // ==================
    specs : [
        '../parallel/*.js',
    ]
};




