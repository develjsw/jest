import { createInstance } from './test1'

test('Class를 포함한 객체 전체를 비교할 때는 toStrictEqual을 사용한다.', () => {
    const instanceA = createInstance(100);

    expect(instanceA).not.toStrictEqual({ memberId: 100 });
});

test('toMatchObject 함수는 Class를 비교하지 않는다.', () => {
    const instanceA = createInstance(100);

    expect(instanceA).toMatchObject({ memberId: 100 });
});

test('toMatchObject 함수는 객체의 일부분만 소속되어 있어도 된다.', () => {
    expect({ memberId: 100, name: '홍길동', age: 20 }).toMatchObject({ name: '홍길동' });
});

test('toMatchObject 함수는 객체에 없는 속성을 포함시킬 수는 없다.', () => {
    expect({ memberId: 100, name: '홍길동', age: 20 }).not.toMatchObject({ address: 'seoul' });
    expect({ memberId: 100, name: '홍길동', age: 20 }).not.toMatchObject({ name: '홍길동', address: 'seoul' });
});