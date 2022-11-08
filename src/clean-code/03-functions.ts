(() => {

    // función para obtener información de una película por Id
    function getAllMovies(movieId: string) {
        console.log({movieId});
    }

    function getMovieById(Id: string) {
        console.log({Id});
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors(id: string) {
        console.log({id});
    }

    function getMovieCastById(id: string) {
        console.log({id});
    }

    // funcion para obtener el bio del actor por el id
    function getUsuario(ActorId: string) {
        console.log({ActorId});
    }

    function getActorBioById(Id: string) {
        console.log({Id});
    }

    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[]) {
        console.log({title, description, rating, cast});
    }


    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({title, description, rating, cast}: Movie) {
        console.log({title, description, rating, cast});
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;

    }

    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    //continuar
    const getPayAmount = ({isDead = false, isSeparated = true, isRetired = false}) : number => {
        if (isDead) return  1500;
        if (isSeparated) return  2500;
        return (isRetired) ? 3000 :  4000;
    }

})();
