import type { Service, Project } from './types';

export const SERVICES_DATA: Service[] = [
  {
    title: 'BRAND & GRAPHIC DESIGN',
    description: 'We craft compelling visual identities and graphic systems. From logos and branding guidelines to digital and print collateral, our designs communicate with clarity and impact.',
  },
  {
    title: 'CREATIVE DIRECTION',
    description: 'We provide holistic creative direction for campaigns and projects, ensuring a cohesive and powerful visual narrative across all media, from initial concept to final execution.',
  },
  {
    title: 'DIGITAL ART & ILLUSTRATION',
    description: 'Creating unique digital artworks and illustrations. Specializing in abstract, experimental, and typographic pieces for various applications, from digital media to print.',
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'artwork-1',
    title: 'Definition of Color 1/100',
    description: 'An abstract exploration of color theory, challenging perceptions and evoking emotion through a vibrant, dynamic palette.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczNWqBnIk6xboz4sx2iWAiibqlQX1-1VudkdEC_xJoVA1ODVjXdigvPKU0vYXaBbNvdHpofxUzx1aXbbiMQM3ffsZriUr4bZC1IV8pTEdcaIuWiy9g=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczNWqBnIk6xboz4sx2iWAiibqlQX1-1VudkdEC_xJoVA1ODVjXdigvPKU0vYXaBbNvdHpofxUzx1aXbbiMQM3ffsZriUr4bZC1IV8pTEdcaIuWiy9g=w2400'],
    position: { x: 15, y: 20 },
  },
  {
    id: 'artwork-2',
    title: 'Pixel Perfect Tech 2/100',
    description: 'This piece delves into the intersection of technology and art, celebrating the precision of the digital medium with intricate, pixel-perfect details.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczMlI0jcBa5BzWo2t_UTbgSTeLpkcX8BIOZKuGTbdDiEod5w1PGezrQL5hmcyIEO1Tp9agl6xoRCotrkk-s1Nb9Y3KE4WQynEawzJ8fTbwjSKm3jZA=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczMlI0jcBa5BzWo2t_UTbgSTeLpkcX8BIOZKuGTbdDiEod5w1PGezrQL5hmcyIEO1Tp9agl6xoRCotrkk-s1Nb9Y3KE4WQynEawzJ8fTbwjSKm3jZA=w2400'],
    position: { x: 45, y: 35 },
  },
  {
    id: 'artwork-3',
    title: 'Clock 3/100',
    description: 'A visual commentary on the nature of time, blending mechanical elements with fluid forms to represent its constant, yet subjective, passage.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczPhp4h6aeU1R3IQTlaO6G0Sbv89DNxzizP7iPmYy6p_av-MyEQd_0nIz7s_D_Woi6koOWOSxwEAZx1R6xaWVRQ5TXSX3-W4UxhVwMFlDqmLCr5CKg=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczPhp4h6aeU1R3IQTlaO6G0Sbv89DNxzizP7iPmYy6p_av-MyEQd_0nIz7s_D_Woi6koOWOSxwEAZx1R6xaWVRQ5TXSX3-W4UxhVwMFlDqmLCr5CKg=w2400'],
    position: { x: 75, y: 25 },
  },
  {
    id: 'artwork-4',
    title: 'Chair 4/100',
    description: 'Examining the balance between form and function, this artwork reimagines an everyday object as a sculpture of elegance and impossibility.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczNANjhCMLwn6-49QUxdxhHpEphgOPyDvbyizTTa35_Pm9081vdbSFROKNN7mpEjDSeCQzS-w0aRnBXMrcpLPDf1oueQvTXPbEau2pB5NljvNBwVJQ=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczNANjhCMLwn6-49QUxdxhHpEphgOPyDvbyizTTa35_Pm9081vdbSFROKNN7mpEjDSeCQzS-w0aRnBXMrcpLPDf1oueQvTXPbEau2pB5NljvNBwVJQ=w2400'],
    position: { x: 25, y: 65 },
  },
  {
    id: 'artwork-5',
    title: 'LOYALTY IS MY BLOODLINE 5/100',
    description: 'A bold typographic statement on identity and heritage. This piece uses strong lettering and stark contrast to convey a powerful, personal message.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczPx_rPyUkrneG19g7NBjBz1RN5N8zz7jA9yHmxeQgjQWLOJSnMqIz7PjwvjeS2R24VIruuLBEwt7cm1K5D6ZtyyVtxddGE174zrM8QJGj-KKv8twQ=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczPx_rPyUkrneG19g7NBjBz1RN5N8zz7jA9yHmxeQgjQWLOJSnMqIz7PjwvjeS2R24VIruuLBEwt7cm1K5D6ZtyyVtxddGE174zrM8QJGj-KKv8twQ=w2400'],
    position: { x: 60, y: 70 },
  },
  {
    id: 'artwork-6',
    title: 'It Had To Be So 6/100',
    description: 'A study in geometric inevitability, where lines and shapes converge into a predestined harmony. The composition reflects a sense of order and fate.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczNrCqHSyX8HAxE_Jl18K7Nu9PcKwWA6SgirK9_YICozbcdksmFE8ksuwAb8r9KTBjadm8mANki7i_QpRoJ6eEBaLkimKavAm1TEViLUFio1IqPWxw=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczNrCqHSyX8HAxE_Jl18K7Nu9PcKwWA6SgirK9_YICozbcdksmFE8ksuwAb8r9KTBjadm8mANki7i_QpRoJ6eEBaLkimKavAm1TEViLUFio1IqPWxw=w2400'],
    position: { x: 85, y: 50 },
  },
  {
    id: 'artwork-7',
    title: 'Koobz Abstract 7/100',
    description: 'An explosion of chaotic energy and color. This piece is an unfiltered expression of movement and emotion, rendered in a raw, abstract style.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczNHdQKYJhZ-u1Mc--85ilpUUUIT2xf-NAV_XKgwYMPHgWd_Ns89KdxDoii1sfkPkBvM8GG0qze0svKEObDnQRDWaUJYBdccbgxSAWjwm7XPbbmAZA=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczNHdQKYJhZ-u1Mc--85ilpUUUIT2xf-NAV_XKgwYMPHgWd_Ns89KdxDoii1sfkPkBvM8GG0qze0svKEObDnQRDWaUJYBdccbgxSAWjwm7XPbbmAZA=w2400'],
    position: { x: 10, y: 80 },
  },
  {
    id: 'artwork-8',
    title: 'Dots 8/100',
    description: 'A minimalist exploration of pattern and repetition. Each dot is deliberately placed, creating a rhythmic visual field that is both simple and complex.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczOlxSidNZWJFt6MJirLf83j2eDTi3qI1nsjz4CtjOcFz2nhtHRIe-XvEryra1iGS7PeP1xEnlEsPsmelx4v-lZ7lqZuFZjUW2hAzHE_-KdIL3Ve1A=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczOlxSidNZWJFt6MJirLf83j2eDTi3qI1nsjz4CtjOcFz2nhtHRIe-XvEryra1iGS7PeP1xEnlEsPsmelx4v-lZ7lqZuFZjUW2hAzHE_-KdIL3Ve1A=w2400'],
    position: { x: 50, y: 5 },
  },
  {
    id: 'artwork-9',
    title: 'No Phone Zone 9/100',
    description: 'A direct and unapologetic commentary on our digital age. This typographic piece serves as a reminder to disconnect and be present in the moment.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczN1EQWlCEVX5F15qpl_ARvmdvt5fbGA4Zfm3CKDkNyRabT2EABlFfTw6SiKxYCKEbi_nbV1puzbJ75u3Odkbhj914pGRtcAbIWneAY9Tp7TrpVtTQ=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczN1EQWlCEVX5F15qpl_ARvmdvt5fbGA4Zfm3CKDkNyRabT2EABlFfTw6SiKxYCKEbi_nbV1puzbJ75u3Odkbhj914pGRtcAbIWneAY9Tp7TrpVtTQ=w2400'],
    position: { x: 80, y: 85 },
  },
  {
    id: 'artwork-10',
    title: '#resetindonesia 13/100',
    description: 'A powerful visual statement on societal change and reform. This piece uses stark imagery and bold typography to call for a national reset and reflection.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczOXNapJJC9fPROgunlrFbR--20fPd_AfAcy2poR5eshM-NhhQdeRgPWlyzrQQOs_jqjbs5a34yMvZFT1IFiHIOdoZb8d49dHwSEuMV7aDXa-9BQiA=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczOXNapJJC9fPROgunlrFbR--20fPd_AfAcy2poR5eshM-NhhQdeRgPWlyzrQQOs_jqjbs5a34yMvZFT1IFiHIOdoZb8d49dHwSEuMV7aDXa-9BQiA=w2400'],
    position: { x: 5, y: 45 },
  },
  {
    id: 'artwork-11',
    title: '1312 12/100',
    description: 'An abrasive and provocative piece that uses numerical code to express a strong anti-authoritarian message. The raw, graffiti-like style underscores its rebellious spirit.',
    coverImage: 'https://lh3.googleusercontent.com/pw/AP1GczNO6YKQNLFFI7ixE6c8xxkLHzjgmw1DLR0SXhWza-d4DOIm847XXUx7t886UCKbQF0cvuLgs3gclGY5GCFtE2agoVJdAWJnIjFfB3jPIPfMrYWzpA=w800',
    images: ['https://lh3.googleusercontent.com/pw/AP1GczNO6YKQNLFFI7ixE6c8xxkLHzjgmw1DLR0SXhWza-d4DOIm847XXUx7t886UCKbQF0cvuLgs3gclGY5GCFtE2agoVJdAWJnIjFfB3jPIPfMrYWzpA=w2400'],
    position: { x: 88, y: 15 },
  },
];