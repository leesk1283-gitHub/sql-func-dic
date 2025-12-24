const SQL_FUNCTIONS_DATA = [
  {
    "id": 1,
    "name": "ABS",
    "description": "숫자의 절대값을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT ABS(-10);",
    "example_result": "| ABS(-10) |\n| :--- |\n| 10 |"
  },
  {
    "id": 2,
    "name": "ACOS",
    "description": "숫자의 아크코사인을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT ACOS(0.5);",
    "example_result": "| ACOS(0.5) |\n| :--- |\n| 1.04719... |"
  },
  {
    "id": 3,
    "name": "ASIN",
    "description": "숫자의 아크사인을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT ASIN(0.5);",
    "example_result": "| ASIN(0.5) |\n| :--- |\n| 0.52359... |"
  },
  {
    "id": 4,
    "name": "ATAN",
    "description": "숫자의 아크탄젠트를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT ATAN(1);",
    "example_result": "| ATAN(1) |\n| :--- |\n| 0.78539... |"
  },
  {
    "id": 5,
    "name": "ATAN2",
    "description": "두 인수의 아크탄젠트를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT ATAN2(1, 1);",
    "example_result": "| ATAN2(1, 1) |\n| :--- |\n| 0.78539... |"
  },
  {
    "id": 6,
    "name": "AVG",
    "description": "그룹 내 값들의 평균을 계산합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT AVG(score) FROM scores;",
    "example_result": "| AVG |\n| :--- |\n| 85.5 |"
  },
  {
    "id": 7,
    "name": "BIT_LENGTH",
    "description": "문자열의 비트 크기를 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT BIT_LENGTH('SQL');",
    "example_result": "| BIT_LENGTH |\n| :--- |\n| 24 |"
  },
  {
    "id": 8,
    "name": "CAST",
    "description": "데이터 타입을 다른 타입으로 변환합니다. (예: 문자열 → 숫자)",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CAST('100' AS INT);",
    "example_result": "| CAST |\n| :--- |\n| 100 |"
  },
  {
    "id": 9,
    "name": "CEIL / CEILING",
    "description": "소수점 첫째 자리에서 올림합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CEIL(4.2);",
    "example_result": "| CEIL |\n| :--- |\n| 5 |"
  },
  {
    "id": 10,
    "name": "CHAR_LENGTH / CHARACTER_LENGTH",
    "description": "문자열의 문자 개수를 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CHAR_LENGTH('Snowflake');",
    "example_result": "| CHAR_LENGTH |\n| :--- |\n| 9 |"
  },
  {
    "id": 11,
    "name": "CHR / CHAR",
    "description": "ASCII/유니코드 번호를 문자로 변환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CHR(65);",
    "example_result": "| CHR(65) |\n| :--- |\n| A |"
  },
  {
    "id": 12,
    "name": "COALESCE",
    "description": "나열된 인수 중 NULL이 아닌 첫 번째 값을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT COALESCE(NULL, 'A');",
    "example_result": "| Result |\n| :--- |\n| A |"
  },
  {
    "id": 13,
    "name": "CONCAT",
    "description": "두 개 이상의 문자열을 하나로 합칩니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CONCAT('A', 'B');",
    "example_result": "| Result |\n| :--- |\n| AB |"
  },
  {
    "id": 14,
    "name": "COSH",
    "description": "숫자의 하이퍼볼릭 코사인을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT COSH(0);",
    "example_result": "| COSH(0) |\n| :--- |\n| 1 |"
  },
  {
    "id": 15,
    "name": "COT",
    "description": "숫자의 코탄젠트를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT COT(1);",
    "example_result": "| COT(1) |\n| :--- |\n| 0.64209... |"
  },
  {
    "id": 16,
    "name": "COUNT",
    "description": "행의 개수 또는 특정 컬럼의 값 개수를 셉니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT COUNT(*) FROM table;",
    "example_result": "| COUNT |\n| :--- |\n| 100 |"
  },
  {
    "id": 17,
    "name": "CUME_DIST",
    "description": "누적 분포 값을 계산합니다 (윈도우 함수).",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT id, CUME_DIST() OVER (ORDER BY id) FROM table;",
    "example_result": "| ID | CUME_DIST |\n| :--- | :--- |\n| 1 | 0.33 |"
  },
  {
    "id": 18,
    "name": "CURRENT_DATE",
    "description": "시스템의 현재 날짜를 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CURRENT_DATE;",
    "example_result": "| CURRENT_DATE |\n| :--- |\n| 2025-12-24 |"
  },
  {
    "id": 19,
    "name": "CURRENT_TIME",
    "description": "현재 시간을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CURRENT_TIME();",
    "example_result": "| CURRENT_TIME |\n| :--- |\n| 16:45:00 |"
  },
  {
    "id": 20,
    "name": "CURRENT_TIMESTAMP",
    "description": "시스템의 현재 날짜와 시간을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CURRENT_TIMESTAMP;",
    "example_result": "| CURRENT_TIMESTAMP |\n| :--- |\n| 2025-12-24 18:00:00... |"
  },
  {
    "id": 21,
    "name": "CURRENT_USER",
    "description": "현재 접속 중인 사용자를 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT CURRENT_USER();",
    "example_result": "| CURRENT_USER |\n| :--- |\n| admin |"
  },
  {
    "id": 22,
    "name": "DENSE_RANK",
    "description": "순위 산정 시 동점자가 있어도 다음 순위를 건너뛰지 않고 부여합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT DENSE_RANK() OVER (ORDER BY score DESC);",
    "example_result": "| DENSE_RANK |\n| :--- |\n| 1 |"
  },
  {
    "id": 23,
    "name": "EXP",
    "description": "e의 n승을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT EXP(1);",
    "example_result": "| EXP(1) |\n| :--- |\n| 2.71828... |"
  },
  {
    "id": 24,
    "name": "EXTRACT",
    "description": "날짜 정보에서 특정 부분(YEAR, MONTH, DAY 등)을 추출합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT EXTRACT(YEAR FROM NOW());",
    "example_result": "| EXTRACT |\n| :--- |\n| 2025 |"
  },
  {
    "id": 25,
    "name": "FIRST_VALUE",
    "description": "윈도우 프레임 내의 첫 번째 값을 가져옵니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT FIRST_VALUE(val) OVER (ORDER BY id) FROM table;",
    "example_result": "| Result |\n| :--- |\n| FirstVal |"
  },
  {
    "id": 26,
    "name": "FLOOR",
    "description": "소수점 첫째 자리에서 내림합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT FLOOR(4.8);",
    "example_result": "| FLOOR |\n| :--- |\n| 4 |"
  },
  {
    "id": 27,
    "name": "GREATEST",
    "description": "나열된 값 중 최댓값을 선택합니다 (표준은 아니나 대부분 지원).",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT GREATEST(10, 20, 30);",
    "example_result": "| Result |\n| :--- |\n| 30 |"
  },
  {
    "id": 28,
    "name": "INITCAP",
    "description": "각 단어의 첫 글자만 대문자로 변환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT INITCAP('hello world');",
    "example_result": "| Result |\n| :--- |\n| Hello World |"
  },
  {
    "id": 29,
    "name": "INSTR / POSITION",
    "description": "문자열 내 특정 문자의 위치를 찾습니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT INSTR('banana', 'a');",
    "example_result": "| Position |\n| :--- |\n| 2 |"
  },
  {
    "id": 30,
    "name": "LAG",
    "description": "현재 행을 기준으로 이전 행의 데이터를 가져옵니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LAG(val) OVER (ORDER BY id);",
    "example_result": "| LAG |\n| :--- |\n| PrevVal |"
  },
  {
    "id": 31,
    "name": "LAST_VALUE",
    "description": "윈도우 프레임 내의 마지막 값을 가져옵니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LAST_VALUE(val) OVER (ORDER BY id) FROM table;",
    "example_result": "| Result |\n| :--- |\n| LastVal |"
  },
  {
    "id": 32,
    "name": "LEAD",
    "description": "현재 행을 기준으로 다음 행의 데이터를 가져옵니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LEAD(val) OVER (ORDER BY id);",
    "example_result": "| LEAD |\n| :--- |\n| NextVal |"
  },
  {
    "id": 33,
    "name": "LEAST",
    "description": "나열된 값 중 최솟값을 선택합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LEAST(10, 20, 30);",
    "example_result": "| Result |\n| :--- |\n| 10 |"
  },
  {
    "id": 34,
    "name": "LENGTH / LEN",
    "description": "문자열의 길이를 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LENGTH('text');",
    "example_result": "| LENGTH |\n| :--- |\n| 4 |"
  },
  {
    "id": 35,
    "name": "LN",
    "description": "자연로그를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LN(2.718);",
    "example_result": "| LN |\n| :--- |\n| 1 |"
  },
  {
    "id": 36,
    "name": "LOG",
    "description": "상용로그 또는 지정된 밑의 로그를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LOG(10, 100);",
    "example_result": "| LOG |\n| :--- |\n| 2 |"
  },
  {
    "id": 37,
    "name": "LOWER",
    "description": "문자열을 모두 소문자로 변환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LOWER('ABC');",
    "example_result": "| LOWER |\n| :--- |\n| abc |"
  },
  {
    "id": 38,
    "name": "LPAD",
    "description": "문자열 왼쪽에 특정 문자를 채웁니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LPAD('123', 5, '0');",
    "example_result": "| Result |\n| :--- |\n| 00123 |"
  },
  {
    "id": 39,
    "name": "LTRIM",
    "description": "문자열 왼쪽의 공백을 제거합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT LTRIM('  abc');",
    "example_result": "| LTRIM |\n| :--- |\n| abc |"
  },
  {
    "id": 40,
    "name": "MAX",
    "description": "그룹 내 최댓값을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT MAX(score);",
    "example_result": "| MAX |\n| :--- |\n| 100 |"
  },
  {
    "id": 41,
    "name": "MIN",
    "description": "그룹 내 최솟값을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT MIN(score);",
    "example_result": "| MIN |\n| :--- |\n| 0 |"
  },
  {
    "id": 42,
    "name": "MOD",
    "description": "숫자를 나눈 나머지 값을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT MOD(10, 3);",
    "example_result": "| MOD |\n| :--- |\n| 1 |"
  },
  {
    "id": 43,
    "name": "NTH_VALUE",
    "description": "윈도우 프레임 내의 n번째 값을 가져옵니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT NTH_VALUE(val, 2) OVER (ORDER BY id) FROM table;",
    "example_result": "| Result |\n| :--- |\n| SecondVal |"
  },
  {
    "id": 44,
    "name": "NTILE",
    "description": "데이터를 n개의 등급으로 나눕니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT id, NTILE(4) OVER (ORDER BY id) FROM table;",
    "example_result": "| ID | NTILE |\n| :--- | :--- |\n| 1 | 1 |"
  },
  {
    "id": 45,
    "name": "NULLIF",
    "description": "두 값이 같으면 NULL을, 다르면 첫 번째 값을 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT NULLIF(10, 10);",
    "example_result": "| NULLIF |\n| :--- |\n| NULL |"
  },
  {
    "id": 46,
    "name": "OCTET_LENGTH",
    "description": "문자열의 바이트 수를 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT OCTET_LENGTH('SQL');",
    "example_result": "| Result |\n| :--- |\n| 3 |"
  },
  {
    "id": 47,
    "name": "PERCENT_RANK",
    "description": "백분위 순위를 계산합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT PERCENT_RANK() OVER (ORDER BY id) FROM table;",
    "example_result": "| Result |\n| :--- |\n| 0.25 |"
  },
  {
    "id": 48,
    "name": "POWER / POW",
    "description": "숫자의 거듭제곱을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT POWER(2, 3);",
    "example_result": "| Result |\n| :--- |\n| 8 |"
  },
  {
    "id": 49,
    "name": "RANK",
    "description": "순위 산정 시 동점자가 있으면 그 수만큼 다음 순위를 건너뛰고 부여합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT RANK() OVER (ORDER BY score);",
    "example_result": "| RANK |\n| :--- |\n| 1 |"
  },
  {
    "id": 50,
    "name": "REPLACE",
    "description": "문자열 내 특정 패턴을 찾아 다른 문자로 바꿉니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT REPLACE('A-B', '-', ':');",
    "example_result": "| REPLACE |\n| :--- |\n| A:B |"
  },
  {
    "id": 51,
    "name": "REVERSE",
    "description": "문자열의 순서를 뒤집습니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT REVERSE('SQL');",
    "example_result": "| Result |\n| :--- |\n| LQS |"
  },
  {
    "id": 52,
    "name": "ROUND",
    "description": "숫자를 특정 소수점 자리에서 반올림합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT ROUND(3.14159, 2);",
    "example_result": "| ROUND |\n| :--- |\n| 3.14 |"
  },
  {
    "id": 53,
    "name": "ROW_NUMBER",
    "description": "결과 집합의 각 행에 순차적인 고유 번호를 부여합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT ROW_NUMBER() OVER (ORDER BY id);",
    "example_result": "| ROW_NUMBER |\n| :--- |\n| 1 |"
  },
  {
    "id": 54,
    "name": "RPAD",
    "description": "문자열 오른쪽에 특정 문자를 채웁니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT RPAD('123', 5, '0');",
    "example_result": "| Result |\n| :--- |\n| 12300 |"
  },
  {
    "id": 55,
    "name": "RTRIM",
    "description": "문자열 오른쪽의 공백을 제거합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT RTRIM('abc  ');",
    "example_result": "| RTRIM |\n| :--- |\n| abc |"
  },
  {
    "id": 56,
    "name": "SIGN",
    "description": "숫자의 부호(양수 1, 음수 -1, 0)를 반환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT SIGN(-50);",
    "example_result": "| SIGN |\n| :--- |\n| -1 |"
  },
  {
    "id": 57,
    "name": "SIN",
    "description": "숫자의 사인을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT SIN(0);",
    "example_result": "| SIN(0) |\n| :--- |\n| 0 |"
  },
  {
    "id": 58,
    "name": "SINH",
    "description": "숫자의 하이퍼볼릭 사인을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT SINH(0);",
    "example_result": "| SINH |\n| :--- |\n| 0 |"
  },
  {
    "id": 59,
    "name": "SQRT",
    "description": "숫자의 제곱근을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT SQRT(16);",
    "example_result": "| SQRT |\n| :--- |\n| 4 |"
  },
  {
    "id": 60,
    "name": "STDDEV / STDDEV_POP / STDDEV_SAMP",
    "description": "표준편차를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT STDDEV(score) FROM scores;",
    "example_result": "| Result |\n| :--- |\n| 5.23 |"
  },
  {
    "id": 61,
    "name": "SUBSTR / SUBSTRING",
    "description": "문자열의 특정 위치부터 원하는 길이만큼 추출합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT SUBSTR('Hello', 1, 2);",
    "example_result": "| RESULT |\n| :--- |\n| He |"
  },
  {
    "id": 62,
    "name": "SUM",
    "description": "그룹 내 값들의 합계를 계산합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT SUM(price);",
    "example_result": "| SUM |\n| :--- |\n| 1000 |"
  },
  {
    "id": 63,
    "name": "TAN",
    "description": "숫자의 탄젠트를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT TAN(0);",
    "example_result": "| TAN |\n| :--- |\n| 0 |"
  },
  {
    "id": 64,
    "name": "TANH",
    "description": "숫자의 하이퍼볼릭 탄젠트를 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT TANH(0);",
    "example_result": "| TANH |\n| :--- |\n| 0 |"
  },
  {
    "id": 65,
    "name": "TRIM",
    "description": "문자열 양쪽의 공백을 제거합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT TRIM('  abc  ');",
    "example_result": "| TRIM |\n| :--- |\n| abc |"
  },
  {
    "id": 66,
    "name": "UPPER",
    "description": "문자열을 모두 대문자로 변환합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT UPPER('abc');",
    "example_result": "| UPPER |\n| :--- |\n| ABC |"
  },
  {
    "id": 67,
    "name": "VAR_POP / VAR_SAMP",
    "description": "분산을 구합니다.",
    "category": "범용 함수",
    "sub_category": "",
    "example_query": "SELECT VAR_POP(score) FROM table;",
    "example_result": "| Result |\n| :--- |\n| 27.04 |"
  },
  {
    "id": 68,
    "name": "JSONB_AGG",
    "description": "값들을 모아 JSON 배열로 집합화합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "JSON / JSONB 처리 함수",
    "example_query": "SELECT JSONB_AGG(name) FROM users;",
    "example_result": "| JSONB_AGG |\n| :--- |\n| [\"Tom\", \"Jerry\"] |"
  },
  {
    "id": 69,
    "name": "JSONB_BUILD_OBJECT",
    "description": "키-값 쌍을 이용해 JSON 객체를 생성합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "JSON / JSONB 처리 함수",
    "example_query": "SELECT JSONB_BUILD_OBJECT('id', 1, 'name', 'test');",
    "example_result": "| RESULT |\n| :--- |\n| {\"id\": 1, \"name\": \"test\"} |"
  },
  {
    "id": 70,
    "name": "JSONB_EXTRACT_PATH",
    "description": "JSON 데이터 내의 특정 경로 값을 추출합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "JSON / JSONB 처리 함수",
    "example_query": "SELECT JSONB_EXTRACT_PATH('{\"a\": {\"b\": \"c\"}}'::jsonb, 'a', 'b');",
    "example_result": "| RESULT |\n| :--- |\n| \"c\" |"
  },
  {
    "id": 71,
    "name": "JSONB_SET",
    "description": "JSON 데이터의 특정 값을 수정하거나 추가합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "JSON / JSONB 처리 함수",
    "example_query": "SELECT JSONB_SET('{\"id\": 1}'::jsonb, '{name}', '\"test\"');",
    "example_result": "| RESULT |\n| :--- |\n| {\"id\": 1, \"name\": \"test\"} |"
  },
  {
    "id": 72,
    "name": "JSON_EACH / JSON_EACH_TEXT",
    "description": "JSON 객체를 키-값 쌍의 행 세트로 확장합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "JSON / JSONB 처리 함수",
    "example_query": "SELECT * FROM JSON_EACH('{\"a\":1, \"b\":2}');",
    "example_result": "| KEY | VALUE |\n| :--- | :--- |\n| a | 1 |\n| b | 2 |"
  },
  {
    "id": 73,
    "name": "FORMAT",
    "description": "C언어 스타일의 서식 문자열을 사용하여 문자열을 구성합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "문자열 및 정규표현식 (Regex) 함수",
    "example_query": "SELECT FORMAT('Hello %s', 'World');",
    "example_result": "| RESULT |\n| :--- |\n| Hello World |"
  },
  {
    "id": 74,
    "name": "MD5",
    "description": "문자열을 MD5 해시값으로 변환합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "문자열 및 정규표현식 (Regex) 함수",
    "example_query": "SELECT MD5('data');",
    "example_result": "| RESULT |\n| :--- |\n| 8d777f38... |"
  },
  {
    "id": 75,
    "name": "REGEXP_MATCHES",
    "description": "정규표현식과 일치하는 부분 문자열을 배열로 반환합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "문자열 및 정규표현식 (Regex) 함수",
    "example_query": "SELECT REGEXP_MATCHES('foobarbequebaz', '(bar)(beque)');",
    "example_result": "| RESULT |\n| :--- |\n| {bar,beque} |"
  },
  {
    "id": 76,
    "name": "REGEXP_REPLACE",
    "description": "정규표현식 패턴을 찾아 다른 문자로 바꿉니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "문자열 및 정규표현식 (Regex) 함수",
    "example_query": "SELECT REGEXP_REPLACE('Thomas', '.[mN]a.', 'M');",
    "example_result": "| RESULT |\n| :--- |\n| ThM s |"
  },
  {
    "id": 77,
    "name": "REGEXP_SPLIT_TO_TABLE",
    "description": "정규표현식을 기준으로 문자열을 잘라 여러 행으로 만듭니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "문자열 및 정규표현식 (Regex) 함수",
    "example_query": "SELECT * FROM REGEXP_SPLIT_TO_TABLE('foo,bar,baz', ',');",
    "example_result": "| VALUE |\n| :--- |\n| foo |\n| bar |\n| baz |"
  },
  {
    "id": 78,
    "name": "SPLIT_PART",
    "description": "구분자로 문자열을 나눠 특정 번째 값을 가져옵니다 (매우 자주 쓰임).",
    "category": "PostgreSQL 함수",
    "sub_category": "문자열 및 정규표현식 (Regex) 함수",
    "example_query": "SELECT SPLIT_PART('2025/12/24', '/', 2);",
    "example_result": "| RESULT |\n| :--- |\n| 12 |"
  },
  {
    "id": 79,
    "name": "TO_ASCII",
    "description": "문자열을 ASCII로 변환합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "문자열 및 정규표현식 (Regex) 함수",
    "example_query": "SELECT TO_ASCII('Königsberg');",
    "example_result": "| RESULT |\n| :--- |\n| Koenigsberg |"
  },
  {
    "id": 80,
    "name": "AGE",
    "description": "두 날짜 사이의 차이를 년, 월, 일 형태(Interval)로 계산합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "날짜 및 시간 처리 함수",
    "example_query": "SELECT AGE('2025-12-24', '1990-01-01');",
    "example_result": "| RESULT |\n| :--- |\n| 35 years 11 mons 23 days |"
  },
  {
    "id": 81,
    "name": "CLOCK_TIMESTAMP",
    "description": "실시간으로 변하는 현재 시각을 반환합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "날짜 및 시간 처리 함수",
    "example_query": "SELECT CLOCK_TIMESTAMP();",
    "example_result": "| RESULT |\n| :--- |\n| 2025-12-24 17:45:00.123 |"
  },
  {
    "id": 82,
    "name": "DATE_PART",
    "description": "EXTRACT와 유사하게 날짜의 특정 요소를 숫자로 가져옵니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "날짜 및 시간 처리 함수",
    "example_query": "SELECT DATE_PART('year', '2025-12-24'::DATE);",
    "example_result": "| RESULT |\n| :--- |\n| 2025 |"
  },
  {
    "id": 83,
    "name": "DATE_TRUNC",
    "description": "날짜를 특정 단위(시간, 일, 월 등)로 절삭(버림)합니다. (매우 중요)",
    "category": "PostgreSQL 함수",
    "sub_category": "날짜 및 시간 처리 함수",
    "example_query": "SELECT DATE_TRUNC('month', '2025-12-24'::DATE);",
    "example_result": "| RESULT |\n| :--- |\n| 2025-12-01 |"
  },
  {
    "id": 84,
    "name": "JUSTIFY_DAYS / JUSTIFY_HOURS",
    "description": "시간 간격(Interval)을 보기 좋게 조정합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "날짜 및 시간 처리 함수",
    "example_query": "SELECT JUSTIFY_DAYS('35 days'::interval);",
    "example_result": "| RESULT |\n| :--- |\n| 1 mon 5 days |"
  },
  {
    "id": 85,
    "name": "MAKE_DATE / MAKE_TIMESTAMP",
    "description": "숫자들을 조합해 날짜/시간 객체를 만듭니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "날짜 및 시간 처리 함수",
    "example_query": "SELECT MAKE_DATE(2025, 12, 24);",
    "example_result": "| RESULT |\n| :--- |\n| 2025-12-24 |"
  },
  {
    "id": 86,
    "name": "NOW()",
    "description": "현재 트랜잭션의 시작 시간을 반환합니다 (CURRENT_TIMESTAMP와 유사).",
    "category": "PostgreSQL 함수",
    "sub_category": "날짜 및 시간 처리 함수",
    "example_query": "SELECT NOW();",
    "example_result": "| NOW |\n| :--- |\n| 2025-12-24 17:45:00 |"
  },
  {
    "id": 87,
    "name": "ARRAY_AGG",
    "description": "행 데이터들을 하나의 배열로 묶습니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT ARRAY_AGG(id) FROM table;",
    "example_result": "| RESULT |\n| :--- |\n| {1,2,3} |"
  },
  {
    "id": 88,
    "name": "ARRAY_APPEND / ARRAY_PREPEND",
    "description": "배열의 앞뒤에 요소를 추가합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT ARRAY_APPEND(ARRAY[1,2], 3);",
    "example_result": "| RESULT |\n| :--- |\n| {1,2,3} |"
  },
  {
    "id": 89,
    "name": "ARRAY_CAT",
    "description": "두 개의 배열을 하나로 합칩니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT ARRAY_CAT(ARRAY[1,2], ARRAY[3,4]);",
    "example_result": "| RESULT |\n| :--- |\n| {1,2,3,4} |"
  },
  {
    "id": 90,
    "name": "ARRAY_LENGTH",
    "description": "배열의 크기를 구합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT ARRAY_LENGTH(ARRAY[1,2,3], 1);",
    "example_result": "| RESULT |\n| :--- |\n| 3 |"
  },
  {
    "id": 91,
    "name": "DIV",
    "description": "나눗셈의 몫만 정수로 반환합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT DIV(10, 3);",
    "example_result": "| DIV |\n| :--- |\n| 3 |"
  },
  {
    "id": 92,
    "name": "GENERATE_SERIES",
    "description": "특정 범위의 숫자 또는 날짜 시리즈(연속 데이터)를 생성합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT * FROM GENERATE_SERIES(1, 3);",
    "example_result": "| VALUE |\n| :--- |\n| 1 |\n| 2 |\n| 3 |"
  },
  {
    "id": 93,
    "name": "RANDOM",
    "description": "0과 1 사이의 난수를 발생시킵니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT RANDOM();",
    "example_result": "| RESULT |\n| :--- |\n| 0.45678... |"
  },
  {
    "id": 94,
    "name": "UNNEST",
    "description": "배열을 다시 여러 개의 행으로 풀어냅니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "수치 및 배열(Array) 함수",
    "example_query": "SELECT UNNEST(ARRAY[1,2,3]);",
    "example_result": "| RESULT |\n| :--- |\n| 1 |\n| 2 |\n| 3 |"
  },
  {
    "id": 95,
    "name": "COALESCE",
    "description": "(범용이지만 강조) NULL 처리에 가장 많이 쓰입니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "데이터 타입 변환 및 기타",
    "example_query": "SELECT COALESCE(NULL, 'A', 'B');",
    "example_result": "| RESULT |\n| :--- |\n| A |"
  },
  {
    "id": 96,
    "name": "NULLIF",
    "description": "(범용이지만 강조) 특정 값 제외 시 유용합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "데이터 타입 변환 및 기타",
    "example_query": "SELECT NULLIF(10, 10);",
    "example_result": "| RESULT |\n| :--- |\n| NULL |"
  },
  {
    "id": 97,
    "name": "TO_CHAR",
    "description": "숫자나 날짜를 원하는 포맷의 문자열로 변환합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "데이터 타입 변환 및 기타",
    "example_query": "SELECT TO_CHAR(12345, '99,999');",
    "example_result": "| RESULT |\n| :--- |\n| 12,345 |"
  },
  {
    "id": 98,
    "name": "TO_DATE / TO_NUMBER",
    "description": "문자열을 날짜나 숫자로 변환합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "데이터 타입 변환 및 기타",
    "example_query": "SELECT TO_DATE('20251224', 'YYYYMMDD');",
    "example_result": "| RESULT |\n| :--- |\n| 2025-12-24 |"
  },
  {
    "id": 99,
    "name": "VALUES",
    "description": "일시적인 테이블 형태의 데이터를 생성합니다.",
    "category": "PostgreSQL 함수",
    "sub_category": "데이터 타입 변환 및 기타",
    "example_query": "SELECT * FROM (VALUES (1, 'A'), (2, 'B')) t(id, val);",
    "example_result": "| ID | VAL |\n| :--- | :--- |\n| 1 | A |\n| 2 | B |"
  }
];