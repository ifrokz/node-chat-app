const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', ()=>{
    it('should generate the correct message object', ()=>{
        const from = 'Author';
        const text = 'Some text';
        const message = generateMessage(from, text);

        expect(message).toMatchObject({text,from});
        expect(typeof message.createdAt).toBe('number');
    })  
});