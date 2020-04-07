const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () =>
{
    describe('repair()', () =>
    {
        it('Repairs durability', () =>
        {
            expect(enhancer.repair({durability: 75}).durability).toBe(100);
            expect(enhancer.repair({durability: 12}).durability).toBe(100);
        });
    });

    describe("succeed()", ()=>
    {
        it("Increases enhancement", ()=>
        {
            expect(enhancer.succeed({enhancement: 14}).enhancement).toBe(15);
            expect(enhancer.succeed({enhancement: 2}).enhancement).toBe(3);
        });
        it("Maximum value at 20", ()=>
        {
            expect(enhancer.succeed({enhancement:20}).enhancement).toBe(20);
        });
    });

    describe("fail()", ()=>
    {
        it("Enhancement >= 15 -> Durability -= 10", ()=>
        {
            expect(enhancer.fail(
                {
                    enhancement:20,
                    durability:20
                }).durability).toBe(10);
        });

        it("Enhancement < 15 -> Durability -= 5", ()=>
        {
            expect(enhancer.fail(
                {
                    enhancement:14,
                    durability:20
                }).durability).toBe(15);
        });

        it ("Enhancement knockoff > 16", ()=>
        {
            expect(enhancer.fail(
                {
                    enhancement:18,
                    durability:20
                }).enhancement).toBe(17);
        });
    });
});