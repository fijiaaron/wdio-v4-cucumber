class BaseHiltonPropertyPage {
	constructor() { };
	/**
	 * Place all of the common locators and methods here for all of the Property pages.
	 * For example, what is the similarity between a Memphis Property and a New York Property?
	 * - Looks like the 'Departure' Column is the same regardless of property
	 * - 'Stayover' column
	 * - 'Atendant Maximum' component and interacting with it?
	 * - 'Save Changes' button and clicking it?
	 * 
	 * Only common components of ALL of the pages go here. Not 2/10 pages not 9/10 pages, but 10/10 pages. 
	 * If those 10 pages have something in common, it goes here.
	 * This is known as the Liskov Substitution Principle
	 */

	goToCleaningValues() {
		/**
		 * This is the new preferred way to interact with elements
		 * and makes the migration to wdio V5 easier because the above method
		 * will be removed from V5 (no selectors are allowed anymore with
		 * actions)
		 * 
		 * Here just click on the cleaning values tab
		 */		
		cleaningValuesElement = $('a*=cleaningValues');
		cleaningValuesElement.waitForVisible(25000);
		cleaningValuesElement.click();
	}
}

export default BaseHiltonPropertyPage;
