"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length < 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) !== true) {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }

  const addLogin = function(allLogins, login) {
    if (isLoginValid(login) !== true) {
      return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    } else if (isLoginUnique(allLogins, login) !== true) {
      return console.log("Такой логин уже используется!");
    } else {
      allLogins.push(login);
      console.log(`Логин ${login} успешно добавлен!`);
    }
  };
};

addLogin(logins, "Zod");
addLogin(logins, "jqueryisextremelyfast");
addLogin(logins, "robotGoogles");
addLogin(logins, "Ajax");
