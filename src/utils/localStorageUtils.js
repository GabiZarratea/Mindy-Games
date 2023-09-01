export const LS = {
    get: function (key) {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      } else {
        return null;
      }
    },
    remove: function (key) {
      localStorage.removeItem(key);
    },
    add: function (key, value) {
      value = JSON.stringify(value);
      localStorage.setItem(key, value);
    },
  };
  