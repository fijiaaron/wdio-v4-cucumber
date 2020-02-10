import LoginScreen from '../../screen-objects/login';
import BookingScreen from '../../screen-objects/booking';

// THIS IS ONLY PSEUDOCODE!!
describe('Booking a room', () => {
    beforeEach(() => {
        // Restart the app before each session
        restartApp();
        LoginScreen.waitForIsShown();
      });
    // Given I open the Hilton App
    // When I login in as a valid user
    // And I want to book a room
    //     | place                  | when      | for    | adults | kids | rates |
    //     | San Francisco, CA, USA | next week | 8 days | 2      | 2    | no    |
    // Then I will be presented a confirmation
    it('should be be able to book a room for 4 people', () => {
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        //The values below can come from some object
        //You can even make it so that only the correct values are possible
        //to avoid any data entry/fat fingering errors
        BookingScreen.bookRoom("San Francisco, CA, USA", "next week", "8 days");
        expect(ConfirmationPage.isLoaded()).toEqual(true);
    });
});