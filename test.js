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
    contentMessage += listen + '\n';
    await sus(`${listen}`, 'Responding like a REAL Bro.', contentMessage);
    // process.exit();
}); */


function findSubs(n1, n2) {
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
console.timeEnd('lol');

//abc
//haabcaooo
