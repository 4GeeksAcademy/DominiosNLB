let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'fast', 'cool'];
let noun = ['jogger', 'racoon', 'developer', 'gamer'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];

for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let ext of extensions) {
                let domain = p + a + n + ext;
                console.log(domain);

                if (n.endsWith(ext.replace('.', ''))) {
                    let hackedDomain = p + a + n.slice(0, -ext.length + 1) + ext;
                    console.log(hackedDomain);
                }
            }
        }
    }
}