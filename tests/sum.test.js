import sum from '../js/sum';
import { describe, expect, it } from 'vitest';


describe('#sum',()=>{
    it('should add 2 nums',()=>{
        expect(sum(3,2)).toBe(5)
    })
})