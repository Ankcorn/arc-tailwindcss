const path = require('path');
let invokeLambda = require('@architect/sandbox/invokeLambda');
const createLambdaJSON = require('@architect/package/createLambdaJSON');
const { toLogicalID } = require('@architect/utils');

module.exports = {
    package ({ arc, cloudformation, stage = 'staging', inventory }) {
        const cwd = inventory.inv._project.src;
        if (!arc.template) {
            return cloudformation;
        }
       
        /** Convert dash-case to PascalCase */
        toLogicalID()

        /** Create cloudformation for a new lambda function */

        createLambdaJSON()

        /**
         * Modify cloudformation here to deploy extra cloud resources
         * 
         * 
         */

        return cloudformation;
    },
    pluginFunctions ({ arc, inventory }) {
        /**
         * Define any new functions here
         */
        return [];
    },
    sandbox: {
        async start ({ arc, inventory }) {
            /** Start any sandbox processes */
        },
        async end () {
            /** End any sandbox processes */
        }
    }
};
