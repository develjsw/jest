import { obj } from './mockFunction';

// obj.minus에 스파이를 심고 반환 값을 변경하지 않음
/*test('obj.minus 함수가 1번 호출되었다. (spy 삽입)', () => {
    jest.spyOn(obj, 'minus'); // 스파이를 심음 (기본 동작 유지)
    const result = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(1); // 호출 횟수 검증
    expect(result).toBe(-1); // 원래 함수 동작 검증
});*/


// mockImplementation으로 동작 변경: 아무 값도 반환하지 않음
/*test('obj.minus에 스파이를 심고 실행도 안되게한다.', () => {
    jest.spyOn(obj, 'minus').mockImplementation(); // 아무 동작도 하지 않도록 설정
    const result = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(undefined); // 반환값이 undefined인지 확인
});*/


// mockImplementation으로 반환값 고정
/*test('obj.minus에 스파이를 심고 리턴값을 바꾸게한다. (case 1)', () => {
    jest.spyOn(obj, 'minus').mockImplementation(() => 555); // 항상 555 반환
    const result = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(555);
});*/


// mockImplementation으로 동작 변경: 입력값에 따라 반환값 설정
/*test('obj.minus에 스파이를 심고 리턴값을 바꾸게한다. (case 2)', () => {
    jest.spyOn(obj, 'minus').mockImplementation((a, b) => a + b); // 두 숫자를 더함
    const result = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(3);
});*/


// mockImplementationOnce로 호출마다 다른 동작 설정
/*test('obj.minus에 스파이를 심고 리턴값이 서로 다르게 나오게한다. (case 1)', () => {
    jest.spyOn(obj, 'minus')
        .mockImplementationOnce((a, b) => a + b) // 첫 호출: 두 숫자를 더함
        .mockImplementationOnce(() => 5) // 두 번째 호출: 5 반환
        .mockImplementation(() => -1); // 이후 호출: -1 반환

    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(3);
    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(-1);
});*/


// mockImplementationOnce와 이후 기본 동작 설정
/*test('obj.minus에 스파이를 심고 리턴값이 서로 다르게 나오게한다. (case 2)', () => {
    jest.spyOn(obj, 'minus')
        .mockImplementationOnce((a, b) => a + b) // 첫 호출: 두 숫자를 더함
        .mockImplementationOnce(() => 5) // 두 번째 호출: 5 반환
        .mockImplementation(() => 555); // 이후 호출: 555 반환

    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(3);
    expect(result1).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(555);
});*/


// mockReturnValue로 항상 동일한 반환값 설정
/*test('obj.minus에 스파이를 심고 리턴값이 다르게 나오게한다. (mockReturnValue)', () => {
    jest.spyOn(obj, 'minus').mockReturnValue(555); // 항상 555 반환
    const result = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(1);
    expect(result).toBe(555);
});*/


// mockReturnValueOnce로 호출마다 다른 반환값 설정
test('obj.minus에 스파이를 심고 리턴값이 다르게 나오게한다. (mockReturnValueOnce)', () => {
    jest.spyOn(obj, 'minus')
        .mockReturnValueOnce(5) // 첫 호출: 5 반환
        .mockReturnValueOnce(3) // 두 번째 호출: 3 반환
        .mockReturnValue(8); // 이후 호출: 8 반환

    const result1 = obj.minus(1, 2);
    const result2 = obj.minus(1, 2);
    const result3 = obj.minus(1, 2);

    expect(obj.minus).toHaveBeenCalledTimes(3);
    expect(result1).toBe(5);
    expect(result2).toBe(3);
    expect(result3).toBe(8);
});
