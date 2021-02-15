

const workesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am']

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
    name: 'seattle',
    minCookie: 23,
    maxCookies: 65,
    avgCookie: 6.3,
    custumersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calcCustumersPerHour:function(){
        for (let i = 0; i < workesHour.length; i++) {
            this.custumersPerHour.push(random(this.minCookie, this.maxCookies));
                
                
        }
    },
     
    calcCookiesPerHour:function(){
        for (let i = 0; i < workesHour; i++)
            this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
        this.total += this.cookiesPerHour[i]

    },
        render: function () {
        parent.appendChild(unorderList);
        
        
        
        

        let parent = document.getElementById('parent');

        let shopName = document.createElement('h3');
        parent.appendChild(shopName);
        shopName.textContent = this.name;

        let unorderList = document.createElement('ul');

        for (let i = 0; i < workesHour; i++){

        let listItem=document.createElement('li');

        unorderList.appendChild(listIteam);
        listItem.textContent = `${workesHour[i]}: ${
            this.cookiesPerHour[i]}cookies` 

            let totalIteam = document.createElement('li');

            unorderList.appendChild(this.totalIteam);
            totalIteam.textContent =`total:this.total cookies`;
       }
        



    }


}


const tokyo = {
    name: 'tokyo',
    minCookie: 3,
    maxCookies: 24,
    avgCookie: 1.2,
    custumersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calcCustumersPerHour:function(){
        for (let i = 0; i < workesHour.length; i++) {
            this.custumersPerHour.push(random(this.minCookie, this.maxCookies));
                
                
        }
    },
     
    calcCookiesPerHour:function(){
        for (let i = 0; i < workesHour; i++)
            this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
        this.total += this.cookiesPerHour[i]

    },
        render: function () {
        parent.appendChild(unorderList);
        
        
        
        

        let parent = document.getElementById('parent');

        let shopName = document.createElement('h3');
        parent.appendChild(shopName);
        shopName.textContent = this.name;

        let unorderList = document.createElement('ul');

        for (let i = 0; i < workesHour; i++){

        let listItem=document.createElement('li');

        unorderList.appendChild(listIteam);
        listItem.textContent = `${workesHour[i]}: ${
            this.cookiesPerHour[i]}cookies` 

            let totalIteam = document.createElement('li');

            unorderList.appendChild(this.totalIteam);
            totalIteam.textContent =`total:this.total cookies`;
       }
        



    }


}

const dubai = {
    name: 'dubai',
    minCookie: 11,
    maxCookies: 38,
    avgCookie: 3.7,
    custumersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calcCustumersPerHour:function(){
        for (let i = 0; i < workesHour.length; i++) {
            this.custumersPerHour.push(random(this.minCookie, this.maxCookies));
                
                
        }
    },
     
    calcCookiesPerHour:function(){
        for (let i = 0; i < workesHour; i++)
            this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
        this.total += this.cookiesPerHour[i]

    },
        render: function () {
        parent.appendChild(unorderList);
        
        
        
        

        let parent = document.getElementById('parent');

        let shopName = document.createElement('h3');
        parent.appendChild(shopName);
        shopName.textContent = this.name;

        let unorderList = document.createElement('ul');

        for (let i = 0; i < workesHour; i++){

        let listItem=document.createElement('li');

        unorderList.appendChild(listIteam);
        listItem.textContent = `${workesHour[i]}: ${
            this.cookiesPerHour[i]}cookies` 

            let totalIteam = document.createElement('li');

            unorderList.appendChild(this.totalIteam);
            totalIteam.textContent =`total:this.total cookies`;
       }
        



    }


}

const paris = {
    name: 'paris',
    minCookie: 20,
    maxCookies: 38,
    avgCookie: 2.3,
    custumersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calcCustumersPerHour:function(){
        for (let i = 0; i < workesHour.length; i++) {
            this.custumersPerHour.push(random(this.minCookie, this.maxCookies));
                
                
        }
    },
     
    calcCookiesPerHour:function(){
        for (let i = 0; i < workesHour; i++)
            this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
        this.total += this.cookiesPerHour[i]

    },
        render: function () {
        parent.appendChild(unorderList);
        
        
        
        

        let parent = document.getElementById('parent');

        let shopName = document.createElement('h3');
        parent.appendChild(shopName);
        shopName.textContent = this.name;

        let unorderList = document.createElement('ul');

        for (let i = 0; i < workesHour; i++){

        let listItem=document.createElement('li');

        unorderList.appendChild(listIteam);
        listItem.textContent = `${workesHour[i]}: ${
            this.cookiesPerHour[i]}cookies` 

            let totalIteam = document.createElement('li');

            unorderList.appendChild(this.totalIteam);
            totalIteam.textContent =`total:this.total cookies`;
       }
        



    }


}

const lima = {
    name: 'lima',
    minCookie: 2,
    maxCookies: 16,
    avgCookie: 4.6,
    custumersPerHour: [],
    cookiesPerHour: [],
    total: 0,

    calcCustumersPerHour:function(){
        for (let i = 0; i < workesHour.length; i++) {
            this.custumersPerHour.push(random(this.minCookie, this.maxCookies));
                
                
        }
    },
     
    calcCookiesPerHour:function(){
        for (let i = 0; i < workesHour; i++)
            this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
        this.total += this.cookiesPerHour[i]

    },
        render: function () {
        parent.appendChild(unorderList);
        
        
        
        

        let parent = document.getElementById('parent');

        let shopName = document.createElement('h3');
        parent.appendChild(shopName);
        shopName.textContent = this.name;

        let unorderList = document.createElement('ul');

        for (let i = 0; i < workesHour; i++){

        let listItem=document.createElement('li');

        unorderList.appendChild(listIteam);
        listItem.textContent = `${workesHour[i]}: ${
            this.cookiesPerHour[i]}cookies` 

            let totalIteam = document.createElement('li');

            unorderList.appendChild(this.totalIteam);
            totalIteam.textContent =`total:this.total cookies`;
       }
        



    }


}
