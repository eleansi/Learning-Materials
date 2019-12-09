import { filterUsers } from '../../utils/utilFunctions';

const usersMock = [ "Leanne", "Michi", "John", "Lea", "Mickey" ];
const searchInputMock = "Lea";


describe("smut", () => {
    it("should run", () => {
        expect(filterUsers(usersMock, searchInputMock).length).toBe(2);
    });
});
