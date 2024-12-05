
test('toBe 함수는 배열을 비교할 수 없다.', () => {
    expect([1, 2, 3]).not.toBe([1, 2, 3]);
});

test('toEqual, toStrictEqual 함수는 배열 비교가 가능하다.', () => {
    const targetArr = [1, 2, 3];
    expect(targetArr).toEqual([1, 2, 3]);
    expect(targetArr).toStrictEqual([1, 2, 3]);
});

test('toEqual 함수는 희소배열을 검사하지 않는다.', () => {
    const sparseArr = [1, , 3]; // 희소배열 (=인덱스는 있지만 값이 없는 상태의 값이 포함된 배열로 sparseArr1를 console.log를 통해 찍어보면 [1, empty, 3]과 같이 나온다.)
    const originArr = [1, 2, 3];
    delete originArr[1]; // 이 코드로 인해 originArr배열은 희소배열이 됨
    const withUndefinedArr = [1, undefined, 3];

    expect(sparseArr).toEqual(withUndefinedArr); // = expect(originArr).toEqual(withUndefinedArr);
});

test('toStrictEqual 함수는 희소배열도 검사한다.', () => {
    const sparseArr = [1, , 3]; // 희소배열
    const withUndefinedArr = [1, undefined, 3];

    expect(sparseArr).not.toStrictEqual(withUndefinedArr); // [1, empty, 3]와 [1, undefined, 3]는 다르다.
});