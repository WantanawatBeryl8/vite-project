/* eslint-disable no-misleading-character-class */
export const regexPattern = {
  uppercase: {
    pattern: /^(?=.*[A-Z])/,
    message: 'ต้องมีตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว',
  },
  lowercase: {
    pattern: /^(?=.*[a-z])/,
    message: 'ต้องมีตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว',
  },
  number: {
    pattern: /^(?=.*\d)/,
    message: 'ต้องมีตัวเลขอย่างน้อย 1 ตัว',
  },
  special: {
    pattern: /^(?=.*[!@#$%^&*()\-_=+[\]{};:'",.<>?])/,
    message: 'ต้องมีอักขระพิเศษอย่างน้อย 1 ตัว',
  },
  characterOnly: {
    pattern:
      /^[a-zA-Zกขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุูเแโใไๅๆ็่้๊๋์]+$/,
    message: 'กรุณากรอกเฉพาะตัวอักษรเท่านั้น (ภาษาไทยและภาษาอังกฤษ)',
  },
  email: {
    pattern:
      /^.{0}[0-9a-zA-Z]([0-9a-zA-Z._-](?!.*\.\.))+.{0}[0-9a-zA-Z]@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'อีเมลไม่ถูกต้อง',
  },
  phone: {
    pattern: /^0[0-9]{8,11}$/,
    message: 'เบอร์โทรศัพท์ไม่ถูกต้อง',
  },
};
