"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const folderName = "textos";
const readPromise = new Promise((resolve, reject) => {
    fs_1.readdir(textos), (err, data) => {
        if (err)
            reject(err);
        resolve(data.toString());
    };
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dirContent = yield readPromise;
        console.log(dirContent);
    }
    catch (error) {
        console.error("Falha na promise", error);
    }
});
init();
//# sourceMappingURL=exercicio1.js.map