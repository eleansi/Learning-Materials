import { filterUsers } from '../utils/utilFunctions';

const usersMock = [ "Leanne", "Michi", "John", "Lea", "Mickey" ];
const searchInputMock = "Lea";


describe("smut", () => {
    it("should run", () => {
        const checkFilter = filterUsers(usersMock, searchInputMock);
        expect(checkFilter.length).toBe(2);
    });
});
