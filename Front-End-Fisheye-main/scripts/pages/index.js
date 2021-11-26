/*const photographerJson = async url => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}



class Photographer {
    constructor(){
        this.name = ""
        this.city = ""
        this.country = ""
        this.tagline = ""
        this.price = ""
    }

    fill(data){
        this.names = data.name
        this.citys = data.city
        this.countrys = data.country
        this.taglines = data.tagline
        this.prices = data.price
    }

    getName(){
        return this.name.toUpperCase()
    }
    
    buildCard(){
        const article = document.createElement('article')
        const namess = document.createElement('h1')
        namess.innerText = this.getName()
        article.appendChild(namess)

        const cityss = document.createElement('p')
        cityss.innerText = this.city
        article.appendChild(cityss)

        return article
    }
}*/

/*
  
  buildCard() {
  	const article = document.createElement('article')
    
    const title = document.createElement('h2')
    title.innerText = this.getName()
    article.appendChild(title)
    
    const species = document.createElement('p')
    species.innerText = this.species
    article.appendChild(species)
    
    return article
  }
  
  static toto() {
  	console.log('toto')
  }
}*/

/*const fetchJsonFile = async url => {
	const response = await fetch(url)
  const data = await response.json()
  return data
}


  
fetchJsonFile('https://raw.githubusercontent.com/ikahub/projet_5/main/Front-End-Fisheye-main/data/photographers.json').then(photographers => {
	const divAnimals = document.querySelector('.photographer_section')
	photographers.forEach(photographer => {
  	const instancePhotographer = new Photographer()
    instancePhotographer.fill(photographer)
      
    const article = instancePhotographer.buildCard()
    divAnimals.appendChild(article)
  })
})*/


/*async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();*/




/*photographerJson('https://raw.githubusercontent.com/ikahub/projet_5/main/Front-End-Fisheye-main/data/photographers.json').then(photogra => {
    const divPhoto = document.getElementById('photographer_section')
    // const data = 
    photogra.forEach((photographers, photoIx) => {
        const photoName = document.createElement('h1')
        photoName.innerText = photographers.name
        divPhoto.appendChild(photoName)        
    });
})*/


class App {
    constructor(){
        this.$usersCards = document.querySelector('.photographer_section')
        this.usersApi = new userApi('data/photographers.json')

    }
    async main() {
        const users = await this.usersApi.getUsers()

        users.forEach(user => {
            const template = new photographerFactory(user)
            this.$usersCards.appendChild(template.getUserCardDOM())        
        })    
    }
}

const app = new App()
app.main()



//https://raw.githubusercontent.com/ikahub/projet_5/main/Front-End-Fisheye-main/data/photographers.json