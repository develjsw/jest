import { getObject } from './test1'

test('toBe 함수는 객체를 비교할 수 없다.', () => {
    expect(getObject()).not.toBe({ name: '홍길동' });
});

test('toEqual, toStrictEqual 함수는 객체를 비교할 수 있다.', () => {
    expect(getObject()).toEqual({ name: '홍길동' });
    expect(getObject()).toStrictEqual({ name: '홍길동' });
})

test('객체 비교에서 공백은 다른 것으로 간주한다.', () => {
    expect(getObject()).not.toEqual({ name: '홍길동 ' });
});

test('(")와 같은 부분들은 비교에 영향을 주지 않는다.', () => {
    expect(getObject()).toEqual({ name : "홍길동"});
});
