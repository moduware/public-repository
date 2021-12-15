const lang = {
  "Temperature": {
    en: "Temperature",
    zh: "温度"
  },
  "Humidity": {
    en: "Humidity",
    zh: "湿度"
  },
  "Save": {
    en: "Save",
    zh: "保存"
  },
  "Search": {
    en: "Search",
    zh: "查找"
  },
  "Ambient": {
    en: "Ambient",
    zh: "环境"
  },
  "Object": {
    en: "Object",
    zh: "物体"
  },
  "Forehead": {
    en: "Forehead",
    zh: "额"
  },
  "temperature": {
    en: "temperature",
    zh: "温"
  },
};

function get(word, language) {
  return lang[word][language] || '';
};