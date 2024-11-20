import { obj } from './toMatchObject'

test('클래스 비교는 toMatchObject로 해야 한다.', () => {
    // expect(obj('hello')).toStrictEqual({ a : 'hello' }); // Error - 클래스가 다른 객체(배열)의 경우 toStrictEqual로 비교 불가
    expect(obj('hello')).toMatchObject({ a : 'hello' });
});