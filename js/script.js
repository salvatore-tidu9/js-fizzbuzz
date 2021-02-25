// FizzBuzz
// Scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


for (var i = 1; i <= 100; i++) {

    // console.log(i);

    if ((i % 3 == 0) && (i % 5 == 0)) {

        console.log("FizzBuzz");

        document.write("FizzBuzz" + "<br>");
    }

    else if (i % 5 == 0) {

        console.log("Buzz");

        document.write("Buzz" + "<br>");
    }

    else if (i % 3 == 0) {

        console.log("Fizz");

        document.write("Fizz" + "<br>");

    }

    else {

        console.log(i);

        document.write(i + "<br>");

    }

}


