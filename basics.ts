let userName: string = 'John';
let hasLoggedIn: boolean = true;

userName += "Grod";

console.log(userName); 

let myNumber: number = 10;
let myRegex: RegExp = /foo/;
const names: string[] = userName.split(' ');
const myValues: Array<number> = [1, 2, 3];

interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: 'John',
    last: 'Grod'
};
const ids: Record<number, string> = {
    10: 'a',
    20: 'b'
};

if (ids[30]) {
    console.log(ids[30]);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
[1, 2, 3].forEach(i => console.log(i));
const output = [1, 2, 3].map(i => i * 2);