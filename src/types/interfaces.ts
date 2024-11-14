export interface IState {
  Surah: {
    data: {
      asma: {
        ar: { short: string; long: string };
        en: { short: string; long: string };
        id: { short: string; long: string };
        translation: { en: string; id: string };
      };
      ayahCount: number;
      ayahs: {
        audio: { url: string };
        hizbQuarter: number;
        juz: number;
        manzil: number;
        number: { inquran: number; insurah: number | string };
        page: number;
        ruku: number;
        sajda: { recommended: boolean; obligatory: boolean };
        tafsir: { id: string; en: string | null };
        text: { ar: string; read: string };
        translation: { en: string; id: string };
      }[];
      number: number;
      preBismillah: { text: string; translation: string };
      recitation: { full: string };
      squence: number;
      tafsir: { id: string; en: null | string };
      type: { ar: string; id: string; en: string };
    };
  };
  datas: {
    asma: {
      ar: { short: string; long: string };
      en: { short: string; long: string };
      id: { short: string; long: string };
      translation: { en: string; id: string };
    };
    ayahCount: number;
    number: number;
    preBismillah: { text: string; translation: string };
    recitation: { full: string };
    squence: number;
    tafsir: { id: string; en: null | string };
    type: { ar: string; id: string; en: string };
  }[];
  data: {
    asma: {
      ar: { short: string; long: string };
      en: { short: string; long: string };
      id: { short: string; long: string };
      translation: { en: string; id: string };
    };
    ayahCount: number;
    ayahs: {
      audio: { url: string };
      hizbQuarter: number;
      juz: number;
      manzil: number;
      number: { inquran: number; insurah: number };
      page: number;
      ruku: number;
      sajda: { recommended: boolean; obligatory: boolean };
      tafsir: { id: string; en: string | null };
      text: { ar: string; read: string };
      translation: { en: string; id: string };
    }[];
    number: number;
    preBismillah: { text: string; translation: string };
    recitation: { full: string };
    squence: number;
    tafsir: { id: string; en: null | string };
    type: { ar: string; id: string; en: string };
  };
}

export interface IProps {
  Items: {
    data: {
      asma: {
        ar: { short: string; long: string };
        en: { short: string; long: string };
        id: { short: string; long: string };
        translation: { en: string; id: string };
      };
      ayahCount: number;
      number: number;
      preBismillah: { text: string; translation: string };
      recitation: { full: string };
      squence: number;
      tafsir: { id: string; en: null | string };
      type: { ar: string; id: string; en: string };
    }[];
    error: string;
    isLoading: boolean;
  };
  Item: {
    asma: {
      ar: { short: string; long: string };
      en: { short: string; long: string };
      id: { short: string; long: string };
    };
    ayahCount: number;
    number: number;
    type: string;
  };
  Navbar: {
    back?: boolean;
  };
  Surah: {
    surah: string;
  };
}
