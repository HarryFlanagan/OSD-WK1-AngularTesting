import {getCurrencies} from './getCurrencies';

describe('Get Curriences', () => {
    it('it should get USD', () =>{
        expect(getCurrencies()).toContain('USD');
    });
    it('it should get GDP', () =>{
        expect(getCurrencies()).toContain('GDP');
    });
    it('it should get EUR', () =>{
        expect(getCurrencies()).toContain('EUR');
    });
    xit('it should get YEN', () =>{
        expect(getCurrencies()).toContain('YEN');
    });
});