import btoa from 'btoa';

export default function (seed) {
    let bytes = [];

    for (let i = 0, l = seed.length; i < l; i++) {
        bytes.push(seed.charCodeAt(i));
    }

    // salt must be 16 bytes
    while (bytes.length < 16) {
        byte.push(0);
    }

    // Convert byte array to base64 string
    let salt = btoa(String.fromCharCode.apply(String, bytes.slice(0,16)));

    // Adding header for bcrypt. Fake 10 rounds.
    return '$2a$10$' + salt;
}