import sum  from '../js/register/register_prime.js'; 
import {describe,it,expect} from 'vitest'




describe('#sum',()=>{
    it('should add 2 nums',()=>{
        expect(sum(3,3)).toBe(6)
    })
})