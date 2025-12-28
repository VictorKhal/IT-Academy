import allureReporter from '@wdio/allure-reporter';

export const config = {
   
    runner: 'local',
   
    specs: [
        './test/specs/**/*.js'
    ],
   
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,
    
    capabilities: [{
        browserName: 'chrome'
    // }, {
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'safari'
    }],

    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['visual'],

    framework: 'mocha',
    
    reporters: ['spec',
                ['allure', {outputDir: 'allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: true,
                    }
                ]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report');

        return new Promise((resolve, reject) => {
            const generation = allure([
                'generate',
                'allure-results',
                '--clean'
            ]);

            generation.on('exit', function (exitCode) {
                if (exitCode !== 0) {
                    return reject(reportError);
                }

                console.log('Allure report successfully generated');
                resolve();
            });
        });
    }
}
