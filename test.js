/* async function sus(input = 'hi', systemInput = 'Hello Bro', content = '') {
    input += 'Respond this in English';
    const dataRaw = {
        "messages": [
            {
                "content": content,
                "role": "user"
            },
            {
                "content": systemInput,
                "role": "system"
            },
            {
                "content": input,
                "role": "user"
            }
        ]
    };

    const dataJson = JSON.stringify(dataRaw);

    var result = '';
    await fetch(`${new Buffer.from('aHR0cHM6Ly9zM3BoYXRuZ3VvaS52bi9hcGkvY2hhdC5waHA=', 'base64').toString('ascii')}`, {
        method: 'POST',
        body: dataJson
    }).then(async res => {
        // const reader = res.body.getReader();
        const decoder = new TextDecoder();

        for await (chunk of res.body) {
            const dataAfterDecode = decoder.decode(chunk, { stream: true })
            if (dataAfterDecode.slice(7, -1) !== 'DONE') {
                const dataMatch = dataAfterDecode.match(/"content":".*"(\,|\})/g);
                // console.log(dataMatch);
                if (dataMatch !== null) {
                    dataMatch.forEach(piece => {
                        const content = JSON.parse(`{${piece == null ? 'message: ""' : piece.slice(0, -1)}}`).content;
                        process.stdout.write(content);
                    });
                };
            };
        };
    });
    console.log('');
};

process.stdin.setDefaultEncoding('utf8');

console.log('Enter prompt: ');

var contentMessage = '';

process.stdin.on('data', async (listen) => {
    contentMessage += listen + 

'\n';
    await sus(`${listen}`, 'Responding like a REAL Bro.', contentMessage);
    // process.exit();
}); */


/* function findSubs(n1, n2) {
    if (n1 > n2) return false;

    let freg = {};
    let lenOfN1 = n1.length;
    let pointer = 0;
    for (let sOfN1 = n1.length - 1; sOfN1 > -1; --sOfN1) {
        if (!freg[n1[sOfN1]]) {
            freg[n1[sOfN1]] = 1;
        };
    }

    for (let sOfN2 = 0; sOfN2 < n2.length; sOfN2++) {
        if (!freg[n2[sOfN2]]) freg[n2[sOfN2]] = 0;

        const s = freg[n2[sOfN2]];
        freg[n2[sOfN2]] -= 1;
        if (s > 0) {
            lenOfN1 -= 1;
        } else {
            while (freg[n2[sOfN2]] < 0) {
                freg[n2[pointer]] += 1;
                if (freg[n2[pointer]] > 0) {
                    lenOfN1 += 1;
                }
                pointer++;
            }
        }

        if (lenOfN1 == 0) {
            return true
        };

        console.log(freg);

    }
    return false;

}

console.time('lol');
console.log(findSubs('abc', 'hbbbbbcaaooo'));
console.timeEnd('lol'); */

//abc
//haabcaooo






// function _0xaf6b(A, n) {
//     const e = _0x200f();
//     return (_0xaf6b = function (A, n) {
//         return e[A -= 395]
//     }
//     )(A, n)
// }


// function _0x200f() {
//     const A = [];

//     return A
// }



// console.time('lol');
// console.log(_0xaf6b(16750));


// let arr = _0x200f();       // your 20,406 array
// let N = arr.length;

// // indexes used by obfuscator
// let required = [
//     16750 - 395,
//     19591 - 395,
//     11217 - 395,
//     4664 - 395,
//     9078 - 395,
//     16015 - 395,
//     15998 - 395,
//     3636 - 395,
//     10094 - 395,
//     6424 - 395
// ];

// // helper: check is numeric
// function looksNumber(x) {
//     return typeof x === "string" && /^[0-9]/.test(x);
// }

// // find rotation offset R
// let R = -1;
// for (let r = 0; r < N; r++) {
//     let ok = true;

//     for (let idx of required) {
//         let val = arr[(idx +

//             r) % N];
//         if (!looksNumber(val)) {
//             ok = false;
//             break;
//         }
//     }

//     if (ok) {
//         R = r;
//         break;
//     }
// }

// console.log("Rotation offset =", R);

// build final rotated array
// let final = new Array(N);
// for (let i = 0; i < N; i++) {
//     final[i] = arr[(i +

//         R) % N];
// }

// real decoder
// function decode(x) {
//     return final[x - 395];
// }

// const A = decode;

const eeee =
    'hi'

// const { log } = require("console");
// const apvtop = decode(2886) + decode(1271) + decode(18514);
// console.log(apvtop);
// console.log(decode(2265));

// const fs = require("fs");

// fs.writeFileSync("shifted_array.json", JSON.stringify(final, null, 2));

// const util = require('util');

// process.stdin.setDefaultEncoding('utf8');

// console.log('Enter Numer to deofuscate: ');


// process.stdin.on('data', async (listen) => {
//     listen = listen.toString().replace(/[a-zA-Z\)\(\]\[\+]/gm, '').trim();
//     if (listen.includes(' ')) {
//         var brakeIt = listen.split(' ');
//         var message = '';
//         // console.log(brakeIt);
//         brakeIt.forEach(pic => {
//             if (pic != '') {
//                 message += decode(parseInt(pic));
//             }
//         });
//         console.log(message);
//         require('child_process').spawn('clip').stdin.end(util.inspect(`${message}`));
//     } else {
//         console.log(decode(parseInt(listen)));
//         require('child_process').spawn('clip').stdin.end(util.inspect(`${decode(parseInt(listen))}`));
//     };



//     // process.exit();
// });

async function likeVideo(videoId) {
    try {
        const response = await fetch(`https://api.qmhub.vip/api/video/${videoId}/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error liking video:", error);
        throw error;
    }
}

// Usage
const maxCnt = 1360
for (let i = 0; i <= maxCnt; ++i) {
    // likeVideo(window.location.href.split('/')[4]).then((data) => console.log(data, i));
}
// console.timeEnd('lol');


async function renewSubscription() {
    const baseURL = "https://dash.daki.cc/renew";

    const defaultParams = {
        id: window.location.href.split('=')[1].split('&')[0],
        token: window.location.href.slice(-36),
    };

    const queryString = new URLSearchParams(defaultParams).toString();
    const url = `${baseURL}?${queryString}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}

const result = await renewSubscription();

const strTest = "https://dash.daki.cc/renew-page?id=46372&token=7f79f9d7-6077-4948-917c-4ba8ec4f8155";

console.log(strTest);





sdfa



