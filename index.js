//Obtener Array de Strings
const getAllBreeds = async () => {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/list/all')
        if (respuesta.ok) {
            const data = await respuesta.json();
            const arr = Object.keys(data.message)
            return arr;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status)
    }
}
//Obtener Imagen random 
const getRandomDog = async () => {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breeds/image/random')
        if (respuesta.ok) {
            const imagenRandom = await respuesta.json();
            return imagenRandom.message
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status)
    }
}
//Todas las imagenes de una raza
const getAllImagesByBreed = async () => {
    try {
        const respuesta = await fetch('https://dog.ceo/api/breed/komondor/images')
        if (respuesta.ok) {
            const imagenKomondor = await respuesta.json();
            return imagenKomondor.message
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status)
    }
}
//Imagenes de la raza pasada como argumento

const getAllImagesByBreed2 = async (hound) => {
    try {
        const respuesta = await fetch(`https://dog.ceo/api/breed/${hound}/images`)
        if (respuesta.ok) {
            const imagenHound = await respuesta.json();
            return imagenHound.message
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status)
    }
}
const getGitHubUserProfile = async (username) => {
    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`)
        if (respuesta.ok) {
            const data = await respuesta.json();
            return data;
        } else {
            throw resp;
        }
    } catch (error) {
        console.log(error.status)
    }
}

const printGithubUserProfile = async (username) => {
    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`)
        if (respuesta.ok) {
            const data = await respuesta.json();
            return data;
        }
    } catch (error) {
        console.log(error.status)
    }
}

const getAndPrintGitHubUserProfile = async (username) => {
    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`)
        if (respuesta.ok) {
            const data = await respuesta.json();
            return `<section><img src="${data.avatar_url}" alt="${data.name}"><h1>${data.name}</h1><p>Public repos: ${data.public_repos}</p></section>`
        }
    } catch (error) {
        console.log(error.status)
    }
}

const userNames = ['octocat', 'alenriquez96', 'alejandroereyesb'];

const fetchGithubUsers = async (userNames) => {
    const arr = userNames.map(async (username) => {
        try {
            let respuesta = await fetch(`https://api.github.com/users/${username}`)
            if (respuesta.ok) {
                const data = await respuesta.json();
                return data;
            } else {
                throw resp;
            }
        } catch (error) {
            console.log(error.status)
        }
    });
    let results = await Promise.all(arr);
    return results;
}
