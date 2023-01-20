
import { describe, expect, it } from 'vitest';
import Api from '../app/api';


describe('test tests', () => {
    it('error if no data', async () => {
        try {
            expect(await Api.getSessionKey()).toThrowError();
        } catch (error) {
            expect(error).toBe(error);
        }
    });

    it('error if no username', async () => {
        try {
            expect(await Api.getSessionKey({ username: '', password: 123 })).toThrowError();
        } catch (error) {
            expect(error.message).toBe('No username or password');
        }
    });

    it('wrong user data', async () => {
        try {
            expect(await Api.getSessionKey({ username: 'user', password: 123 })).toThrowError();
        } catch (error) {
            expect(error.message).toBe('AxiosError: Request failed with status code 400');
        }
    });
})
