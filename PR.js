let Places = [{
        Name: 'Chikhaldara',
        Ticket: 250,
        Distance: 150,
        Famousfor: 'Wildlife Sanctury',
        Hotels: ['Gold leaf', 'HillTop']
    },
    {
        Name: 'Amravati',
        Ticket: 150,
        Distance: 68,
        Famousfor: ['Amba Devi Temple', 'Tadoba'],
        Hotels: ['Mehfil Inn', 'Hotel Ramgiri']
    },
    {
        Name: 'Shegaon',
        Ticket: 200,
        Distance: 100,
        Famousfor: ['Gajanan Mharaj Temple', 'Aanad Sagar'],
        Hotels: ['Bhakta Nivas', 'Hotel Grand Sun']
    }
]

//Print the names of cities and places to visit 

// let V = Places.forEach(function(el, index, array) {
//     console.log(el.Name + '---' + el.Famousfor)
// })

for (let i = 0; i < Places.length; i++) {
    console.log(Places[i]['Name'], Places[i]['Famousfor'])
}

console.log(Places[0].Name)