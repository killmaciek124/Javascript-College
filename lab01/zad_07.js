let table5 = [1, 5, 6, 5, 5, 1, 5];
table5.sort()
for (i=0; i<table5.length; i++) {
    let licznik = 0;
    for (j=0; j<table5.length; j++) {
         
        if (table5[j] == table5[i]) {
            licznik = licznik + 1;
        }
    }
    if (licznik==1) {
        console.log('%d występuje %d raz', table5[i], licznik );
    } 
    else {
        console.log('%d występuje %d razy', table5[i], licznik);
    }
    }

