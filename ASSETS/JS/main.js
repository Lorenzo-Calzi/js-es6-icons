const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


icons.forEach((icon) => {

    if(icon.type === 'animal') {
        console.log('okey' + icon.family, icon.prefix + icon.name);
        var color = 'rgba(0, 0, 255, 1)';
      
    } else if (icon.type === 'vegetable') {
        var color = 'rgba(255, 165, 0, 1)';
     
    } else {
        var color = 'rgba(128, 0, 128, 1)';
    } 

    document.getElementById('container').insertAdjacentHTML('beforeend', `
    <div class = "icons">
        <i class= "${icon.family} ${icon.prefix}${icon.name}"" style="color:${color}"></i>
        <h3>${icon.name}</h3>
    </div>
    `)  
});


document.getElementById('categorie').addEventListener('change', function(){
   const type = this.value;
    if(type!= 'all'){
    var filteredIcons = icons.filter((item) => {
        if(item.type == type) {
            return item
        }
    });
    } else {
        var filteredIcons = icons;
    }
    document.getElementById('container').innerHTML = '';

    filteredIcons.forEach((icon) => {
    if(icon.type === 'animal') {
        console.log('okey' + icon.family, icon.prefix + icon.name);
        var color = 'rgba(0, 0, 255, 1)';
      
    } else if (icon.type === 'vegetable') {
        var color = 'rgba(255, 165, 0, 1)';
     
    } else {
        var color = 'rgba(128, 0, 128, 1)';
    } 
    document.getElementById('container').insertAdjacentHTML('beforeend', `
    <div class = "icons">
        <i class= "${icon.family} ${icon.prefix}${icon.name}"" style="color:${color}"></i>
        <h3>${icon.name}</h3>
    </div>
    `)  
   });
})













