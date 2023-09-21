'use strict'

class Validator {
    #_errors = [];
    #_validateString = "";
    #_etalon = "0123456789_@.()qwertyuiopasdfghjklzxcvbnm";

    constructor(str) {
        this.getErrors = () => {
            return this.#_errors;
        }
        this.getError = (index) => {
            return this.#_errors[index];
        }
        this.Validate = (str) => {
            this.#_validateString = str;
            this.#_errors = [];
            return this;
        }

        this.Validate(str);
    }

    MinLength = (countLetter) => {
        if(this.#_validateString.length < countLetter){
            this.#_errors.push("Слишком мало символов");
        }
        return this;
    }
    MaxLength = (countLetter) => {
        if(this.#_validateString.length > countLetter){
            this.#_errors.push("Слишком много символов");
        }
        return this;
    }
    IsWrongLetters = () => {
        const regPattern = new RegExp(/^[a-z0-9_.@/(/)]*$/);

        if (regPattern.test(this.#_validateString) == false) {
            this.#_errors.push("Используются не валидные символы");
        }
        return this;

    }
    IsEmail = () => {
        const regPattern = new RegExp(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/);
        
        if (regPattern.test(this.#_validateString) == false) {
            this.#_errors.push("Почта не валидна");
        }
        return this;
    }
    isComplexityPassword = () => {
        const regPattern = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
        
        if (regPattern.test(this.#_validateString) === false) {
            this.#_errors.push("Пароль не валидный");
        }
        return this;
    }
}

// var validatoor = new Validator("admin@email.com");
// if(validatoor.MaxLength().MinLength().IsEmail().getErrors().length == 0) {
//
// }
