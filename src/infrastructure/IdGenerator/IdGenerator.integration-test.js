import { describe, it, expect, vi, beforeEach } from "vitest"
import { IdGeneratorNode } from "./IdGeneratorNode"

describe("IdGeneratorNode", () => {  
    //arrange act assert
    it("must output a different id whenever is called", () => {
        const idGenerator = new IdGeneratorNode();

        const id1 = idGenerator.generate();
        const id2 = idGenerator.generate();    

        expect(id1).not.toStrictEqual(id2);
    })
    
    /*
    it("should call randomUUID function", async function() {
        const IdGenerator = new IdGeneratorNode();
        vi.spyOn(IdGenerator, "randomUUID");        
        IdGenerator.generate();
        return expect(crypto.randomUUID()).toHaveBeenCalled();
    })
    */

});