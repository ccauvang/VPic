
async function sus(input = 'hi',systemInput = 'Hello Bro', content = '') {
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
                    dataMatch.forEach(pice => {
                        const content = JSON.parse(`{${pice == null ? 'message: ""' : pice.slice(0, -1)}}`).content;
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
    await sus(`${listen}`, 'Responding like a REAL Bro thug.', contentMessage);
    // process.exit();
});

