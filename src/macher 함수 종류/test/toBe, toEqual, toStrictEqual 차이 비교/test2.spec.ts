import { AClass, BClass, CClass } from './test2'

test('toEqual 함수는 객체의 형태와 속성값만 같으면 같은 객체로 인식한다.', () => {
    const aInstance = new AClass();
    const bInstance = new BClass();

    expect(aInstance).toEqual(bInstance)
})

test('toEqual 함수는 객체의 속성값이 다르면 다른 객체로 인식한다.', () => {
    const aInstance = new AClass();
    const cInstance = new CClass();

    expect(aInstance).not.toEqual(cInstance)
})

test('toEqualStrict 함수는 객체도 같고 클래스명도 같아야 같은 것으로 간주한다. (AClass와 BClass는 객체는 같아도 클래스명이 다르다.)', () => {
    const aInstance = new AClass();
    const bInstance = new BClass();

    expect(aInstance).not.toStrictEqual(bInstance)
})