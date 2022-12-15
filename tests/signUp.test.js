import { signUp_Prime } from '../js/register/register_prime'; 


const setLocalStorage = (id,date) => {
    window.localStorage.setItem(id, JSON.stringify(date));
}
test("data is added into local storage", () =>{
    const mockId = "1";
    const mockJson = { data: "json data"};
    setLocalStorage(mockId,mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
})


describe('#sum',()=>{
    it('should add 2 nums',()=>{
        expect(sum(3,2)).toBe(5)
    })
})