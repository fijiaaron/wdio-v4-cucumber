import BaseHiltonPropertyPage from '/baseHiltonPropertyPage.js'

class NewYorkPropertyPage extends BaseHiltonPropertyPage {

	constructor() {
		super();
	}

	/**
	 * Locators and methods related ONLY to the New York Property page go here.
	 * It will only be unique stuff that lives here. 
	 * Like the room types for example.
	 */

	containsExpectedRooms(expectedRoomTypes){
		//iterate thought the expected rooms and make sure that they match to what you find on the
		//page object
	}
};

export default new NewYorkPropertyPage();
