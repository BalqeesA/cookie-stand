
workesHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am']

function random(minCookie, maxCookies) {
    return Math.floor(Math.random() * (maxCookies - minCookie + 1) + minCookie);
}

function city1() {
    const seattle = {
        name: 'seattle',
        minCookie: 23,
        maxCookies: 65,
        avgCookie: 6.3,
        custumersPerHour: [],
        cookiesPerHour: [],
        total: 0,

        calcCustumersPerHour: function () {
            for (let b = 0; b < workesHour.length; b++) {
                this.custumersPerHour.push(random(this.minCookie, this.maxCookies));



            }
        },

        calcCookiesPerHour: function () {
            
            for (let k = 0; k < workesHour.length; k++){
                this.cookiesPerHour.push(Math.floor(this.custumersPerHour[k] * this.avgCookie));
                 this.total += this.calcCookiesPerHour;
            
            } 
            
        },
        render: function () {

            let parent = document.getElementById('parnet');
            console.log(parent);

            let shopName = document.createElement('h3');

            parnet.appendChild(shopName);


            shopName.textContent = this.name;


            let unorderedList = document.createElement('ul');

            parent.appendChild(unorderedList);


            for (let j = 0; j < workesHour.length; j++) {

                let listItem = document.createElement('li');

                unorderedList.appendChild(listItem);

                listItem.textContent = `${workesHour[j]}: ${this.cookiesEachHour} cookies`
            }




        }


    }
    seattle.calcCustumersPerHour();
    seattle.calcCookiesPerHour();
    seattle.render();
    console.log(seattle);
}

function city2() {
    const tokyo = {
        name: 'tokyo',
        minCookie: 3,
        maxCookies: 24,
        avgCookie: 1.2,
        custumersPerHour: [],
        cookiesPerHour: [],
        total: 0,

        calcCustumersPerHour: function () {
            for (let i = 0; i < workesHour.length; i++) {
                this.custumersPerHour.push(random(this.minCookie, this.maxCookies));


            }
        },

        calcCookiesPerHour: function () {
            for (let k = 0; k < workesHour; k++)
                this.cookiesPerHour.push(Math.floor(this.custumersPerHour[k] * this.avgCookie));
            this.total += this.cookiesPerHour[k]

        },
        render: function () {

            let parent = document.getElementById('parnet');
            console.log(parent);

            let shopName = document.createElement('h3');

            parnet.appendChild(shopName);


            shopName.textContent = this.name;


            let unorderedList = document.createElement('ul');

            parent.appendChild(unorderedList);


            for (let j = 0; j < workesHour.length; j++) {

                let listItem = document.createElement('li');

                unorderedList.appendChild(listItem);

                listItem.textContent = `${workesHour[j]}: ${this.cookiesEachHour} cookies`
            }


        }


    }
    tokyo.calcCustumersPerHour();
    tokyo.calcCookiesPerHour();
    tokyo.render();
    console.log(tokyo);
}

function city3() {
    const dubai = {
        name: 'dubai',
        minCookie: 11,
        maxCookies: 38,
        avgCookie: 3.7,
        custumersPerHour: [],
        cookiesPerHour: [],
        total: 0,

        calcCustumersPerHour: function () {
            for (let i = 0; i < workesHour.length; i++) {
                this.custumersPerHour.push(random(this.minCookie, this.maxCookies));


            }
        },

        calcCookiesPerHour: function () {
            for (let i = 0; i < workesHour; i++)
                this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
            this.total += this.cookiesPerHour

        },
        render: function () {

            let parent = document.getElementById('parnet');
            console.log(parent);

            let shopName = document.createElement('h3');

            parnet.appendChild(shopName);


            shopName.textContent = this.name;


            let unorderedList = document.createElement('ul');

            parent.appendChild(unorderedList);


            for (let j = 0; j < workesHour.length; j++) {

                let listItem = document.createElement('li');

                unorderedList.appendChild(listItem);

                listItem.textContent = `${workesHour[j]}: ${this.cookiesEachHour} cookies`
            }




        }


    }
    dubai.calcCustumersPerHour();
    dubai.calcCookiesPerHour();
    dubai.render();
    console.log(dubai);
}
function city4() {
    const paris = {
        name: 'paris',
        minCookie: 20,
        maxCookies: 38,
        avgCookie: 2.3,
        custumersPerHour: [],
        cookiesPerHour: [],
        total: 0,

        calcCustumersPerHour: function () {
            for (let i = 0; i < workesHour.length; i++) {
                this.custumersPerHour.push(random(this.minCookie, this.maxCookies));


            }
        },

        calcCookiesPerHour: function () {
            for (let i = 0; i < workesHour; i++)
                this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
            this.total += this.cookiesPerHour

        },
        render: function () {

            let parent = document.getElementById('parnet');
            console.log(parent);

            let shopName = document.createElement('h3');

            parnet.appendChild(shopName);


            shopName.textContent = this.name;


            let unorderedList = document.createElement('ul');

            parent.appendChild(unorderedList);


            for (let j = 0; j < workesHour.length; j++) {

                let listItem = document.createElement('li');

                unorderedList.appendChild(listItem);

                listItem.textContent = `${workesHour[j]}: ${this.cookiesEachHour} cookies`
            }




        }


    }
    paris.calcCustumersPerHour();
    paris.calcCookiesPerHour();
    paris.render();
    console.log(paris);
}

function city5() {
    const lima = {
        name: 'lima',
        minCookie: 2,
        maxCookies: 16,
        avgCookie: 4.6,
        custumersPerHour: [],
        cookiesPerHour: [],
        total: 0,

        calcCustumersPerHour: function () {
            for (let i = 0; i < workesHour.length; i++) {
                this.custumersPerHour.push(random(this.minCookie, this.maxCookies));


            }
        },

        calcCookiesPerHour: function () {
            for (let i = 0; i < workesHour; i++)
                this.cookiesPerHour.push(Math.floor(this.custumersPerHour[i] * this.avgCookie));
            this.total += this.cookiesPerHour

        },
        render: function () {

            let parent = document.getElementById('parnet');
            console.log(parent);

            let shopName = document.createElement('h3');

            parnet.appendChild(shopName);


            shopName.textContent = this.name;


            let unorderedList = document.createElement('ul');

            parent.appendChild(unorderedList);


            for (let j = 0; j < workesHour.length; j++) {

                let listItem = document.createElement('li');

                unorderedList.appendChild(listItem);

                listItem.textContent = `${workesHour[j]}: ${this.cookiesEachHour} cookies`
            }




        }


    }
    lima.calcCustumersPerHour();
    lima.calcCookiesPerHour();
    lima.render();
    console.log(lima);
}

city1();
city2();
city3();
city4();
city5();



