import { obj } from './toStrictEqual'

test('객체는 toStrictEqual로 비교한다.', () => {
    // expect(obj()).toBe({ a : 'hello' }) // Error - 객체끼리 비교할 때는 toBe 사용불가
    expect(obj()).toStrictEqual({ a : 'hello' });
    expect(obj()).not.toStrictEqual({ a : 'hi' });
    expect(obj()).not.toBe({ a : 'hello' });
});

test('배열끼리도 toStrictEqual 써야한다.', () => {
    expect([1, 2, 3]).toStrictEqual([1, 2, 3]);
    expect([1, 2, 3]).not.toBe([1, 2, 3]);
});