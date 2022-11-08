(() => {

    const arrayOfNums = [33.6, 12.34];
    const temperatureCelsius = [33.6, 12.34];

    const ip = '123.123.123.123';
    const serverIp = '123.123.123.123';

    const people = [
        {id: 1, email: 'fernando@google.com'},
        {id: 2, email: 'juan@google.com'},
        {id: 3, email: 'melissa@google.com'}
    ];
    const users = [
        {id: 1, email: 'fernando@google.com'},
        {id: 2, email: 'juan@google.com'},
        {id: 3, email: 'melissa@google.com'}
    ];

    const emails = people.map(user => user.email);
    const userEmails = users.map(user => user.email);

    const jump = false;
    const canJump = false;

    const run = true;
    const canRun = true;

    const noTieneItems = true;
    const hasItems = true;

    const loading = false;
    const isLoading = false;

    const start = new Date().getTime();
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const end = new Date().getTime() - start;
    const endTime = new Date().getTime() - start;


    function book() {
        throw new Error('Function not implemented.');
    }

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function BooksUrl(url: string) {
        console.log(url);
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl(url: string) {
        console.log(url);
        throw new Error('Function not implemented.');
    }

    function areaCuadrado(side: number) {
        console.log(side);
        throw new Error('Function not implemented.');
    }

    function getSquareArea(side: number) {
        console.log(side);
        throw new Error('Function not implemented.');
    }

    function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }


})();