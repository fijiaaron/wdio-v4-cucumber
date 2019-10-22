import BaseHiltonPropertyPage from './baseHiltonPropertyPage'

class HiltonMobileAppPage extends BaseHiltonPropertyPage {

	constructor() {
		super();
	}

	open() {
		//do the operations that will open the hilton mobile app
	}

	isLoaded() {
		/**
		 * This is the new preferred way to interact with elements
		 * and makes the migration to wdio V5 easier because the above method
		 * will be removed from V5 (no selectors are allowed anymore with
		 * actions)
		 */
		const header = $('#global_header');
		return header.waitForVisible(5000);
	}

	openSettings() {
		/**
		 *Open the Setting part of the applciation here
		 */
	}
};

export default new HiltonMobileAppPage();
