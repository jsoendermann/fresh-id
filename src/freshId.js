// TODO export fresh-id-crypto to a separate package

// let useMathRandomBasedImplementation;

// if (typeof crypto === 'undefined') {
//   try {
//     require('crypto');
//     useMathRandomBasedImplementation = false;
//   } catch (e) {
//     useMathRandomBasedImplementation = true;
//   }
// } else {
//   useMathRandomBasedImplementation = false;
// }

const ALPHANUM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let idGenerator;

// if (useMathRandomBasedImplementation) {
  idGenerator = (length = 15) => {
    let id = '';

    for (let i = 0; i < length; i++) {
      id += ALPHANUM.charAt(Math.floor(Math.random() * ALPHANUM.length));
    }

    return id;
  };
// } else {
//   const { randomBytes } = require('crypto');

//   idGenerator = (length) => {
//     let id = '';

//     const random = randomBytes(length);

//     let cursor = 0;
//     for (let i = 0; i < length; i += 1) {
//       cursor += random[i];
//       id += ALPHANUM[cursor % ALPHANUM.length];
//     }

//     return id;
//   };
// }

export default (length = 15) => {
  if (length < 1) {
    throw new Error('Ids must be at least one character long');
  }

  return idGenerator(length);
};
