
async function sus(input = 'hi') {
    input += 'Respond this in English';
    const dataRaw = {
        "messages": [
            {
                "content": "user mess",
                "role": "user"
            },
            {
                "content": "bot mess",
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

    // uncomment the line below if you don't want it keep responding you.
    // process.exit();
};

process.stdin.setDefaultEncoding('utf8');
console.log('Enter prompt: ');

process.stdin.on('data', async (listen) => {
    await sus(`${listen}`);
    // process.exit();
});

