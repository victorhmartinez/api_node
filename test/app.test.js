describe("[APP] esta es la prueba general",()=>{
    test("Esto debe retornar",()=>{
        const a=4;
        const b=4;
        const total= a+b;
        expect(total).toEqual(8);
    })
})