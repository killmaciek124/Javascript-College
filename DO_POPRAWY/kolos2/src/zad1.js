"use strict";

const f1 = () => {
    return new Promise((resolve, reject) => {
        resolve(1);      
    });
};

const f2 = () => {
    return new Promise((resolve, reject) => {
        resolve(2);      
    });
};

const f3 = () => {
    return new Promise((resolve, reject) => {
        resolve(3);      
    });
};

const f4 = () => {
    return new Promise((resolve, reject) => {
        resolve(4);      
    });
};

const tab1 = [f1(), f2()]
const tab2 = [f3(), f4()]



const process = (wyn1, wyn2) => {
    return [wyn1, wyn2]
  };
  
  const result = (funTab1, funTab2, func) => {

    while (funTab1.length < funTab2.length) {
        funTab1.push(0)
    }

    while (funTab1.length > funTab2.length) {
        funTab2.push(0)
    }

    Promise.all([Promise.all(funTab1), Promise.all(funTab2)])
    .then(x=> {
        const res = []
        // console.log(x)
        for (let i = 0; i<x[0].length; i++) {
            res.push(func(x[0][i], x[1][i]))
        }

        return res
    })
    .then(x=> {
        console.log(x)
    })
  };
  
  result(tab1, tab2, process);